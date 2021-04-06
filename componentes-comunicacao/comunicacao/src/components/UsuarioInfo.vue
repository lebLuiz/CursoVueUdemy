<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>

        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "@/barramento";

export default {
    props: {
        nome: {
            type: String,

            //Pra usar 'required', precisa tirar o 'default'
            // required: true,

            // default: function(){
            //     //Retorna 10 valores retornando o valor 0
            //     return Array(10).fill(0).join(',')
            // }
            default: 'Anônimo',
            
        },
        reiniciarFn: Function,
        idade: Number,
    },

    /*Um atributo dentro de 'prop' não pode ter o nome
    igual a um que exista no componente.*/

    methods: {
        inverterNome() {
            return this.nome.split('').reverse().join('');
        },

        reiniciarNome() {
            //const antigo = this.nome;

            //this.nome = 'Pedro';

            this.$emit('nomeMudou', 'Pedro');
            // this.$emit('nomeMudou', {
            //     novo: this.nome,
            //     antigo,
            // });
        }
    },

    created(){
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        });
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
