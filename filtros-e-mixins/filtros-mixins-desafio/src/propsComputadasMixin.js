export default {
    computed: {
		fraseComVirgulaComputada() {
			return this.frase.replaceAll(' ', ',');
		},

		fraseTamanhoPalavrasComputada() {
			return this.frase.split(' ').map((p) => `${p} (${p.length})`).join(' ');
		},
	},
}