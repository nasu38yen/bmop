<template>
    <v-row justify="center" >
      <v-col>
        <matter-form :matter="matter"></matter-form>
      </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";

export default ({
    data: () => ({
      matter: {}
    }),

    mounted () {
        this.matter = JSON.parse(JSON.stringify(this.storeMatter)) 
    },

    computed: {
        ...mapState('matter', { storeMatter: 'matter'})
    },
})
</script>
