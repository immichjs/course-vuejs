<template>
  <div class="task-grid">
    <template v-if="tasks.length">
      <Task
        v-for="(task, id) in tasks"
        :key="task.name" :task="task"
        @taskDeleted="$emit('taskDeleted', id)"
        @taskStateChanged="$emit('taskStateChanged', id)"
      />
    </template>
    <p class="no-task" v-else>Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from './Task'
export default {
  props: {
    tasks: { type: Array, required: true }
  },
  components: {
    Task
  }
}
</script>

<style>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #aaa;
  font-size: 1.1rem;
}
</style>
