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
      <button @click="submitTask" class="btn btn-warning rounded-0">
        SUBMIT
      </button>
    </div>
    <table class="table table-bordered mt-5 ">
      <thead>
        <tr>
          <th scope="col">Task</th>
          <th scope="col">Status</th>
          <th scope="col" class="text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            {{ task.name }}
          </td>
          <td>
            {{ task.status }}
          </td>

          <div @click="editTask(index)">
            <button>Edit</button>
          </div>
          <div>
            <button @click="changeStatus(index)">Complete</button>
          </div>
          <div @click="deleteTask(index)">
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
        <tr v-for="(task, index) in tasks" :key="index">
          <td>
            {{ task.name }}
          </td>
          <td>
            {{ task.status }}
          </td>

          <div @click="editTask(index)">
            <button>Edit</button>
          </div>
          <div>
            <button @click="changeStatus(index)">Re-do</button>
          </div>
          <div @click="deleteTask(index)">
            <button>Delete</button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
</template>






<script>
export default {
  name: "TaskItem",

  data() {
    return {
      task: "",
      editedTask: null,
      availableStatuses: ["To-do", "Donete"],
      tasks: [
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
      ],
      completedTasks: [
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
        {
          name: "",
          status: "",
        },
      ],
    };
  },

  methods: {
    submitTask() {
      if (this.task.length === 0) return;

      if (this.editedTask === null) {
        this.tasks.push({
          name: this.task,
          status: "To-do",
        });
      } else {
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = "";

      console.log(this.task);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(index) {
      let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      if (++newIndex > 1) newIndex = 0;
      this.tasks[index].status = this.availableStatuses[newIndex];
    },
  },
};
</script>

<style>
</style>