<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="home">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="search">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group prepend-icon="sort" expand>
          <v-list-tile slot="activator">
            <v-list-tile-title>Sort</v-list-tile-title>
          </v-list-tile>

          <!-- v-list-tile>
            <v-list-tile-content>
              <v-select
                v-model="selectedCourses"
                :items="professor.courses"
                chips
                label="Courses to display"
                multiple
                outline
              ></v-select>
            </v-list-tile-content>
          </v-list-tile -->

          <v-list-tile id="first-filter">
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
        <v-list-tile @click="writeReview">
          <v-list-tile-action>
            <v-icon>add_comment</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Write a Review</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Professor
        :selected-courses="selectedCourses"
        :selected-sorting-method="selectedSortingMethod"
        :code="professor.code"
        :department="professor.department"
        />
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
    </v-footer>
  </div>
</template>

<script>
  import Professor from './Professor'

  export default {
    name: 'Container',
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
    }),
    created: function() {
      var professor = this.$store.getters.professor(this.$route.params.code);
      this.selectedCourses = professor.courses;
    },
    computed: {
      code: function() {return this.$route.params.code;},
      professor: function() {return this.$store.getters.professor(this.code);},
    },
    methods: {
      home: function() {
        window.location.href = "/#/";
      },
      search: function() {
        window.location.href = "/#/search";
      },
      writeReview: function() {
        window.location.href = "/#/professor/" + this.code + "/review";
      },
    },
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
