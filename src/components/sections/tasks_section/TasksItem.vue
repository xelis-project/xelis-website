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
        <div>{{ year }} {{ quarter }}</div>
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
  props: ["name", "description", "status", "year", "priority", "tag", "quarter"],
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
  border-radius: 1.2rem;
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid #848988;
  backdrop-filter: blur(10px);
  width: 30rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(2, 255, 207, 0.05);
    transition: left 300ms ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    backdrop-filter: blur(15px);
    border-color: rgba(2, 255, 207, 0.5);

    &:before {
      left: 0;
    }
  }

  &.completed {
    border-color: #7bf7d1;
    border-style: solid;
    background: rgba(123, 247, 209, 0.08);

    &:hover {
      border-color: #7bf7d1;
      box-shadow: 0 8px 32px rgba(123, 247, 209, 0.15);
    }
  }

  &.in-progress {
    border-color: #f5d95f;
    border-style: solid;
    background: rgba(245, 217, 95, 0.08);

    &:hover {
      border-color: #f5d95f;
      box-shadow: 0 8px 32px rgba(245, 217, 95, 0.15);
    }
  }

  &.planned {
    border-color: #848988;

    &:hover {
      border-color: rgba(2, 255, 207, 0.5);
      box-shadow: 0 8px 32px rgba(2, 255, 207, 0.1);
    }
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
    transition: all 200ms ease;
    box-shadow: 0 0 0 0 rgba(138, 137, 133, 0.7);

    &.completed {
      background-color: #7bf7d1;
      box-shadow: 0 0 8px rgba(123, 247, 209, 0.6);
    }

    &.in-progress {
      background-color: #f5d95f;
      box-shadow: 0 0 8px rgba(245, 217, 95, 0.6);
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