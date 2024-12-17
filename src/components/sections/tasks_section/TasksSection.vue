<template>
  <section id="tasks">
      <h2>Tasks</h2>
      <h3>Development status of the XELIS project</h3>
      <input type="text" class="task-search" placeholder="Search" :value="search" @input="e => setSearch(e.target.value || null)">
      <div class="filters">
        <div>
          <div>Status</div>
          <div class="filter-buttons">
            <button :class="{ 'active': !status}" @click="setStatus(null)">All</button>
            <button :class="{ 'active': status === 'In Progress'}" @click="setStatus('In Progress')">
              In Progress ({{ countTasks('In Progress') }})

            </button>
            <button :class="{ 'active': status === 'Planned'}" @click="setStatus('Planned')">
              Planned ({{ countTasks('Planned') }})
            </button>
            <button :class="{ 'active': status === 'Completed'}" @click="setStatus('Completed')">
              Completed ({{ countTasks('Completed') }})
            </button>
          </div>
        </div>
        <div>
          <div>Years</div>
          <div class="filter-buttons">
            <button :class="{ 'active': !year}" @click="setYear(null)">All</button>
            <button :class="{ 'active': year === '2025'}" @click="setYear('2025')">2025</button>
            <button :class="{ 'active': year === '2024'}" @click="setYear('2024')">2024</button>
            <button :class="{ 'active': year === '2023'}" @click="setYear('2023')">2023</button>
          </div>
        </div>
        <div>
          <div>Priority</div>
          <div class="filter-buttons">
            <button :class="{ 'active': !priority}" @click="setPriority(null)">All</button>
            <button :class="{ 'active': priority === 'High'}" @click="setPriority('High')">High</button>
            <button :class="{ 'active': priority === 'Mid'}" @click="setPriority('Mid')">Mid</button>
            <button :class="{ 'active': priority === 'Low'}" @click="setPriority('Low')">Low</button>
          </div>
        </div>
        <div>
          <div>Tags</div>
          <div class="filter-buttons">
            <button :class="{ 'active': !tag}" @click="setTag(null)">All</button>
            <button :class="{ 'active': tag === 'Blockchain'}" @click="setTag('Blockchain')">Blockchain</button>
            <button :class="{ 'active': tag === 'XVM'}" @click="setTag('XVM')">XVM</button>
            <button :class="{ 'active': tag === 'App'}" @click="setTag('App')">App</button>
            <button :class="{ 'active': tag === 'Plugin'}" @click="setTag('Plugin')">Plugin</button>
          </div>
        </div>
      </div>
      <div class="task-list">
        <div v-for="(task, index) in tasks" v-bind:key="index">
          <TaskItem :name="task.name" :description="task.description" :status="task.status" 
            :year="task.year" :priority="task.priority" :tag="task.tag" :quarter="task.quarter" />
        </div>
      </div>
      <div v-if="tasks.length === 0">No results</div>
      <div class="disclaimer">
        / Does NOT include internal tasks, bug fixes, maintenance, minor enhancements, etc.
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
    pushQuery(search, status, year, priority, tag) {
      const query = {};
      if (search) query[`search`] = search;
      if (status) query[`status`] = status;
      if (year) query[`year`] = year;
      if (priority) query[`priority`] = priority;
      if (tag) query[`tag`] = tag;

      this.$router.push({ path: '/roadmap', query });
    },  
    setStatus(status) {
      this.pushQuery(this.search, status, this.year, this.priority, this.tag);
    },
    setYear(year) {
      this.pushQuery(this.search, this.status, year, this.priority, this.tag);
    },
    setPriority(priority) {
      this.pushQuery(this.search, this.status, this.year, priority, this.tag);
    },
    setTag(tag) {
      this.pushQuery(this.search, this.status, this.year, this.priority, tag);
    },
    setSearch(searchValue) {
      if (this.searchCancelTimeout) clearTimeout(this.searchCancelTimeout);

      this.searchCancelTimeout = setTimeout(() => {
        this.pushQuery(searchValue, this.status, this.year, this.priority, this.tag);
        this.searchCancelTimeout = null;
      }, 400);
    },
    countTasks(status) {
      return tasks.filter(x => x.status === status).length;
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
    priority() {
      return this.$route.query.priority;
    },
    tag() {
      return this.$route.query.tag;
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

        if (this.priority && filtered) {
          filtered = task.priority === this.priority;
        }

        if (this.tag && filtered) {
          filtered = task.tag === this.tag;
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
    backdrop-filter: blur(10px);
    border: .2rem solid white;
    border-radius: 1rem;
    padding: 1.5rem 2.5rem;
    font-weight: bold;
    font-size: 2.2rem;
    color: white;
    outline: none;
    margin-bottom: 4rem;
    width: 100%;
    max-width: 100rem;
    opacity: .5;
  }

  .task-search:active, .task-search:focus, .task-search:not(:placeholder-shown) {
    opacity: 1;
  }

  .filters {
    display: flex;
    gap: 2rem;
    width: 100%;
    margin-bottom: 4rem;
    flex-wrap: wrap;

    @media screen and (min-width: 1024px) {
      justify-content: space-around;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .filter-buttons {
    button {
      background: rgba(255, 255, 255, 0.4);
      border: none;
      padding: .6rem 1rem;
      cursor: pointer;
      backdrop-filter: blur(2px);
    }

    button:hover, button.active {
      background: white;
    }
  }

  .disclaimer {
    margin-top: 4rem;
    opacity: .8;
    font-weight: lighter;
  }
}
</style>