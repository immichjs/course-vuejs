<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress" />
		<NewTask @taskAdded="addTask"/>
		<TaskGrid :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"/>
	</div>
</template>

<script>
import TasksProgress from '@/components/TasksProgress.vue'
import TaskGrid from '@/components/TaskGrid.vue'
import NewTask from '@/components/NewTask.vue'

export default {
	data () {
		return {
			tasks: [
				{ name: 'Lavar a louça', pending: false },
				{ name: 'Comprar blusa', pending: true }
			]
		}
	},
	created () {
		const tasksInLocalStorage = localStorage.getItem('tasks')
		const array = JSON.parse(tasksInLocalStorage)

		this.tasks = Array.isArray(array) ? array : []
	},
	computed: {
		progress () {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler () {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask (task) {
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0

			if (reallyNew) {
				this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
			}
		},
		deleteTask (index) {
			this.tasks.splice(index, 1)
		},
		toggleTaskState (i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	components: {
		TaskGrid,
		NewTask,
		TasksProgress,
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
