new Vue({
	el: '#desafio',
	data: {
		alternador: false,
		classInformada: '',
		styleInformada: '',
		v1MudancaClass: '',
		v2MudancaClass: false,

		styleInformada2: 10,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.alternador = !this.alternador;
			}, 3000);
		},
		iniciarProgresso() {
			setInterval(() => {
				this.styleInformada2 += 10;
			}, 500);
		}
	},

	computed: {
		informaStyle(){
			return {
				backgroundColor: this.styleInformada,
				width: '200px',
				height: '200px',
			}
		},
		informaStyle2(){
			return {
				backgroundColor: 'green',
				width: `${this.styleInformada2}px`,
				height: '20px',
			}
		}
	}
})
