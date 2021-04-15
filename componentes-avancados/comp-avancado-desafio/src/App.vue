<template>
	<div id="app">
		<span v-for="i in 3" :key="i">
			<button :class="i==1?'vermelho':i==2?'verde':'azul'"
				@click="i==1?componente='Vermelho':i==2?componente='Verde':componente='Azul'">
					Carregar Componente {{ i==1?'Vermelho':i==2?'Verde':'Azul' }} 
			</button>
		</span>

		<component :is="componente">
			{{ textoInicial }} <strong>{{ componente }}</strong>
		</component>

	</div>
</template>

<script>
import Vermelho from './components/Vermelho.vue'
import Verde from './components/Verde.vue'
import Azul from './components/Azul.vue'

export default {
	name: 'app',
	components: { Vermelho, Verde, Azul },
	data(){
		return {
			componente: 'Vermelho',

			textoInicial: 'Conteúdo do Componente',
		}
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
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .caixa {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.vermelho {
        border: 2px solid red;
        background-color: #f54235;
    }

	.verde {
        border: 2px solid green;
        background-color: #49b057;
    }

	.azul {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
