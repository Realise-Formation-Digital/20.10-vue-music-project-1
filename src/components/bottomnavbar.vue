<template>
  <v-bottom-navigation
      v-model="value"
      :background-color="color"
      shift
      fixed
  >
    <v-btn to="/" icon flat depressed>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn to="/about" icon flat depressed>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn to="/video" icon flat depressed>
      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script>
export default {
  name: "bottomnavbar",
  data() {
    return {
      nonavBar: 0,
      navBar: true,  //Fix the  navbar on the bottom,
      value: 1
    }
  }
}
</script>

<style lang="css" scoped>
.theme--light.v-bottom-navigation[data-v-16edf6ea] {
    background-color: rgba(255, 255, 255, 0.06);
}
.v-btn > .v-btn__content .v-icon {
 background: #dde1e7;
    border-radius: 5px;
    box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgb(94 104 121 / 95%);
}

</style>
