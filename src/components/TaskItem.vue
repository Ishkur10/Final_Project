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
        <tr v-for="(task, index) in pendingTasks" :key="index">
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
            <button @click="changeStatus(task)">Complete</button>
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
        <tr v-for="(task, index) in completedTasks" :key="index">
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
            <button @click="changeStatus(task)">Re-do</button>
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
        // {
        //   name: "Tarea 1",
        //   status: "To-do",
        // },
        // {
        //   name: "Tarea 2",
        //   status: "Donete",
        // },
        // {
        //   name: "Tarea 3",
        //   status: "To-do",
        // },
      ],
      pendingTasks: [],
      completedTasks: [
        // {
        //   name: "",
        //   status: "",
        // },
        // {
        //   name: "",
        //   status: "",
        // },
        // {
        //   name: "",
        //   status: "",
        // },
        // {
        //   name: "",
        //   status: "",
        // },
      ],
    };
  },
  mounted() {
    this.sortTasks();
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
      this.sortTasks();
      console.log(this.task);
    },
    deleteTask(index) {
      this.pendingTasks.splice(index, 1);
      this.completedTasks.splice(index, 1);
    },
    sortTasks() {
      this.pendingTasks = [];
      this.completedTasks = [];
      this.tasks.forEach(task => {
        if(task.status === 'To-do'){
          this.pendingTasks.push(task)
        } else {
          this.completedTasks.push(task)
        }
      })
    },
    editTask(index) {
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },
    changeStatus(task) {
      let myIndex = this.tasks.indexOf(task);
      if(this.tasks[myIndex].status === 'To-do'){
        this.tasks[myIndex].status = 'Donete'
      } else {
        this.tasks[myIndex].status = 'To-do'
      }
      // let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
      // if (++newIndex > 1) newIndex = 0;
      // this.tasks[index].status = this.availableStatuses[newIndex];
      this.sortTasks()
    },
  },
};
</script>

<style>
</style>