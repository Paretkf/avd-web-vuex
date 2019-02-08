<template>
  <div class="about">
    <h1>This is an about page</h1>
    <li v-for="(user, index) in users" :key="index">
      {{user.id}} {{user.name}} => {{user.email}}
      <button @click="removerUser(index)">x</button>
    </li>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      users: (state) => state.users
    })
  },
  methods: {
    ...mapActions({
      removerUser: 'removerUser'
    })
  }
}
</script>

<style>
li {
  font-size: 36px;
}
</style>