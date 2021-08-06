<template>
    <v-row justify="center" >
      <v-col>
          <user-form :user="user"></user-form>
      </v-col>
    </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default ({
  data: () => ({
    user: {}
  }),

  async mounted () {
    //this.user = JSON.parse(JSON.stringify(this.login)) 
    this.user = {... this.login};
  },

  computed: {
    ...mapGetters({login: 'login'}),
  },  

  methods: {
  },  
})
</script>
