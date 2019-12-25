<template>
    <div id= "SignUp">
        <div> Sign Up </div>
        ID : <input v-model="user.id" placeholder="ID"> <br />
        Password : <input v-model="user.password" type="password" placeholder="password">
        <button v-on:click="signUp" > SignUp </button>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function () {
        return {
            user : {
                id : '',
                password : '',
            }
        }
    },
    methods: {
        signUp: function (event) {
            this.$http.post('/api/join', {
                user : this.user
            })
            .then((response) => {
                if (response.data.result === 0) {
                    alert('Error, please, try again')
                }
                else if (response.data.result === 1) {
                    alert('Success')
                    this.$router.push('login')
                }
            })
            .catch(function (error) {
                alert('error')
            })
        }
    } 
}
</script>