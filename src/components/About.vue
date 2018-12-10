<template>
  <div class="about">

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-link to="/">Home</router-link>
      <br>
      <v-btn
        color="primary"
        v-on:click="search"
        :disabled="profInput.length == 0"
        >
          Go to {{converted}}
      </v-btn>
      <br>
      <input v-model="profInput" placeholder="Search for a professor...">
      <p>
        Find out exactly what you need to know about your professors, in the words of your fellow students.
      </p>
    </v-content>

    <!-- TODO: change color of app! -->
    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    profInput: '',
  }),
  methods: {
    search: function() {
      window.location.href = this.converted;
    }
  },
  computed: {
    converted: function() {
      return '/#/professor/' + this.profInput.replace(/\s+/g, '-').toLowerCase();
    }
  }
}
</script>

<style scope>
#footer {
  text-align: center;
  width: 100%;
  margin: auto;
}
</style>
