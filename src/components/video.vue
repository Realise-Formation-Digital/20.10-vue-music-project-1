<template>
  <div>

  <v-btn @click = "player">Funk that sheet !</v-btn>

  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Video Thumbnail
          <th class="text-left">
            Artist - Song
          </th>
          <th class="text-left">
            Producer
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="track in tracksFetched"
          :key="track._id"
        >
          <td>{{ track.img }}</td>
          <td>{{ track.name }}</td>
          <td>{{ track.uNm }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  
  </div> 
</template>

<script>
  
const axios = require ("axios");
export default {
  name: "video",
  props: {},
  data: function() {
    return {
      tracksFetched: []
    };
  },

  methods: {
    async player() {
      try {
        const response = await axios.get("https://cors-anywhere.herokuapp.com/https://openwhyd.org/hot/electro?format=json");
        console.log (response);
              this.tracksFetched = response.data.tracks
        }
        catch (e){
          console.log ("error",e)
        }              
    }
  }
};
</script>

<style scoped></style>
