<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->

		<button v-text="executando ? 'Parar' : 'Executar'"
			v-quandoAtivar:click="acionarAcao"  />

		<div class="tasks-progress">
			<span class="progress-value">{{ progresso }}%</span>
			<div class="progress-bar" :style="{width: progresso + '%'}"></div>
		</div>
	</div>
</template>

<script>

export default {
	directives: {
		quandoAtivar: {
			bind(el, binding) {

				el.onclick = function(e) {
					binding.value();
				};

			},
		}
	},

	data() {
		return {
			intervaloProgress: null,

			executando: false,
			progresso: 0,

		}
	},

	watch: {
		progresso: function (newV) {
			if (newV >= 100) {
				clearInterval( this.intervaloProgress );
				this.progresso = 0;
				this.executando = false;
			}
		}
	},

	methods: {
		acionarAcao() {
			this.executando = !this.executando;

			if (!this.executando) {
				clearInterval( this.intervaloProgress );
			} else {
				this.intervaloProgress = setInterval(() => {
					this.progresso++
				}, 100);
			}

		},
	},

}

</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		font-size: 2.5rem;
	}

	button {
		margin: 10px 0px;
		padding: 10px 20px;
		font-size: 1.4rem;
		border-radius: 5px;
		color: #FFF;
		background-color: #2196F3;
	}

	.tasks-progress {
        position: relative;
        width: 80%;
        border: 1px solid rgb(80, 79, 79);
        color: rgb(0, 0, 0);
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
		left: 10%;
    }

    .progress-bar {
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #4CAF50;
        align-self: flex-start;
    }

    .progress-value {
        z-index: 1;
        font-size: 1.5rem;
    }

</style>
