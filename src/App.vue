<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col>
          <router-link class="text-decoration-none" to="/">
            <v-btn block text class=" white--text" color="deep-purple">Home</v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="text-decoration-none" to="/about">
            <v-btn block text class=" white--text" color="deep-purple">About Us</v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="text-decoration-none" to="/video">
            <v-btn block text class=" white--text" color="deep-purple">Video</v-btn>
          </router-link>
        </v-col>
      </v-row>
      <hr color="black"/>


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
