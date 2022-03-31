<template>
    <div id="login">
      <h3 class="text-center text-white pt-5">Login form</h3>
      <div class="container">
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <!-- <form id="login-form" class="form" action="" method="post"> -->
                <h3 class="text-center text-info">Sign Up</h3>
                <div class="form-group">
                  <label for="username" class="text-info">Email:</label
                  ><br />
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Enter your Email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="password" class="text-info">Password:</label
                  ><br />
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Enter your Password"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <button class="btn btn-info btn-md" @click="signUp">
                    Sign Up
                  </button>
                </div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>
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