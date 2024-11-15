<template>
  <section id="tasks">
      <h2>Tasks</h2>
      <h3>Development status of the XELIS project</h3>
      <input type="text" class="task-search" placeholder="Search" :value="search" @input="e => setSearch(e.target.value || null)">
      <div class="task-status-filter">
        <button :class="{ 'active': !status}" @click="setStatus(null)">All Status</button>
        <button :class="{ 'active': status === 'In Progress'}" @click="setStatus('In Progress')">In Progress</button>
        <button :class="{ 'active': status === 'Planned'}" @click="setStatus('Planned')">Planned</button>
        <button :class="{ 'active': status === 'Completed'}" @click="setStatus('Completed')">Completed</button>
      </div>
      <div class="task-year-filter">
        <button :class="{ 'active': !year}" @click="setYear(null)">All Years</button>
        <button :class="{ 'active': year === '2024'}" @click="setYear('2024')">2024</button>
      </div>
      <div class="task-list">
        <div v-for="(task, index) in tasks" v-bind:key="index">
          <TaskItem :name="task.name" :description="task.description" :status="task.status" :year="task.year" />
        </div>
      </div>
      <div v-if="tasks.length === 0">No results</div>
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
        let filtered = true;

        if (this.status) {
          filtered = task.status === this.status;
        }

        if (this.year && filtered) {
          filtered = task.year === this.year;
        }

        if (this.search && filtered) {
          const name = task.name.toLowerCase();
          const searchValue = this.search.toLocaleLowerCase();
          filtered = name.indexOf(searchValue) !== -1;
        }

        return filtered;
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
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 5rem;
    margin-top: 1rem;
    max-width: 40rem;
    text-align: center;
  }

  .task-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 3rem;
    justify-items: center;
    width: 100%;
  }

  .task-search {
    background: transparent;
    border: .2rem solid white;
    border-radius: 1rem;
    padding: 1.5rem 2.5rem;
    font-weight: bold;
    color: white;
    outline: none;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 100rem;
    opacity: .5;
  }

  .task-search:active, .task-search:focus, .task-search:not(:placeholder-shown) {
    opacity: 1;
  }

  .task-status-filter {
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
  }

  .task-year-filter {
    margin-bottom: 4rem;
    display: flex;
    gap: 1rem;
  }

  .task-status-filter, .task-year-filter {
    button {
      background: white;
      border: none;
      padding: .6rem 1rem;
      opacity: .4;
      cursor: pointer;
    }

    button:hover, button.active {
      opacity: 1;
    }
  }

  .disclaimer {
    margin-top: 4rem;
    opacity: .8;
    font-weight: lighter;
  }
}
</style>