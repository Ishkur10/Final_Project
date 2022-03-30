<template>
  <div>
    <h2 class="text-center mt-5">TASK MAKER</h2>
    <div class="d-flex">
      <input
        v-model="task"
        type="text"
        placeholder="Enter Text"
        class="form-control"
      />
      <button @click="submitButton" class="btn btn-warning rounded-0">
        SUBMIT
      </button>
    </div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in pendingTasks" :key="index">
          <td>
            {{ task.title }}
          </td>
          <td>Pendiente</td>

          <div @click="editButton(task)">
            <button>Edit</button>
          </div>
          <div>
            <button @click="changeStatus(task)">Complete</button>
          </div>
          <div @click="deleteTask(task)">
            <button>Delete</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th scope="col">Completed Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in completedTasks" :key="index">
          <td>
            {{ task.title }}
          </td>
          <td>Donete</td>

          <div @click="editButton(task)">
            <button>Edit</button>
          </div>
          <div>
            <button @click="changeStatus(task)">Re-do</button>
          </div>
          <div @click="deleteTask(task)">
            <button>Delete</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>






<script>
import { supabase } from "../supabase";
export default {
  name: "TaskItem",

  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["To-do", "Donete"],
      userId: "",
      tasks: [],
      pendingTasks: [],
      completedTasks: [],
      todoTask: [],
      editing: false,
      taskId: null
    };
  },
  mounted() {
    this.sortTasks();
    this.getAllTasks();
    this.getUserId();
  },
  methods: {
    async submitButton() {
      if(this.editing === false) {
        await this.submitTask();
      } else {
        await this.editTask();
        this.editing = false;
        this.task = '';
      }
    },
    async editTask() {
        const { data, error } = await supabase
        .from("tasks")
        .update({ title: this.task })
        .match({ id: this.taskId });
        this.getAllTasks()
    },
    async submitTask() {
      if (this.task.length === 0) return;

      const myId = this.getUserId();

      try {
        const { data, error } = await supabase
          .from("tasks")
          .insert([{ title: this.task, user_id: myId }]);
        if (error) throw error;
        this.task = "";
        this.getAllTasks();
      } catch (error) {
        console.log(error);
      }
    },


    async deleteTask(task) {
      const myId = task.id;
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: myId });
      await this.getAllTasks();
      // this.pendingTasks.splice(index, 1);
      // this.completedTasks.splice(index, 1);
    },

    async getAllTasks() {
      const { data: databaseTasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = databaseTasks;
      this.sortTasks();
    },

    sortTasks() {
      this.pendingTasks = [];
      this.completedTasks = [];
      this.tasks.forEach((task) => {
        if (task.is_complete === false) {
          this.pendingTasks.push(task);
        } else {
          this.completedTasks.push(task);
        }
      });
    },

    async editButton(value) {
        this.editing = true;
        this.task = value.title;
        this.taskId = value.id;
    },

    changeStatus(task) {
      let myIndex = this.tasks.indexOf(task);
      if (this.tasks[myIndex].is_complete === false) {
        this.tasks[myIndex].is_complete = true;
      } else {
        this.tasks[myIndex].is_complete = false;
      }
    

      // let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      // if (++newIndex > 1) newIndex = 0;
      // this.tasks[index].status = this.availableStatuses[newIndex];
      this.sortTasks();
    },

    getUserId() {
      const data = localStorage.getItem("supabase.auth.token");
      const session = JSON.parse(data);
      const userId = session.currentSession.user.id;
      this.userId = userId;
      return userId;
    },
  },
};
</script>

<style>
</style>