<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!formSubmetido">
				<div class="cabecalho">Formulário</div>
				
				<Rotulo nome="Nome">
					<input type="text" v-model.trim="dadosForm.nome">
				</Rotulo>

				<Rotulo nome="Sobrenome">
					<input type="text" v-model.trim="dadosForm.sobrenome">
				</Rotulo>

				<Rotulo nome="Email">
					<input type="email" v-model="dadosForm.email">
				</Rotulo>

				<Rotulo nome="Senha">
					<input type="password" v-model="dadosForm.senha">
				</Rotulo>

				<Rotulo nome="Armazenar dados?">
					<span class="mr-4"><input type="radio" value="Sim" v-model="dadosForm.armazenaDados"> Sim</span>
					<span class="mr-4"><input type="radio" value="Não" v-model="dadosForm.armazenaDados"> Não</span>
				</Rotulo>
				
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<button @click.prevent="enviarForm">Enviar</button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome Completo">
					<NomeCompleto :nome="dadosForm.nome" :sobrenome="dadosForm.sobrenome"/>
				</Rotulo>

				<Rotulo nome="Email">
					<span>{{ dadosForm.email }}</span>
				</Rotulo>

				<Rotulo nome="Senha">
					<span>{{ dadosForm.senha }}</span>
				</Rotulo>

				<Rotulo nome="Armazenar dados">
					<span>{{ dadosForm.armazenaDados }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue';
import NomeCompleto from './components/NomeCompleto.vue';

export default {
	name: 'app',
	components: { 
		Rotulo,
		NomeCompleto,
	},
	data() {
		return {
			formSubmetido: false,
			dadosForm: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
				armazenaDados: null,
			},
		}
	},
	methods: {
		enviarForm() {
			this.formSubmetido = true;
		},
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
