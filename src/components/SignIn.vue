<template>
<body class="text-center ">
  <div>
  <h3>SignIn</h3>
  </div>
  <div class="borderSign">
  <div class="emailbutton">
    <input type="email" v-model="email" placeholder="Enter your Email" />
  </div>
  <div class="passwordlable">
    <input type="password" v-model="password" placeholder="Enter your Password" style="margin-left: 2px;" />
  </div>

  <button class="signinbutton" @click="signIn">SignIn</button>  
  </div>
  </body>
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
.borderSign{
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
}
</style>