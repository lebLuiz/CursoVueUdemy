<template>
  <v-container class="lighten-5" dark>

    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col sm="5" md="6">
        <ListaUsuarios 
          :dados="usuariosRegistrados"
          @usuarioEscolhido="receberUsuario"/>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <MostrarUsuario :usuarioRecebido="usuario"/>
      </v-col>
    </v-row>

  </v-container>

</template>

<script>
import ListaUsuarios from "@/components/partials/ListaUsuarios";
import MostrarUsuario from "@/components/partials/MostrarUsuario";

  export default {
    name: 'PagePrincipal',

    components: {
      ListaUsuarios,
      MostrarUsuario
    },

    data() {
      return {
        usuariosRegistrados: [
          {
            idUsuario: 1,
            nomeUsuario: 'Ana',
            idadeUsuario: 22
          },
          {
            idUsuario: 2,
            nomeUsuario: 'Carlos',
            idadeUsuario: 17
          },
          {
            idUsuario: 3,
            nomeUsuario: 'Daniel',
            idadeUsuario: 30
          },
          {
            idUsuario: 4,
            nomeUsuario: 'Ema',
            idadeUsuario: 14
          },
          {
            idUsuario: 5,
            nomeUsuario: 'Lia',
            idadeUsuario: 26
          },
        ],

        usuario: null,
      }
    },

    methods: {
      receberUsuario(user){
        this.usuario = user;
      }
    }
  }
</script>
