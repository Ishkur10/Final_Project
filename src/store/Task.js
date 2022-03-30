import { defineStore } from "pinia";
import { createLogger } from "vite";
import { supabase } from "../supabase";
export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    getUserId() {
      const myUser = localStorage.getItem('supabase.auth.token');
      console.log(myUser);
    }
  },
});