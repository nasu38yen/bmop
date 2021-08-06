<template>
    <v-row justify="center" >
      <v-col>
          <matter-form :matter="matter"></matter-form>
      </v-col>
    </v-row>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default ({
    data: () => ({
      matter: {}
    }),

    mounted () {
      this.matter = {
        id: "root", title: "", text: "", author: "", treeId: "mine"
      }
      if (this.userInfo) {
        this.matter.author = this.userInfo.name;
      }
    },

    computed: {
      ...mapGetters({userInfo: 'userInfo'}),
    },
})
</script>
