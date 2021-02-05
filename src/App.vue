<template>
  <v-app>
    <topnavbar/>
    <v-main>
        <v-card
    color="#dde1e7"
    flat
    tile
  >
    <v-toolbar dense>
    <v-avatar size="182">
      <img
        src="./assets/MayoTube-logo-sample-3.png"
        alt="icon MayoTube">
    </v-avatar>


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


export default {
  components: { bottomnavbar},


  name: "App",

  data: () => ({
    //
  }),
};
</script>
