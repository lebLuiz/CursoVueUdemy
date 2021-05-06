<template>

    <div style="margin-bottom: 20px;">
        <div class="input-with-button">
            <input type="text" placeholder="Nova tarefa?" v-model="tarefa.tarefa"
                class="inpt-new-tarefa" @keypress.enter="addTarefa">
            <button class="btn-add-tarefa" @click="addTarefa">+</button>
        </div>

        <p class="msg-obrigatoria" v-if="mostrarMsgAviso!=''">
            <span>*</span> {{ mostrarMsgAviso }}
        </p>
    </div>
    
</template>

<script>
export default {

    props: {
        listaTarefas: Array,
    },

    data() {
        return {
            mostrarMsgAviso: '',
            tarefa: {
                feito: false,
                tarefa: null,
            },
        }
    },

    methods: {
        addTarefa() {
            if (this.tarefa.tarefa == null || this.tarefa.tarefa == '') {
                this.mostrarMsgAviso = 'Campo obrigatório!';
            } else {

                const found = this.listaTarefas.find(e => e.tarefa == this.tarefa.tarefa)

                if (found==undefined) {
                    this.mostrarMsgAviso = '';
                    this.listaTarefas.push(this.tarefa);

                    window.localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));

                    this.$emit('receberListaTarefasAtualizada', this.listaTarefas);
                } else {
                    this.mostrarMsgAviso = 'Tarefa já adicionada.';
                }

                this.tarefa = {
                    feito: false,
                    tarefa: null,
                };
            }

        }
    },
}
</script>

<style scoped>
    .input-with-button {
        display: flex;

        margin: 50px 0px 0px;
    }

    .inpt-new-tarefa {
        width: 400px;

        outline: none;
        padding: 8px;

        font-size: 24px;
        font-family: 'Lato', sans-serif;

        background-color: rgba(134, 130, 130, 0.226);
        color: #FFF;

        border-radius: 6px 0px 0px 6px;
        border: 1px solid grey;
    }

    .msg-obrigatoria {
        margin-top: 0;
    }
    .msg-obrigatoria span {
        color: red;
    }


    .btn-add-tarefa {
        width: 40px;

        outline: none;
        padding: 8px;

        text-align: center;
        font-size: 20px;
        font-family: 'Lato', sans-serif;
        
        border-radius: 0px 6px 6px 0px;
        border: 1px solid grey;

        background-color: #409EFF;
        color: white;
    }
</style>