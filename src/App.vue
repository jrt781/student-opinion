<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>




        <v-list-group prepend-icon="sort">
          <v-list-tile slot="activator">
            <v-list-tile-title>Filter</v-list-tile-title>
          </v-list-tile>

          <v-list-tile id="first-filter">
            <v-list-tile-content>
              <v-select
                v-model="selectedCourses"
                :items="courses"
                chips
                label="Courses to display"
                multiple
                outline
              ></v-select>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-select
                v-model="selectedSortingMethod"
                :items="sortingMethods"
                label="Sort reviews by"
                outline
                class="filter"
              ></v-select>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- TODO: change color of app! -->
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Professor
        v-on:report-courses="reportCourses"
        :selected-courses="selectedCourses"
        :selected-sorting-method="selectedSortingMethod"
        />
    </v-content>

    <!-- TODO: change color of app! -->
    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
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
      yeet: function() {
      },
      reportCourses: function(courses) {
        this.courses = courses;
        this.selectedCourses = courses;
      },
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
