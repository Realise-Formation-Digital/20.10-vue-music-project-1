<template>
  <mdb-navbar color=#7F3CE8>
        <mdb-navbar-brand href="/src/assets/MayoTube-logo.png"></mdb-navbar-brand>
        <form autocomplete="off">
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
  </mdb-navbar>
</template>

<script>
  export default {
  name: "topnavbar",
  data() {
    return {

    }
  }
}
</script>

