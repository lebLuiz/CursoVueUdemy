<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código:</strong> {{ id }}</p>
        <!--
            LEVAR PARA A ROTA DE FORMA DE URL DIRETA:
            :to="`/usuario/${id}/editar`"
        -->
        <!-- LOGO A BAIXO, ESTOU LEVANDO PARA UMA ROTA ATRAVÉS DO NOME DA ROTA('name')
        E TAMBÉM LEVANDO INFORMAÇÕES ATRAVÉS DE PARÂMETROS Chave E Valor ('query') PARA OUTRO COMPONENTE: -->
        <router-link tag="button" primario :to="{ 
            name: 'editarUsuario', 
            params: { id }, 
            query: { completo: false, lingua: 'pt' },
            hash: '#rodape'
        }">
            Editar
        </router-link>
    </div>
</template>

<script>

export default {
    /*'beforeRouteEnter' é executado antes de criar o componente, nesse caso, não consigo acessar dados do
    * data(), computed(), etc. do componente em que se encontra. Mas para q consiga acessar, só fazer uma função
    * callBack incluso no 'next()', como mostrado abaixo:*/
    beforeRouteEnter(to, from, next) {
        console.log('dentro do componente -> usuário detalhe');
        // next(vm => {
        //     console.log(vm.id);
        // });
        const autenticado = true;
        autenticado ? next() : next(false);
    },

    /*Passando parâmetro da rota por 'props':
    * (Tem q incluir "props: true" lá no router.js)*/
    props: {
        id: String,
    },
    
    //Capturando parâmetro da rota por 'props' com 'data()' e 'watch':
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id;
    //     },
    // },

}

</script>

<style>

</style>