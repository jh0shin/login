<template>
    <div id="login">
        <div> Login </div>
        <input v-model="user.id" placeholder="ID"> <br/>
        <input v-model="user.password" type="password" placehoder="password"> <br/>
        <button v-on:click="login">login</button>
        <a v-bind:href="url.signUpUrl">Sign up</a>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data: function() {
        return {
            user: {
                id : '',
                password : ''
            },
            url: {
                signUpUrl : '/account/signup'
            }
        }
    },
    methods: {
        login : function (event) {
            this.$http.post('/api/account/login', {
                user : this.user
            })
            .then(
                (response) => { // login success
                    if (response.data.result === 1)
                        alert('success login');
                    else
                        alert('No user found');
                },
                (error) => { // login failure
                    alert(error.response.data.error)
                }
            )
        }
    }
}
</script>