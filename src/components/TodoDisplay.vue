<template>
  <div>
    <span>{{ list.name }} (</span>
    <router-link :to="{ name: 'edit', params: { id: list.id } }">
      <span>edit</span>
    </router-link>
    <span>|</span>
    <router-link :to="{ name: 'delete', params: { id: list.id } }">
      <span>delete</span>
    </router-link>
    <span>)</span>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  }
}
</script>


<style>
</style>
