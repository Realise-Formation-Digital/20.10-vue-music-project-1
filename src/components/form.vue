<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label=" Name" required>

    </v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label=" E-mail" required>

    </v-text-field>

    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label=" Motif" required>

    </v-select>

    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label=" Cochez la case pour certifiez que vous êtes d'accord qu'on vous écoute 24h sur 24." required>

    </v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "form",
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Informations sur les horaires d\'ouverture des bureaux',
      'Reçevoir une alerte sur les nouveaux titres disponible par mail',
      'Informations sur comment racheter l\'entreprise en cas de failite',
      'Recevoir une alerte sur les offres d\'emploi disponible par mail',
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()

      //this.select
      alert("Reçu avec succès! ")
      this.$refs.form.resetValidation()
      this.$refs.form.reset()

      // this.select = null
      //this.checkbox = null
    },
    reset () {
      this.$refs.form.reset()
    },
  },
}
</script>

<style scoped>

</style>