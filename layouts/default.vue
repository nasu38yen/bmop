<template>
  <v-app dark>
    <v-app-bar clipped-left fixed app>
      <v-container class="matter-container py-0 fill-height">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title v-text="title" class="wf-sawarabimincho logo" style="cursor: pointer" @click="$router.push('/matter/root')" />
        <v-spacer />
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container class="matter-container">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <v-container class="matter-container py-0 fill-height">
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary clipped app>
      <v-list nav>
        <v-list-item-group>
            <v-list-item to="/matter/recentries"><v-list-item-title>最近のページ</v-list-item-title></v-list-item>
            <v-list-item to="/matter/last"><v-list-item-title>最新のページ</v-list-item-title></v-list-item>
            <v-list-item href="/login"><v-list-item-title>ログイン</v-list-item-title></v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
.wf-sawarabimincho { font-family: "Sawarabi Mincho"; }
.matter-container {
  max-width: 900px !important; 
}
.matter-container img{
  max-width: 100%;
}
.logo {
  cursor: pointer !important;
  font-size: 1.7rem !important;
}
.theme--dark.v-app-bar.v-toolbar.v-sheet {
    background-color: #253c50;
}
.copylight {
  margin-right: 10px;
}
</style>


<script>
import { mapGetters } from "vuex";
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: 'ニュー永安寺'
    }
  },

  computed: {
    ...mapGetters({userInfo: 'userInfo'}),
  },  
}
</script>
