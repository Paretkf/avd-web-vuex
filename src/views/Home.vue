<template>
  <div class="home">
    <h1>This is an home page</h1>
    <input type="text" placeholder="name" v-model="newUser.name"> <br>
    <input type="text" placeholder="email" v-model="newUser.email"> <br>
    <input type="text" placeholder="id" v-model="newUser.id"> <br> <br>
    <button class="button" @click="addUser()">เพิ่ม User</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      newUser: {
        name: '',
        email: '',
        id: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addNewUser: 'addNewUser'
    }),
    addUser () {
      this.addNewUser(this.newUser)
      this.newUser = {
        name: '',
        email: '',
        id: ''
      }
    }
  }
}
</script>
<style>
input {
  font-size: 36px;
}
.button {
  border: 2px solid #000;
  padding: 6px 10px 6px 10px;
  text-align: center;
  width: fit-content;
  cursor: pointer;
  margin: auto;
}
</style>
