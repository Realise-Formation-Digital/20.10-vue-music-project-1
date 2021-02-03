<template>
  <v-app>
    <v-main>
        <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense>
    <v-avatar>
      <img
        src="./assets/MayoTube-logo.png"
        alt="icon MayoTube"
      >
    </v-avatar>
      <v-toolbar-title>MayoTube</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
      <router-view>

      </router-view>
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
