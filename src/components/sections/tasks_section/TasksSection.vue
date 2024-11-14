<template>
  <section id="tasks">
      <h2>Tasks</h2>
      <h3>Development status of the XELIS project</h3>
      <input type="text" class="task-search" placeholder="Search" :value="search" @input="e => setSearch(e.target.value || null)">
      <div class="task-status-filter">
        <button @click="setStatus(null)">All Status</button>
        <button @click="setStatus('In Progress')">In Progress</button>
        <button @click="setStatus('Planned')">Planned</button>
        <button @click="setStatus('Completed')">Completed</button>
      </div>
      <div class="task-year-filter">
        <button @click="setYear(null)">All years</button>
        <button @click="setYear('2024')">2024</button>
      </div>
      <div class="task-list">
        <div v-for="(task, index) in tasks" v-bind:key="index">
          <TaskItem :name="task.name" :description="task.description" :status="task.status" :year="task.year" />
        </div>
      </div>
      <div class="disclaimer">
        / Does NOT include previous achievements, internal tasks, bug fixes, maintenance, minor enhancements, etc.
      </div>
  </section>
</template>

<script>
import TaskItem from "@/components/sections/tasks_section/TasksItem.vue";
import tasks from './tasks.js';

export default {
  components: {
    TaskItem
  },
  data() {
    return {
      searchCancelTimeout: null,
    };
  },
  methods: {
    pushQuery(search, status, year) {
      const query = {};
      if (search) query[`search`] = search;
      if (status) query[`status`] = status;
      if (year) query[`year`] = year;

      this.$router.push({ path: '/roadmap', query });
    },  
    setYear(year) {
      this.pushQuery(this.search, this.status, year);
    },
    setStatus(status) {
      this.pushQuery(this.search, status, this.year);
    },
    setSearch(searchValue) {
      if (this.searchCancelTimeout) clearTimeout(this.searchCancelTimeout);

      this.searchCancelTimeout = setTimeout(() => {
        this.pushQuery(searchValue, this.status, this.year);
        this.searchCancelTimeout = null;
      }, 400);
    },
  },
  computed:{
    search() {
      return this.$route.query.search;
    },
    year() {
      return this.$route.query.year;
    },
    status() {
      return this.$route.query.status;
    },
    tasks() {
      return tasks.filter((task) => {
        if (this.status) {
          return task.status === this.status;
        }

        if (this.year) {
          return task.year === this.year;
        }

        if (this.search) {
          const name = task.name.toLowerCase();
          const searchValue = this.search.toLocaleLowerCase();
          return name.indexOf(searchValue) !== -1;
        }

        return true;
      });
    },
  }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#tasks {
  position: relative;
  z-index: 1;

  h2 {
    margin-bottom: 0;
  }

  .task-list {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }

  .task-search {
    background: transparent;
    border: .3rem solid white;
    border-radius: 1rem;
    padding: 1.5rem 2.5rem;
    font-weight: bold;
    color: white;
    outline: none;
    margin-bottom: 1rem;
    width: 100%;
  }

  .task-status-filter {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }

  .task-year-filter {
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
  }

  .disclaimer {
    margin-top: 4rem;
    opacity: .8;
    font-weight: lighter;
  }
}
</style>