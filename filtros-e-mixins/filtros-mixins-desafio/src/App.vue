<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
			<!-- Exercício 1 -->
			<!-- Construir um filtro local que troca espaços por vírgula -->
			<h4>{{ frase | troca-espaco-por-virgula }}</h4>
			<h4>{{ frase | trocaEspacoPorVirgula }}</h4>
		<hr>
			<!-- Exercício 2 -->
			<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
				valor na string final -->
			<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
			<h4>{{ frase | tamanhoPalavra }}</h4>
		<hr>
			<!-- Exercício 3 -->
			<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
			<h5>{{ fraseComVirgulaComputada }}</h5>
			<h5>{{ fraseTamanhoPalavrasComputada }}</h5>
		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import propsComputadasMixin from "./propsComputadasMixin";

export default {

	mixins: [propsComputadasMixin],

	filters: {
		trocaEspacoPorVirgula(v) {
			return v.replaceAll(' ', ',');
		},
	},

	data() {
		return {
			frase: 'Oh brave new world that has such people in it.',
		}
	}
	
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
</style>
