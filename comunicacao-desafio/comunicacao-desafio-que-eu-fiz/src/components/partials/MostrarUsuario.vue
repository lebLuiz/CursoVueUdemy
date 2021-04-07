<template>
  <v-card
    class="mx-auto"
    max-width="250"
    color="grey"
    dark
  >
    <v-card-text class="text-center">
        <div  v-if="usuarioRecebido == null"
            class="text--primary">
            Usuário não selecionado!
        </div>
        <div v-else>
            <div style="color: black;">#ID: {{ usuarioRecebido.idUsuario }}</div>
            <p class="display-1 text--primary">
                {{ usuarioRecebido.nomeUsuario }}
            </p>
            <div class="text--primary">
                Idade: {{ usuarioRecebido.idadeUsuario }} anos
            </div>
        </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: {
        usuarioRecebido: {
            type: Object,
        },
    }
}
</script>

<style>

</style>