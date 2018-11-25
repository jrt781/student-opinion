<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>


    <v-content>
      <Professor/>
    </v-content>


    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Professor from './components/Professor'

  export default {
    name: 'App',
    components: {
      Professor
    },
    data: () => ({
      drawer: null
    }),
  }
</script>

<style scope>
#footer {
  text-align: center;
  width: 100%;
  margin: auto;
}
</style>
