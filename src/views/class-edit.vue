<template>
  <div>
    <H1>To Do Edit</H1>
    <UserDisplay />
    <br>
    <h4>{{ list.name }}</h4>

    <form @submit.prevent="updateList">

      <br>Name:
      <input v-model="list.name" type="text" id="name">
      <br>
    
      <input type="submit" name="submit" value="Save">
      <button name="cancel" v-on:click.prevent="cancel()">Cancel</button>
    </form>
    <br>
    <button v-on:click.prevent="setAddItem()">Add</button>
    <table class="center">
      <ItemDisplay v-for="item in items" :key="item.id" :item="item" @updateItem="updateItem(item)" @deleteItem="deleteItem(item)"/> 
      <AddItemDisplay v-if="addListItem" @addItem="addItem"/> 
    </table>

  </div>
</template>

<script>
import ItemDisplay from '@/components/ItemDisplay.vue'
import AddItemDisplay from '@/components/AddItemDisplay.vue'
import TodoServices from "@/services/TodoServices.js";
export default {
   components: {
    ItemDisplay,
    AddItemDisplay,
    UserDisplay
  },
  props: ['id'],

  data() {
    return {
      list: {},
      items: {},
      addListItem: false,
      errors: {}
    }
  },
  created() {
    TodoServices.getList(this.id)
      .then(response => {
        this.list = response.data.list
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
      TodoServices.getListItems(this.id)
      .then(response => {
        this.items = response.data.items
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  methods: {
    updateList() {
      console.log(this.id)
      console.log(this.list)
      TodoServices.updateList(this.id, this.list)
        .then(() => {
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          if (error.response.status == '406') {
            this.errors = {}
            for (let obj of error.response.data) {
              this.$set(this.errors, obj.attributeName, obj.message)
            }
          }
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    },
    setAddItem()
    {
      this.addListItem=true;

    },

    updateItem(item) {
      TodoServices.updateListItem(this.id, item.id, item) 
        .then(() => {
        })
    },

    deleteItem(item) {
      TodoServices.deleteListItem(this.id, item.id) 
        .then(() => {
          this.items.forEach((item1, i) => {
            if(item1.id == item.id)
            {
              this.items.splice(i, 1);
            }
          })
        })
    },

    addItem(item) {
      TodoServices.addListItem(this.id, item) 
        .then((response) => {
          item.id=response.data.itemId
          this.items.push(item)
          this.addListItem=false;
        })
        .catch(error => {
          if (error.response.status == '406') {
            this.errors = {}
            for (let obj of error.response.data) {
              this.$set(this.errors, obj.attributeName, obj.message)
            }
          }
        })
    },
  }
}
</script>

<style></style>
