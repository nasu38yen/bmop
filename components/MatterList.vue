<template>
  <v-list :color="color">
    <v-list-item v-for="matter in matters" :key="matter.id" link :to="`/matter/${matter.id}`">
      <v-list-item-content>
        <v-list-item-title>{{ matter.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ matter.createdAt | format-date }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default ({
  name: 'MatterList',
  props: {
    matters: [],
    color: ""
  },
})
</script>