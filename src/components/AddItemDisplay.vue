<template>
  <tr>
    <td><input type="text" v-model="item.name"></td>
    <td><input type="text" v-model="item.description"></td>
    <td><input type="text" v-model="item.state"></td>
    <td><button @click="SaveItem">Save</button></td>
  </tr>

</template>

<script>
export default {
  data() {
    return{
      item: {} ,
    }
    
  },
  methods: {

    SaveItem()
    {
      this.$emit("addItem", this.item)
    }
  }
}

</script>

<style>
table,
th,
td {
  border: 1px solid black;
  text-align: "left";
}
table.center {
  width: 70%;
  margin-left: 15%;
  margin-right: 15%;
  border-collapse: collapse;
}
</style>
