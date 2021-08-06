<template>
  <v-row justify="center" align="center">
    <!--
    <v-col cols="12" sm="8" md="6" v-if="matter">
      <matter-content :matter="matter"></matter-content>
    </v-col> 
    -->
  </v-row>
</template>

<style>
</style>

<script>
import { mapGetters , mapMutations } from "vuex";
import axios from "axios";

export default {
  data: () => ({
  }),

  async asyncData({$axios}) {
    let response = await $axios.get('/matter/root');
    const matter = response.data;

    response = await axios.get("/.auth/me");
    const login = response.data.clientPrincipal;

    let user = null;
    if (login) {
      console.log("login: " + login.userId);
      let url = "/userInfo/" + login.identityProvider + "/" + login.userId
      response = await $axios.get(url);
      user = response.data;
    }

    return { matter, login, user };
  },

  mounted: async function () {
    this.setLogin(this.login);
    this.setUserInfo(this.user);

    if (this.login && !this.user) {
      this.$router.push('/user/new');
    }
    if (this.login && !this.matter) {
      this.$router.push('/addroot');
    }
    else {
      this.$router.push('/matter/last');
    }
  },

  computed: {
    ...mapGetters({userInfo: 'userInfo'}),
  },

  methods: {
    ...mapMutations(['setLogin']), 
    ...mapMutations(['setUserInfo']), 
    ...mapMutations('matter', ['setMatter']), 
  }
}
</script>
