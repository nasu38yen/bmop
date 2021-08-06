<template>
  <v-container class="note-container">
    <v-row justify="center" >
      <v-col>
        <matter-list :matters="matters"></matter-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default ({
    data: () => ({
    }),

    async asyncData({ params, $axios}) {
        const response = await $axios.get('/matter_recentries')
        const matters = response.data
        return { matters }
    },
})
</script>
