<template>
  <v-simple-table dark style="max-width: 400px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            #ID
          </th>
          <th class="text-left">
            Nome
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in dados"
          :key="item.idUsuario"
          @click="selecionarUsuario(item)"
        >
          <td>{{ item.idUsuario }}</td>
          <td>{{ item.nomeUsuario }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {

    props: {
        dados: Array,
    },

    methods: {
        selecionarUsuario(item) {
            this.$emit('usuarioEscolhido', item)
        },
    }

}
</script>

<style>

</style>