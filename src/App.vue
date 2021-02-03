<template>
  <v-app>
    <topnavbar/>
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
  <v-container fluid
              fill-height>
      <router-view>

      </router-view>
              </v-container>
                  <bottomnavbar/>

    </v-main>
  </v-app>
</template>

<script>
import bottomnavbar from './components/bottomnavbar.vue';
import topnavbar from './components/topnavbar.vue';


export default {
  components: { bottomnavbar, topnavbar},


  name: "App",

  data: () => ({
    //
  }),
};
</script>
