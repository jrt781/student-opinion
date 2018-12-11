<template>
  <div id="app">
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
                :items="professor.courses"
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
  var loremIpsum = require('lorem-ipsum');

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
      professor: {},

    }),
    created: function() {
      this.professor = this.$store.getters.professor(this.$route.params.code);
      if (this.professor.courses.length == 0) {
        var numCourses = Math.round(2+(Math.random()*3));
        for (var j = 0; j < numCourses; j++) {
          this.$store.commit('addCourse', {
            code: this.$route.params.code,
            course: this.professor.department + ' ' + Math.round(100+(Math.random()*400))
          });
        }
        this.professor = this.$store.getters.professor(this.$route.params.code);
      }
      this.selectedCourses = this.professor.courses;

      if (this.professor.reviews.length == 0) {
        var types = this.$store.getters.types;
        var numReviews = Math.round((Math.random()*types.length*9));

        for (var t = 0; t < types.length; t++) {
          var type = types[t];
          this.generateReview(type);
        }
        for (var i = 0; i < numReviews; i++) {
          this.generateReview(types[Math.floor(Math.random() * types.length)]);
        }
        this.professor = this.$store.getters.professor(this.$route.params.code);
      }

    },
    methods: {
      // parseName: function(nameParam) {
      //   var name = nameParam.replace(/-/g, ' ');
      //   name = name.replace(
      //       /\w\S*/g,
      //       function(txt) {
      //           return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      //       }
      //   );
      //   return name;
      // },
      yeet: function() {
        window.location.href = "/#/";
      },
      generateReview: function(type) {
        var seasons = ['Fall', 'Winter', 'Spring', 'Summer'];
        var review = {};
        review.expanded = false;
        review.id = this.guid();
        review.course = this.professor.courses[Math.floor(Math.random() * this.professor.courses.length)];
        review.semester = seasons[Math.floor(Math.random() * seasons.length)];
        review.year = Math.round(2012+(Math.random()*6));
        review.type = type;
        review.text = loremIpsum({
            count: 1                      // Number of words, sentences, or paragraphs to generate.
          , units: 'paragraph'            // Generate words, sentences, or paragraphs.
          , sentenceLowerBound: 5         // Minimum words per sentence.
          , sentenceUpperBound: 10        // Maximum words per sentence.
          , paragraphLowerBound: 2        // Minimum sentences per paragraph.
          , paragraphUpperBound: 3        // Maximum sentences per paragraph.
          , format: 'plain'               // Plain text or html
          , words: this.sentences(review.type)
        });
        review.rating = Math.round((Math.random()*10));
        this.$store.commit('addReview', {
          code: this.$route.params.code,
          review: review
        });
      },
      guid: function() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
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
