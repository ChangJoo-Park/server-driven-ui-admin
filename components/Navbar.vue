<template>
  <b-navbar toggleable="md" type="dark" variant="info" class="navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" class="col-sm-3 col-md-2 mr-0">Server Driven UI Admin</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="/screens">Screens</b-nav-item>
        <b-nav-item href="/widgets">Widgets</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
