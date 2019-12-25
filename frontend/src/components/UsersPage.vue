<template>
  <div>
    <h1>사용자 상세목록</h1>
    <strong v-for="user in users" v-bind:key="user">{{user.name}},{{user.age}}</strong>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/tests/${id}`)
    .then((response) => {
      this.users = response.data
    })
  },
  data: function () {
    return {
      users: []
    }
  }
}
</script>