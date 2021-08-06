<template>
    <v-row justify="center" >
      <v-col>
          <matter-form :matter="matter"></matter-form>
      </v-col>
    </v-row>
</template>

<script>
import Hashids from "hashids";
import { mapState, mapGetters } from "vuex";

export default ({
    data: () => ({
      matter: {}
    }),

    async mounted () {
      this.matter = {
        id: "", title: "", text: "", author: "", treeId: "mine"
      };
      if (this.parent) {
        this.matter.parentId = this.parent.id;
        this.matter.id = await this.getUID();
      };
      if (this.userInfo) {
        this.matter.author = this.userInfo.name;
      };
    },

    computed: {
      ...mapState('matter', { parent: 'matter'}),
      ...mapGetters({userInfo: 'userInfo'}),
    },

    methods: {
      async getUID (number) {          
        const response = await this.$axios.get('/lastts')
        const lastUpdate = response.data

        var hashids = new Hashids('blue rose', 8);
        const uid = hashids.encode(lastUpdate._ts)
        return uid
      }
    },  
})
</script>
