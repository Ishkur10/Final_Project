<template>
      <h3>Sign Up</h3>
      <div class="form-group">

          <label>Email</label>
          <input type="email" v-model="email" placeholder="Email"/>

          <label>Password</label>
          <input type="password" v-model="password" placeholder="Password"/>


         <button @click="signUp">SignUp</button>        

      </div>

       

</template>

<script>
import { supabase } from "../supabase";

export default {
    name:'SignUp',
    data(){
        return{
            email:"",
            password:"",
        }
    },
    methods:{
        async signUp() {
        const { user, error } = await supabase.auth.signUp({
        email: this.email,
        password: this.password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
        },
    },
};

</script>

<style>

</style>