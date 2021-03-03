new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        exibeAlerta(){
            alert('Mostrando um alerta!');
        },

        escutaOKeyDown(e){
            this.valor = e.target.value;
        },
    }
})