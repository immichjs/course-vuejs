new Vue({
    el: '#app',
    data: {
        onGame: true,
        playerLife: 100,
        monsterLife: 100,
        playerLifeStyle: `width: ${ 100 }%`,
        monsterLifeStyle: `width: ${ 100 }%`,
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
            if (this.playerLife < 100)
                this.disabledStatus = false
            return this.disabledStatus
        }
    },
    watch: {
        playerLife() {
            if (this.playerLife >= 100)
                this.disabledStatus = true
            if (this.playerLife == 100)
                this.playerLifeStyle = this.playerLife
        },
        monsterLife() {
            if (this.monsterLife == 100)
                this.monsterLifeStyle = this.monsterLife
        },
    },
    methods: {
        // Métodos que fazem executar o início de jogo
        startGame() {
            this.skills = true
            this.onGame = !this.onGame
            if (this.surrenderMessage)
                this.surrenderMessage = !this.surrenderMessage
        },
        playAgain() {
            this.skills = true
            if (this.tryAgain) {
                this.tryAgain = !this.tryAgain
                this.playerLife = 100
                this.monsterLife = 100
                this.logs = []
            }
            if (this.winMessage)
                this.winMessage = !this.winMessage
            else if (this.lossMessage)
                this.lossMessage = !this.lossMessage
        },

        // Métodos que serão chamados por outros métodos
        playerLosesLife(maxPlayerLife = 10, minPlayerLife = 7) { // Valores padrões max e min = (10, 7)
            this.playerLife -= Math.floor(Math.random() * (maxPlayerLife - minPlayerLife) + minPlayerLife)
        },
        monsterLosesLife(maxMonsterLife = 9, minMonsterLife = 6) { // Valores padrões max e min = (9, 6)
            this.monsterLife -= Math.floor(Math.random() * (maxMonsterLife - minMonsterLife) + minMonsterLife)
        },
        validateWinCondition(player, monster) {
            if (this.playerLife < 0) {
                if (this.monsterLife < 0)
                    this.monsterLife = 0

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
        lifeControl() {
            this.playerLifeStyle = `width: ${ this.playerLife }%`
            this.monsterLifeStyle = `width: ${ this.monsterLife }%`
            
            if (this.playerLife <= 20)
                this.playerLifeStyle = `background: linear-gradient(0deg, rgb(180, 50, 50) 0%, rgb(100, 0, 0) 100%);
                    width: ${ this.playerLife }%;`
            if (this.monsterLife <= 20)
                this.monsterLifeStyle = `background: linear-gradient(0deg, rgb(180, 50, 50) 0%, rgb(100, 0, 0) 100%);
                    width: ${ this.monsterLife }%;`
        },
        pushToLogs(aux, aux2) {
            this.logs.push(`Monstro deu ${ aux - this.playerLife } de dano no Jogador`,
                `Jogador deu ${ aux2 - this.monsterLife } de dano no Monstro`)
            return this.logs
        },

        // Métodos das habilidades
        attack() {
            let oldPlayerLife = this.playerLife
            let oldMonsterLife = this.monsterLife
            
            this.validateWinCondition(this.playerLosesLife(), this.monsterLosesLife())
            this.pushToLogs(oldPlayerLife, oldMonsterLife)
            this.lifeControl()
        },
        specialAttack() {
            let oldPlayerLife = this.playerLife
            let oldMonsterLife = this.monsterLife

            this.validateWinCondition(this.playerLosesLife(), this.monsterLosesLife(12, 8))
            this.pushToLogs(oldPlayerLife, oldMonsterLife)
            this.lifeControl()
        },
        heal() {
            let helper = this.playerLife + Math.floor(Math.random() * (12 - 5) + 5)

            if (helper > 100) {
                this.playerLife = 100
                this.playerLosesLife(12, 0)
                this.lifeControl()
            } else {
                this.playerLife = helper
                this.playerLosesLife(12, 0)
                // Ainda não consegui implementar um lógica para isso.
                // this.logs.push(``) 
                this.lifeControl()
            }
        },
        surrender() {
            this.playerLife = 100
            this.monsterLife = 100
            this.surrenderMessage = !this.surrenderMessage
            this.onGame = !this.onGame
            this.skills = !this.skills
            this.logs = []
        },
    },
})