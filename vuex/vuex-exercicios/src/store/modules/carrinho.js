export default {
    /*'namespaced' faz com que o tal modulo(nesse caso o 'carrinho') do vuex
    * tenha um nome especifico para acessar os states, getter,
    * mutations e actions.
    * Por exemplo lá na hora de declarar um action no componente Vue:
    * ...mapActions('carrinho', ['adicionarProduto'])
    * ...mapActions('[NOME_DO_MODULO]', ['[NOME_DA_ACTION]'])*/
    namespaced: true,
    state: {
        produtos: []
    },

    //GETTERS: Pega algum valor.
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
    },

    //MUTATIONS: Empurra algum valor.
    mutations: {
        adicionarProduto(state, payload) {
            state.produtos.push(payload);
        }
    },


    actions: {
        adicionarProduto({ commit }, payload) {
            setTimeout(() => {
                commit('adicionarProduto', payload);
            }, 1000);
        },

        /*POR MAIS QUE ESSE MODULO CARRINHO TENHA O 'namespaced',
        * eu tenho a opção de usar um action, getter ou mutation de forma global
        * com o 'root' e o 'handler'(q será a função):*/
        // adicionarProduto: {
        //     root: true,
        //     handler: ({ commit }, payload) => {
        //         setTimeout(() => {
        //             commit('adicionarProduto', payload);
        //         }, 1000);
        //     }
        // },
    },
}