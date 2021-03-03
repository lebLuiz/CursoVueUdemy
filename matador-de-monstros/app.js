new Vue({
    el: '#projeto',
    data: {
        iniciar: false,

        vidaP: 100,
        vidaM: 100,

        listaPontuacao: [],

        msgGanhador: null,
    },

    computed: {
        barra1(){
            return {
                backgroundColor: this.vidaP <= 20?'red':'green',
                width: `${this.vidaP}%`,
                height: '20px',
            }
        },

        barra2(){
            return {
                backgroundColor: this.vidaM <= 20?'red':'green',
                width: `${this.vidaM}%`,
                height: '20px',
            }
        },
    },

    watch: {
        vidaP: function(v) {
            if(v <= 0 && this.vidaM > 0){
                this.iniciar = false;
                this.msgGanhador = "Você perdeu! :(";
                this.vidaP = 0;
            }
            if(v > 100){
                this.vidaP = 100;
            }
            if(v < 0){
                this.vidaP = 0;
            }
        },
        vidaM: function(v) {
            if(v <= 0 && this.vidaP > 0){
                this.iniciar = false;
                this.msgGanhador = "Você ganhou! :)";
                this.vidaM = 0;
            }
            if(v > 100){
                this.vidaM = 100;
            }
            if(v < 0){
                this.vidaM = 0;
            }
        }
    },

    methods: {
        iniciarJogo(){
            this.iniciar = true;

            this.vidaP = 100;
            this.vidaM = 100;

            this.listaPontuacao = [];
        },

        gerarForça(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        ataque(){
            let danoP = this.gerarForça(1, 14);
            let danoM = this.gerarForça(1, 10);

            this.vidaP -= danoP;
            this.vidaM -= danoM;

            let resultadoM = {
                individuo: 'MONSTRO',
                acao: 'ATINGIU',
                ponto: danoP,
            }

            let resultadoP = {
                individuo: 'JOGADOR',
                acao: 'ATINGIU',
                ponto: danoM,
            }

            this.listaPontuacao.unshift(resultadoM, resultadoP);
        },
        ataqueEspecial(){
            let danoP = this.gerarForça(1, 14);
            let danoM = this.gerarForça(1, 20);

            this.vidaP -= danoP;
            this.vidaM -= danoM;

            let resultadoM = {
                individuo: 'MONSTRO',
                acao: 'ATINGIU',
                ponto: danoP,
            }

            let resultadoP = {
                individuo: 'JOGADOR',
                acao: 'ATINGIU',
                ponto: danoM,
            }
            
            this.listaPontuacao.unshift(resultadoM, resultadoP);
        },
        curar(){
            let ganho = this.gerarForça(0, 13);
            let perda = this.gerarForça(0, 12);

            this.vidaP += ganho;

            let resultadoM = {
                individuo: 'MONSTRO',
                acao: 'ATINGIU',
                ponto: perda,
            }

            let resultadoP = {
                individuo: 'JOGADOR',
                acao: 'GANHOU FORÇA',
                ponto: ganho,
            }

            this.listaPontuacao.unshift(resultadoM, resultadoP);
            this.vidaP -= perda;
        },
        desistir(){
            this.iniciar = false;

            this.vidaP = 100;
            this.vidaM = 100;

            this.listaPontuacao = [];
        }
    }


})