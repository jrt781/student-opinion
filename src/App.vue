<template>
  <v-app id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import Container from './components/Container'
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

// window.location.href = "/#/about";

  export default {
    name: 'App',
    components: {
      Container
    },
    data: () => ({
      drawer: null,
      selectedCourses: [],
      selectedSortingMethod: 'semester, most recent',
      sortingMethods: [
        "rating, highest",
        "rating, lowest",
        "semester, most recent",
        "semester, oldest",
      ],
      courses: [],
    }),
    methods: {

    }
  }
</script>

<style scope>
#footer {
  text-align: center;
  width: 100%;
  margin: auto;
}

.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed .v-input__slot {
  padding: 0 12px 5px;
}

.v-input__slot {
  margin-bottom: 0;
}

.v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
  min-height:40px;
  height: auto;
}

#first-filter {
  margin-top: 15px;
}
</style>
