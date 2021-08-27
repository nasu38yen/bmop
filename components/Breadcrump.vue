<template>
  <span class="bread-crump">
    <template v-for="crump in crumps">
      <a :key="crump.id" :href="`/matter/${crump.id}`">{{ crump.title }}</a>
      ＞
    </template>
  </span>
</template>

<script>
export default ({
  name: 'Breadcrump',
  props: {
    matter: {},
  },
  data: () => ({
    crumps: [],
  }),
  mounted: async function () {
    this.setBreadcrump()
  },
  computed: {
  }, 
  methods: {
    async setBreadcrump () {
      if (!this.matter) return;      
      var parent = this.matter;
      while (parent.id != "root") {
        var response = await this.$axios.get('/matter/' + parent.parentId)
        parent = response.data;
        this.crumps.unshift(parent);
      }
    },    
  }
})
</script>