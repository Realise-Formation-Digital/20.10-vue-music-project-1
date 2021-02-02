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
      <h1 id="where"> Où sommes nous ?</h1>
      <a href="https://www.google.com/maps/place/Rue+Viguet+8,+1227+Gen%C3%A8ve,+Suisse/@46.192996,6.1266046,17z/data=!3m1!4b1!4m5!3m4!1s0x478c7b2e1299827b:0x6058f3a4660b6a0b!8m2!3d46.192996!4d6.1287933">
        <v-img id="map"
          contain
          alt="map MayoTube"
          height="900"
          width="900"
          src="../assets/adresseMayoTube.png"
      ></v-img>
      </a>
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

  h1{
    text-align: center;
  }
  p{
    padding-left: 10px;
  }
  #title{
  }
  #where{
    padding-top: 10px;
  }
  #map{
    display: block;
    margin-left: 260px;
  }
</style>
