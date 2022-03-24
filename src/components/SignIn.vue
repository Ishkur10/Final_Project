<template>
<body class="text-center">
  

  <h3 class="h3 mb-3 fw-normal">SignIn</h3>
  <div>
    <label>Email</label>
    <input type="email" v-model="email" placeholder="Email" />
  </div>
  <div>
    <label>Password</label>
    <input type="password" v-model="password" placeholder="Password" />
  </div>

  <button @click="signIn">SignIn</button>
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
</style>