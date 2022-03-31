<template>
<!-- <Nav/> -->
<div class="text-center">
    <div>
        <SignIn v-if="signIn" />
        <SignUp v-else />
                        <div id="register-link" class="text-right">
                  <a href="#" class="text-info" @click="change" >Register here</a>
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
.changebutton{
margin-top: 10px;
}

</style>