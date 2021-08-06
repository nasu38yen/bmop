<template>
  <v-row justify="center" >
    <v-col>
      <matter-content :matter="matter"></matter-content>
      <div class="mt-4">
        <v-btn :disabled='!prior' :to="priorPage">前ページ</v-btn>
        <v-btn :disabled='!next' :to="nextPage">次ページ</v-btn>            
      </div>
      <div class="mt-4">
        <v-toolbar dense>
          <v-toolbar-title>関連ページ</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item nuxt :to="editPage" v-if="editable">
                <v-list-item-title>現ページの編集</v-list-item-title>
              </v-list-item>
              <v-list-item nuxt :to="newChildPage" v-if="editable">
                <v-list-item-title>子ページの追加</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <matter-list v-if="parent" :matters="[parent]" color="blue-grey darken-4"></matter-list>
        <matter-list v-if="children && (children.length > 0)" :matters="children"></matter-list>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default ({
  data: () => ({
    id: '',
    next: {},
    prior: {}
  }),

  async asyncData({ params, $axios}) {
    let id = params.id
    let response
    let matter
    let children
    let parent

    if (!id || id === "last") {
      response = await $axios.get('/lastmatter')
    } else {
      response = await $axios.get('/matter/' + id)
    }
    matter = response.data
    
    // parent
    if (matter && matter.parentId) {
      response = await $axios.get('/matter/' + matter.parentId)
      parent = response.data
    }
    
    // children
    if (matter) {
      response = await $axios.get('/children/' + id)
      children = response.data
    }

    return { matter, parent, children }
  },

  mounted: async function () {
    this.setMatter(this.matter)

    this.next = await this.getNext()
    this.prior = await this.getPrior()
  },

  computed: {
    ...mapState({userInfo: 'userInfo'}),

    editable: function () {
      return this.userInfo
    },
    editPage: function () {
      const link = "/matter/" + this.matter.id + "/edit";
      return link;
    },
    newChildPage: function () {
      const link = "/matter/" + this.matter.id + "/newchild";
      return link;
    },
    priorPage: function () {
      if (!this.prior) return "";
      const link = "/matter/" + this.prior.id;
      return link;
    },
    nextPage: function () {
      if (!this.next) return "";
      const link = "/matter/" + this.next.id;
      return link;
    },
  },

  methods: {
    ...mapMutations('matter', ['setMatter']), 

    async getNext () {
      if (!this.matter) return null
      const response = await this.$axios.get('/nextid', {
        params: {
          createdAt: this.matter.createdAt
        }        
      })
      const matter = response.data
      return matter
    },
    async getPrior () {
      if (!this.matter) return null
      const response = await this.$axios.get('/priorid', {
        params: {
          createdAt: this.matter.createdAt
        }        
      })
      const matter = response.data
      return matter
    },
  },  
})
</script>

<style>
</style>
