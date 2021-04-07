<template>
  <v-app>
    <v-main>
      <PagePrincipal/>
    </v-main>
  </v-app>
</template>

<script>
import PagePrincipal from './components/PagePrincipal';

export default {
  name: 'App',

  components: {
    PagePrincipal,
  },

  data: () => ({
    //
  }),
};
</script>
