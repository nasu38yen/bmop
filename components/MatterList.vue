<template>
  <v-list :color="color">
    <v-subheader v-if="isParent">親ページ</v-subheader>
    <v-subheader v-if="isChildren">子ページ</v-subheader>
    <div v-for="matter in matters" :key="matter.id">
      <v-list-item link :to="`/matter/${matter.id}`">
        <v-list-item-content>
          <v-list-item-title>
            {{ matter.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <div>{{ matter.createdAt | format-date }}</div>          
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action v-if="showAction">
          <v-btn icon @click.prevent="openBreadcrump" @mousedown.stop @touchstart.native.stop>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="showBreadcrump">
        <v-list-item-content>
          <v-list-item-subtitle>
            <breadcrump :matter="matters[0]"></breadcrump>{{ matter.title }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default ({
  name: 'MatterList',
  props: {
    matters: [],
    color: "",
    type: ""
  },
  data: () => ({
    showBreadcrump: false,
  }),

  mounted: async function () {
  },

  computed: {
    isParent: function () {
      return this.type === "parent"
    },
    isChildren: function () {
      return this.type === "children"
    },
    showAction: function () {
      return this.isParent && !this.showBreadcrump && this.matters[0].id !== 'root'
    },
  },
  
  methods: {
    async openBreadcrump () {
      this.showBreadcrump = true;
    },    
  }
})
</script>