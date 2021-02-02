<template>
  <v-bottom-navigation
      v-model="value"
      :background-color="color"
      shift
      fixed
  >
    <v-btn to="/" icon flat depressed>
      <span>Home</span>
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn to="/about" icon flat depressed>
      <span>About</span>
      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn to="/video" icon flat depressed>
      <span>Video</span>
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
  },
  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        default:
          return 'blue-grey'
      }
    },
  },
}
</script>

<style lang="css" scoped>

</style>
