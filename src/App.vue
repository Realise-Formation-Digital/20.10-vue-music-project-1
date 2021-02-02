<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <bottomnavbar/>
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
