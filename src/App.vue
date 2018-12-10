<template>
  <v-app id="app">
    <router-view></router-view>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

  export default {
    name: 'App',
    components: {
    },
    data: () => ({

    }),
    methods: {

    },
    computed: {
      
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
