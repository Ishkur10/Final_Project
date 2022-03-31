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
              <!-- <form id="login-form" class="form" @submit="signIn.prevent" method="post"> -->
                <h3 class="text-center text-info">Sign In</h3>
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
                  <button class="btn btn-info btn-md" @click="signIn">
                    Sign In
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
// import { useRouter } from "vue-router";
// const router = useRouter();
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async signIn() {
      try {
        const { error } = await supabase.auth.signIn({
          email: this.email,
          password: this.password,
        });
        if (error) throw error;
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        error = error;
      }
    },
  },
};
</script>

<style>
/* .borderSign{
  border: 2px solid ;
  padding-bottom: 20px;
  width: auto;
  margin-left: 1000px;
  margin-right: 1000px;
  align-content: center;
}
.emailbutton{
  margin-top: 20px;
}
.passwordlable{
  margin-top: 10px;
  margin-bottom: 20px
}
.signinbutton{
  margin-top: 10px;
} */
</style>