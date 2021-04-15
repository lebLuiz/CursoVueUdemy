<template>
    <div class="div-main">
        <p v-if="listaTarefas == null || listaTarefas.length == 0">
            Sua vida está em dia! :)
        </p>

        <div v-else class="caixa-lista" >
            <div v-for="(tarefa, i) in listaTarefas" :key="i" 
                @click.prevent="acionarTarefa(tarefa)" class="caixa-tarefas"
                :style="tarefa.feito?estiloCaixaTarefaFeito:estiloCaixaTarefaNaoFeito" >

                <div class="caixa-lateral" 
                    :style="tarefa.feito?estiloCaixaLateralTarefaFeito:estiloCaixaLateralTarefaNaoFeito" />

                <span :title="tarefa.tarefa.length>15?tarefa.tarefa:''" class="value-tarefa"
                    :style="tarefa.feito?valueTarefaFeito:''">{{ tarefa.tarefa }}</span>

                <button @click.prevent="removerTarefa(i)" 
                    class="btn-remover-tarefa"
                    :style="tarefa.feito?estiloBtnRemoverFeito:estiloBtnRemoverNaoFeito">x</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {

    props: {
        listaTarefas: Array,
    },

    computed: {
        estiloCaixaTarefaFeito() {
            return {
                backgroundColor: '#49B356',
            }
        },
        estiloCaixaTarefaNaoFeito() {
            return {
                backgroundColor: '#B34949',
            }
        },

        estiloCaixaLateralTarefaFeito() {
            return {
                backgroundColor: '#168524',
            }
        },
        estiloCaixaLateralTarefaNaoFeito() {
            return {
                backgroundColor: '#932A2A',
            }
        },

        estiloBtnRemoverFeito() {
            return {
                backgroundColor: '#168524',
            }
        },
        estiloBtnRemoverNaoFeito() {
            return {
                backgroundColor: '#932A2A',
            }
        },

        valueTarefaFeito() {
            return {
                fontStyle: 'italic',
                textDecoration: 'line-through',
                color: '#DCDADA',
            }
        }
    },

    methods: {
        removerTarefa(index) {
            this.listaTarefas.splice(index, 1);

            this.mudarListaLocalStorage();
        },

        acionarTarefa(tarefa) {
            tarefa.feito = !tarefa.feito;

            this.$emit('receberListaTarefasAtualizada', this.listaTarefas);

            this.mudarListaLocalStorage();
        },

        mudarListaLocalStorage() {
            window.localStorage.removeItem('listaTarefas');
            window.localStorage.setItem('listaTarefas', JSON.stringify(this.listaTarefas));
        },
        
    },


}
</script>

<style scoped>

    .div-main {
        display: flex;
    }

    .caixa-lista {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        overflow-y: auto;
        height: 350px;
    }

    .caixa-lista::-webkit-scrollbar {
        width: 10px;
        height: 13px;
    }
    .caixa-lista::-webkit-scrollbar-track {
        border: 7px solid #232943;
        box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
    }
    .caixa-lista::-webkit-scrollbar-thumb {
        background: linear-gradient(
            45deg,
            #B34949,
            #49B356
        );
        border-radius: 3px;
    }

    .caixa-lateral {
        width: 15px;
        height: 130px;

        float: left;
        border-radius: 8px 0px 0px 8px;
    }

    .caixa-tarefas {
        width: 300px;
        height: 130px;

        margin: 10px;
        border-radius: 8px;

        position: relative;
        cursor: pointer;
    }

    .value-tarefa {
        margin: 0;
        position: absolute;
        top: 40%;
        left: 25%;

        margin-right: 10px;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        width: 60%;

        font-family: sans-serif;
        font-size: 22px;
    }

    p {
        font-family: 'Lato', sans-serif;
        font-size: 24px;
    }

    .btn-remover-tarefa {
        float: right;
        margin: 10px 10px 0px 0px;
        width: 22px;
        height: 23px;

        color: #FFFF;

        outline: none;
        border: none;
        border-radius: 50%;
        
        text-align: center;
    }
    .btn-remover-tarefa:hover {
        background-color: #000000a2;
    }

</style>