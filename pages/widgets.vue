<template>
  <div class="container-fluid">
    <aside class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <nuxt-link class="nav-link" :to="{ name: 'widgets-new' }">
                New Widgets
                </nuxt-link>
            </li>
            <li class="nav-item" v-for="widget in widgets" :key="widget._id">
              <nuxt-link class="nav-link" :to="{ name: 'widgets-id', params: { id: widget._id } }">
                {{ widget.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <nuxt-child />
    </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/widgets'
    })
    return {
      widgets: data
    }
  }
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto;
}
[role="main"] {
  padding-top: 48px;
}
</style>
