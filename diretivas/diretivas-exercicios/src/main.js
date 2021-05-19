import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	//o 'el' seria o valor que estará dentro do elemento em si - lá no HTML
	//o 'binding' seria o parâmetro/atributo passado na diretiva: (ex: <p v-diretiva="BINDING">EL</p>)
	bind(el, binding, vnode) {
		// el.style.backgroundColor = 'lightgreen';

		/* 'binding.modifiers' seria algum modificador de um argumento(ou da própria 'diretiva') 
		 * ex: <p v-diretiva:ARG.MODIFIER="BINDING">EL</p> */

		let atraso = 0;
		if (binding.modifiers['atrasar']) atraso = 3000;

		setTimeout(() => {
			if (binding.arg == 'fundo') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, atraso);

	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
