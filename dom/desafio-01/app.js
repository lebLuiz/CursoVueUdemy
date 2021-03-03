new Vue({
    el: '#desafio',
    data: {
        nome: 'Luiz Eduardo',
        idade: 19,

        randomBetween0and1: Math.random(0,1).toFixed(1),

        linkImg: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    methods: {
        saudacao(){
            this.titulo = 'BOM DIA!!';
            return this.titulo;
        },
    }
})