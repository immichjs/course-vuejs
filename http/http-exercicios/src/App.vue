<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="message in messages" :key="message.text" :variant="message.type">{{ message.text }}</b-alert>
		<b-card>
			<b-form-group label="Nome:"> 
				<b-form-input type="text" size="lg" v-model="user.name" placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:"> 
				<b-form-input type="email" size="lg" v-model="user.email" placeholder="Informe o email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="save" size="lg" variant="primary">Salvar</b-button>
			<b-button @click="listUsers" size="lg" variant="sucess" class="ml-2">Listar usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-items v-for="(user, id) in users" :key="id">
				<strong>Nome: </strong> {{ user.name }}<br>
				<strong>Email: </strong> {{ user.email }}<br>
				<strong>ID: </strong> {{ id }}<br>
				<b-button variant="warning" size="lg" @click="load(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="deletePerson(id)" class="ml-2">excluir</b-button>
			</b-list-group-items>
		</b-list-group>
	</div>
</template>

<script>
/* eslint-disable no-console */
export default {
	data () {
		return {
			messages: [],
			users: [],
			id: null,
			user: {
				name: '',
				email: '',
			}
		}
	},
	methods: {
		clear () {
			this.user.name = ''
			this.user.email = ''
			this.id = null
			this.messages = []
		},
		load (id) {
			this.id = id
			this.user = { ...this.users[id] }
		},
		deletePerson (id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => {
					this.clear()
					this.messages.push({ text: 'Usuário excluído com sucesso!', type: 'success' })
				})
				.catch(() => this.messages.push({ text: 'Ocorreu um problema na hora de excluir um usuário!', type: 'danger'}))
		},
		save () {
			const method = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'

			this.$http[method](`/usuarios${finalUrl}`, this.user)
				.then(() => {
					this.clear()
					this.messages.push({
						text: finalUrl === 'post' ? 'Usuário adicionado com sucesso!' : 'Usuário atualizado com sucesso!',
						type: 'success'
					})
				})
		},
		listUsers () {
			this.$http('usuarios.json')
				.then(response => this.users = response.data)

				this.$http.defaults.headers.common['Authorization'] = 'abc123'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
