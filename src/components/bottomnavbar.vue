<template>

    <v-main class= "buttons-container">
        <div id="app">
            <v-bottom-nav fixed :value="navBar" :active.sync="nonavBar" >
                
                    <v-btn value="Home" to="/home">
                        <span class="active">Home</span>
                        <v-icon class="active-text">mdi-home-circle-outline</v-icon>
                    </v-btn>


                    <v-btn value="about" to="/about">
                        <span class="active">About</span>
                        <v-icon class="active-text">mdi-account-group</v-icon>
                    </v-btn>

                    <v-btn value="Video" to="/video">
                        <span class="active">Video</span>
                        <v-icon class="active-text">mdi-play-circle-outline</v-icon>
                    </v-btn>
            </v-bottom-nav>
        </div>
    </v-main>
</template>

<script>
  export default {
      name: "bottomnavbar",
      el:"#app",
    data () {
    return {
      nonavBar: 0,
      navBar: true  //Fix the  navbar on the bottom
    }
  },
  }

    const vbtn = document.querySelectorAll("v-btn");
    const icon = document.querySelectorAll("v-btn, v-icon");

for (let i = 0; i < vbtn.length; i++) {
  vbtn[i].addEventListener("click", function() {
    for (let i = 0; i < vbtn.length; i++) {
      vbtn[i].classList.remove("active");
      icon[i].classList.remove("active-text");
    }
    this.classList.add("active");
    icon[i].classList.add("active-text");
  });
}
</script>

<style lang="css" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.buttons-container {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100px;
  border-radius: 45px;
  background: f8f9fa;
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.2);
}
 
v-bottom-navigation {
  list-style: none;
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
v-bottom-navigation v-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px;
  height: 90px;
  width: 95px;
  background: f8f9fa;
  border-top: 1px solid #7F3CE8;
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.5);
  transition: all .5s;
}
v-bottom-navigation v-btn:nth-of-type(1) { /*(n) selector correspond à chaque élément qui est le nième enfant, 
                                            d'un type particulier, de son parent.*/
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
}
v-bottom-navigatio v-btn:last-of-type {

  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
}

v-bottom-navigation v-btn:hover {
  cursor: pointer;
  
}
v-bottom-navigation v-btn v-icon {
  display: inline-block;
  color: #7F3CE8;
  text-decoration: none;
  font-size: 40px;
  transition: all .5s;
}


.active {
  background: #7F3CE8;
  border-top: none;
  border-bottom: 1px solid #252525;
  box-shadow: inset 0 0 10px 1px rgba(0, 0, 0, 0.5);
}

.active-text {
  color: white;
  text-shadow: 0 0 15px rgba(220, 10, 10, 0I .5);
}

</style>