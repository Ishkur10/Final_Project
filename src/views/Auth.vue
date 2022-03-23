<template>
      <div id="app">
<!-- <Nav/> -->
<div class="wrapper">
    <div>
        <SignIn v-if="signIn" />
        <SignUp v-else />
        <button @click="change">Change</button>
    </div>
</div>
    </div>
</template>

<script>

import Nav from "../components/Nav.vue"
import SignIn from "../components/SignIn.vue"
import SignUp from "../components/SignUp.vue"


export default {
name: 'Auth',
    components:{
        Nav,
        SignIn,
        SignUp,
},
data() {
    return {
        signIn: true
    }
},
methods: {
    change() {
        if(this.signIn) {
            this.signIn = false
        } else {
            this.signIn = true
        }
    }
}
}
</script>

<style>

</style>