<template>
  <div class="text-center mt-5">
    <button  class="bar" @click="signOut">Sign Out</button>
  </div>
</template>

<script>
import {supabase} from "../supabase"

export default {
    name: "SignOut",

    methods:{
        async signOut() {
            try {
                const {error} = await supabase.auth.signOut()
                if (error) throw error;
                this.$router.push("/auth");}
                catch (error) {
                    console.log(error);
                    error=error;
                }
            }
        }
    }
</script>

<style>
</style>