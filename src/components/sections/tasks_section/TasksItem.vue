<template>
  <div class="task-item" :class="classStatus">
    <div>
      <div class="task-title">{{ name }}</div>
      <div class="task-description">{{ description }}</div>
    </div>
    <div class="task-bottom">
      <div class="task-info">
        <div class="task-status">
          <div class="status-dot" :class="classStatus"></div>
          <div>{{ status }}</div>
        </div>
        <div>{{ year }}</div>
      </div>
      <div class="task-more">
        <div>{{ tag }}</div>
        <div>{{ priority }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["name", "description", "status", "year", "priority", "tag"],
  computed: {
    classStatus() {
      return this.status.toLowerCase().split(' ').join('-');
    }
  }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

.task-item {
  padding: 2rem;
  border-radius: 1rem;
  /*background-color: rgba($color: white, $alpha: .5);*/
  background: rgba(0, 0, 0, 0.4);
  border: .25rem dashed #848988;
  backdrop-filter: blur(5px);
  width: 30rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.completed {
    border-color: #7bf7d1;
    border-style: solid;
  }

  &.in-progress {
    border-color: #f5d95f;
    border-style: solid;
  }

  .task-status {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .status-dot {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    background-color: #8a8985;

    &.completed {
      background-color: #7bf7d1;
    }

    &.in-progress {
      background-color: #f5d95f;
    }
  }

  .task-title {
    margin-bottom: .5rem;
    font-size: 2.5rem;
  }

  .task-description {
    font-size: 1.7rem;
    margin-bottom: 1.5rem;
    opacity: .8;
    font-weight: lighter;
  }

  .task-bottom {
    display: flex;
    gap: .5rem;
    flex-direction: column;
  }

  .task-info {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }

  .task-more {
    display: flex;
    font-weight: lighter;
    font-size: 1.4rem;
    justify-content: space-between;
  }
}
</style>