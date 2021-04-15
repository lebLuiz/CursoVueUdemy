<template>
	<div id="app">
		<h1>Tarefas</h1>

		<BarraPorcentagem 
			:listaTarefas="listaTarefas"
			:porcentoConcluido="percentualConcluido" />

		<NovaTarefa
			:listaTarefas="listaTarefas"
			@receberListaTarefasAtualizada="receberListaTarefasAtualizada"
		/>

		<ListaTarefas 
			:listaTarefas="listaTarefas"
			@receberListaTarefasAtualizada="receberListaTarefasAtualizada"
		/>
	</div>
</template>

<script>
import BarraPorcentagem from "@/components/BarraPorcentagem";
import NovaTarefa from "@/components/NovaTarefa";
import ListaTarefas from "@/components/ListaTarefas";

export default {
	components: {
		BarraPorcentagem,
		NovaTarefa,
		ListaTarefas,
	},

	data() {
		return {
			listaTarefas: [],
			percentualConcluido: 0,
		}
	},

	created() {
		if(window.localStorage.getItem('listaTarefas') == null || window.localStorage.getItem('listaTarefas') == undefined){
			window.localStorage.setItem('listaTarefas', []);
		} else {
			this.listaTarefas = JSON.parse(localStorage.getItem('listaTarefas'));

			this.capturarPorcentagem();
		}
	},

	methods: {
		receberListaTarefasAtualizada(newValueLista) {
			this.listaTarefas = newValueLista;

			this.capturarPorcentagem();
		},

		capturarPorcentagem() {
			let totalTarefasFeitas = 0;
            let totalTarefas = 0;
            if (this.listaTarefas.length > 0) {
                for (let i = 0; i < this.listaTarefas.length; i++) {
                    const tarefa = this.listaTarefas[i];
                    if(tarefa.feito) {
                        totalTarefasFeitas++;
                    }
					totalTarefas++;
                }
				let porcentagem = parseFloat(((totalTarefasFeitas / totalTarefas) * 100).toFixed(1));
            	this.percentualConcluido = porcentagem;
            } else {
				this.percentualConcluido = 0;
			}
		},
	},
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
