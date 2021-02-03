<template>
  <v-bottom-navigation
      v-model="value"
      :background-color="color"
      shift

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
    }
  }
}
</script>

<style lang="css" scoped>
.theme--light.v-bottom-navigation[data-v-16edf6ea][data-v-16edf6ea] {
    background-color: #eeeeee
}
.v-btn > .v-btn__content .v-icon {
 background: #dde1e7;
    border-radius: 5px;
    box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px rgb(94 104 121 / 95%);
}

.v-btn > .v-btn__content .v-icon[data-v-16edf6ea] {
    background: #f5f5f5;
    border-radius: 5px;
    box-shadow: -3px -3px 7px #ffffffb2, 3px 3px 5px #424242;
}

.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon {
    height: 30px;
    font-size: 24px;
    width: 60px;
}

</style>
