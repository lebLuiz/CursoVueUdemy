<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} / {{ $route.params.id }}</p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>

        <hr>
        <button primario @click="confirmou = true">Confirmar</button>

        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>

export default {
    /*Passando parâmetro da rota por 'props':
    * (Tem q incluir "props: true" lá no router.js)*/
    props: {
        id: String,
    },
    data() {
        return {
            confirmou: false,
        }
    },

    /*'beforeRouteLeave' -> Diferente do 'beforeRouteEnter' que é executado antes de
    * criar o componente(sendo assim não deixa usar dados do componente), o 'beforeRouteLeave'
    * tem acesso aos dados do componente, pois é executado quando o usuário querer sair do componente: */
    beforeRouteLeave(to, from, next) {
        if (this.confirmou) {
            next();
        } else {
            if (confirm('Tem certeza?')) {
                next();
            } else {
                next(false);
            }
        }
    }
}

</script>

<style>

    #rodape {
        margin-top: 1000px;
    }

</style>