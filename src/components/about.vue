<template>
  <v-app>
    <v-main>
      <v-card class=text-center>
      <v-card-title class="justify-center" id="title">Qui sommes nous ?</v-card-title>
      <p>Une team d'amoureux de la mayonnaise réuni autour d'une seul idée : Réunir leurs passion pour la vidéo et la mayo en un seul projet ! <br>
      Axel, Adrian, Gaby, Hugo et Michael. 5 noms qui ne vous disent rien pour l'instant mais qui risque de vous parler dans quelques années. <br>
      </p>
      </v-card>
      <h1>Formulaire de contact</h1>
      <Form></Form>
    </v-main>
  </v-app>


</template>

<script>
import Form from "./form.vue";
export default {
  name: "about",
  components: {Form},
  props: {},
  data: () => ({
    selectedItem: 1,
    items: [
      { text: 'Notre histoire'},
      { text: 'Formulaire de contact'},
      { text: 'Où sommes nous ?'},
    ],
  }),
  methods: {},
};
</script>

<style scoped>
  p{
    padding-left: 10px;
  }
  #title{
  }
  #navLeft{
    padding-top: 10px;
  }
</style>
