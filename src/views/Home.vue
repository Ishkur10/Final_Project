<template>
<div class="container" style="max-width: 600px"> 
<h1 class="text-center mt-5"> Welcome to hell</h1>
<SignOut/>
<TaskItem>

</TaskItem>
</div>
</template>

<script>
import SignOut from "../components/SignOut.vue"
import TaskItem from "../components/TaskItem.vue"
export default {
    name:'Home',
    components:{
        SignOut,
        TaskItem
    }
}
</script>

<style>

</style>