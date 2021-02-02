<template>
  <v-app>
    <v-main>
      <bottomnavbar></bottomnavbar>
      <hr color="black" />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import bottomnavbar from './components/bottomnavbar.vue';
export default {
  components: { bottomnavbar },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
