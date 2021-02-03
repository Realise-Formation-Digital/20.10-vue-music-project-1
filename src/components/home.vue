<template>
  <div>

        <v-container fluid>


<v-row
align="center"
justify="center"
>
  <v-col cols="1"/>
  <v-col cols="10"
  align="center"
justify="center"
>
      <!--- début de la card <--->
        <v-card width="80%">

<!--- titre <--->
        <h1><center><b> Welcome </b></center></h1>

<!--- carousel <--->
        <v-carousel 
    cycle
    height="600"
    hide-delimiter-background
    show-arrows-on-hover
        >
        <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-1">
            {{ slide }} Slide
              
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item> 
  </v-carousel>
<!-------zone de texte sous le carousel<------>
      <h1><center><b> MayoTube</b></center></h1>
      
<!-------bouton<------> 
  <v-btn block>
    L'émultion musicale 
  </v-btn>



  </v-card> 
  </v-col>
  <v-col cols="1"/>

</v-row>

</v-container>
</div>
  </template>
  
<script>
export default {
  name: "home",
  props: {},
  data: function() {
    return {
      colors: [
          'indigo',
          'deep-purple accent-5',
          'indigo',
          'deep-purple accent-5',
          'indigo',
        ],
        slides: [
          'First tendence',
          'Second tendence',
          'Third tendence',
          'Fourth tendence',
          'Fifth tendence',
        ],
    };
  },
  methods: {},
};

</script>

<style scoped>


</style>


