<template>
  <tr>
    <td><span v-if="!editItem">{{ item.name }} </span>
    <input v-model="todoItem.name" type="text" v-if="editItem"/></td>
    <td><span v-if="!editItem">{{ item.description }} </span>
    <input v-model="todoItem.description" type="text" v-if="editItem"/></td>
    <td><span v-if="!editItem">{{ item.state }} </span>
    <input v-model="todoItem.state" type="text" v-if="editItem"/></td>
    <td><button v-if="!editItem" @click="Edit">Edit</button><button v-if="editItem" @click="SaveItem">Save</button><button @click="DeleteItem">Delete</button> </td>
  </tr>

</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return{
      editItem: false ,
      todoItem: this.item,
    }
    
  },
  methods: {

    Edit()
    {
      this.editItem = true;
    },
    SaveItem()
    {
      this.$emit("updateItem", this.todoitem)
      this.editItem = false;
    },
    DeleteItem()
    {
      this.$emit("deleteItem", this.item)
    },

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
