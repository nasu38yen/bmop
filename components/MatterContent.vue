<template>
    <div id="content-panel">
        <h1 class="matter-title mb-4">{{ matter.title }}</h1>
        <div class="matter-body mb-6" v-html="$md.render(matter.text)"></div>
        <div class="matter-info">
          <span class="matter-created mr-4">登録：{{ matter.createdAt | format-date }}</span>
          <span class="matter-updated mr-4">更新：{{ matter.updatedAt | format-date }}</span>
          <span class="matter-author">by {{ matter.author }}</span>          
        </div>
   </div>
</template>

<script>
export default ({
  name: 'MatterContent',
  props: {
    matter: {} 
  },
})
</script>