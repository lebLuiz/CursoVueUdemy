import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Criando um filtro global
Vue.filter('inverter', function(value) {
	return value.split('').reverse().join('');
});

//Criando um mixin global
Vue.mixin({
	data() {
		return {
			global: 'Estou no mixin Global!',
		}
	},
	created() {
		console.log('Created - Mixin Global!')
	},
});

new Vue({
	render: h => h(App),

	created() {
		console.log('Created - Vue Instance!')
	},
}).$mount('#app')
