new Vue({
    el: '#app',
    data: {
        onGame: true,
        playerLife: 100,
        monsterLife: 100,
        skills: false,
        disabledStatus: true,
        lossMessage: false,
        winMessage: false,
        surrenderMessage: false,
        tryAgain: false,
        logs: [],
    },
    computed: {
        isDisabled() {
            if (this.playerLife < 100) {
                this.disabledStatus = false
            }
            return this.disabledStatus
        }
    },
    watch: {
        playerLife() {
            if (this.playerLife >= 100) {
                this.disabledStatus = true
            }
        }
    },
    methods: {
        // Iniciar jogo
        startGame() {
            this.skills = true
            this.onGame = !this.onGame
            if (this.surrenderMessage)
                this.surrenderMessage = !this.surrenderMessage
        },
        // Jogar novamente
        playAgain() {
            this.skills = true
            if (this.tryAgain) {
                this.tryAgain = !this.tryAgain
                this.playerLife = 100
                this.monsterLife = 100
                this.logs = []
            }
            if (this.winMessage) {
                this.winMessage = !this.winMessage
            } else if (this.lossMessage) {
                this.lossMessage = !this.lossMessage
            }
        },
        // Métodos que serão chamados por outros métodos
        playerLosesLife(maxPlayerLife = 10, minPlayerLife = 7) { // Valores padrões max e min = (10, 7)
            this.playerLife -= Math.floor(Math.random() * (maxPlayerLife - minPlayerLife) + minPlayerLife)
        },
        monsterLosesLife(maxMonsterLife = 9, minMonsterLife = 6) { // Valores padrões max e min = (9, 6)
            this.monsterLife -= Math.floor(Math.random() * (maxMonsterLife - minMonsterLife) + minMonsterLife)
        },
        validatePlayerCondition(player, monster) {
            if (this.playerLife < 0) {
                this.playerLife = 0
                this.lossMessage = !this.lossMessage
                this.skills = !this.skills
                this.tryAgain = !this.tryAgain
            } else if (this.monsterLife < 0) {
                this.monsterLife = 0
                this.skills = !this.skills
                this.tryAgain = !this.tryAgain
                this.winMessage = !this.winMessage
            } else {
                player
                monster
            }
        },

        // Métodos das habilidades
        attack() {
            let aux = this.playerLife
            let aux2 = this.monsterLife
            this.validatePlayerCondition(this.playerLosesLife(), this.monsterLosesLife())
            this.logs.push([`Monstro deu ${aux - this.playerLife}`, `Jogador deu ${aux2 - this.monsterLife}`])
        },
        specialAttack() {
            let aux = this.playerLife
            let aux2 = this.monsterLife
            this.validatePlayerCondition(this.playerLosesLife(), this.monsterLosesLife(12, 9))
            this.logs.push([`Monstro deu ${aux - this.playerLife}`, `Jogador deu ${aux2 - this.monsterLife}`])
        },
        heal() {
            let helper = this.playerLife + Math.floor(Math.random() * (12 - 5) + 5)
            if (helper > 100) {
                this.playerLife = 100
                console.log(this.playerLosesLife(12, 0))
            } else {
                this.playerLife = helper
                this.playerLosesLife(12, 0)
            }
        },
        surrender() {
            this.playerLife = 100
            this.monsterLife = 100
            this.surrenderMessage = !this.surrenderMessage
            this.onGame = !this.onGame
        },
    },
})