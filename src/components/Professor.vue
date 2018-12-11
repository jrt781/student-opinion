<template>
  <div id="professorPage">

    <v-layout column class="fab-container">
      <router-link :to="{ name: 'Review', params: {name: code, courses: courses } }">
        <v-btn
          dark
          fab
          top
          right
          absolute
          color="orange"
          v-on:click="writeReview"
        >
          <v-icon>add_comment</v-icon>
        </v-btn>
      </router-link>
    </v-layout>

    <h1 id="name">Professor {{ name }}</h1>
    <h2 id="department-name">{{this.$store.getters.departmentName(department)}} Department</h2>
    <div id="overall-score" class="professor-score">
      <rating v-bind:score="overallScore" v-bind:size="3"/>
      <div class="score-description">Overall score</div>
    </div>
    <div id="customized-score" class="professor-score">
      <rating v-bind:score="personalizedScore" v-bind:size="3"/>
      <div class="score-description">Personalized score</div>

      <v-dialog v-model="dialog" width="500" >
        <v-btn slot="activator" outline fab small color="indigo" class="edit-custom-score">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            <span style='font-family: work-sans-medium, sans-serif;'>Personalized Score</span>
          </v-card-title>

          <v-card-text id="personalized-score-body">
            <p class="personalized">Choose what will be part of calculating this customized score of Professor {{ professor.name }}.</p>
            <h4 class="personalized-header personalized">Review Types</h4>
            <v-checkbox
              v-for="type in types" :key="type + '-checkbox'"
              :label="fullType(type)"
              v-model="tempCheckboxes[type]"
            ></v-checkbox>
            <h4 class="personalized-header personalized">Courses</h4>
            <v-checkbox
              v-for="course in courses" :key="course + '-checkbox'"
              :label="course"
              v-model="tempCheckboxes[course]"
            ></v-checkbox>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="cancel">
              Cancel
            </v-btn>
            <v-btn color="primary" @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

    <br />
    <hr />

    <div v-for="type in types" :key="type">
      <br />
      <aspect
        v-bind:type="type"
        v-bind:code="code"
        v-bind:show-courses="selectedCourses"
        v-bind:sorting-method="selectedSortingMethod"/>
      <hr />
    </div>

  </div>
</template>

<script>
  import Aspect from './Aspect.vue'
  import Rating from './Rating.vue'

  export default {
    name: 'Professor',

    components: {
      Aspect, Rating
    },

    props: {
      selectedCourses: {
        type: Array,
        required: true
      },
      selectedSortingMethod: {
        type: String,
        required: true
      },
    },

    data: function () {
      return {
        dialog: false,
        checkboxes: {},
        tempCheckboxes: {},
      };
    },

    created: function() {
      for (var t = 0; t < this.types.length; t++) {
        this.$set(this.checkboxes, this.types[t], true);
        this.$set(this.tempCheckboxes, this.types[t], true);
      }
      for (var c = 0; c < this.courses.length; c++) {
        this.$set(this.checkboxes, this.courses[c], true);
        this.$set(this.tempCheckboxes, this.courses[c], true);
      }
    },
    computed: {
      code: function() {return this.$route.params.code;},
      professor: function() {return this.$store.getters.professor(this.code);},
      courses: function() {return this.$store.getters.professor(this.code).courses;},
      overallScore: function() {
        var aspectAverages = [];
        for (var t = 0; t < this.types.length; t++) {
          var type = this.types[t];
          var reviewsOfType = this.$store.getters.professor(this.code).reviews.filter(function(review) {
            return review.type == type;
          });
          var sum =  reviewsOfType.reduce((total, review) => {
            return total + review.rating;
          }, 0);
          var average = sum / reviewsOfType.length;
          var aspectAverage = Math.round( average * 10) / 10;
          aspectAverages.push(aspectAverage);
        }
        var overallSum =  aspectAverages.reduce((total, aspectAverage) => {
          return total + aspectAverage;
        }, 0);
        var overallAverageNotRounded = overallSum / aspectAverages.length;
        var overallAverageRounded = Math.round( overallAverageNotRounded * 10) / 10;
        return overallAverageRounded;
      },
      personalizedScore: function() {
        var aspectAverages = [];
        for (var t = 0; t < this.types.length; t++) {
          var type = this.types[t];
          if (this.checkboxes[type]) {
            var reviewsOfType = this.$store.getters.professor(this.code).reviews.filter(function(review) {
              return review.type == type;
            });
            var reviewsToInclude = [];
            for (var r = 0; r < reviewsOfType.length; r++) {
              var reviewToCheck = reviewsOfType[r];
              if (this.checkboxes[reviewToCheck.course]) {
                reviewsToInclude.push(reviewToCheck);
              }
            }
            if (reviewsToInclude.length > 0) {
              var sum =  reviewsToInclude.reduce((total, review) => {
                return total + review.rating;
              }, 0);
              var average = sum / reviewsToInclude.length;
              var aspectAverage = Math.round( average * 10) / 10;
              aspectAverages.push(aspectAverage);
            }
          }
        }
        if (aspectAverages.length == 0) {
          return "--";
        }
        var overallSum =  aspectAverages.reduce((total, aspectAverage) => {
          return total + aspectAverage;
        }, 0);
        var overallAverageNotRounded = overallSum / aspectAverages.length;
        var overallAverageRounded = Math.round( overallAverageNotRounded * 10) / 10;
        return overallAverageRounded;
      },
      name: function() { return this.$store.getters.professor(this.code).name; },
      department: function() { return this.$store.getters.professor(this.code).department; },
      types: function() { return this.$store.getters.types; },
    },

    methods: {
      writeReview: function() {
        window.location.href = "/#/professor/" + this.code + "/review";
      },
      fullType: function(type) {
        return this.$store.getters.fullType(type);
      },
      cancel: function() {
        for (var t = 0; t < this.types.length; t++) {
          var type = this.types[t];
          this.tempCheckboxes[type] = this.checkboxes[type];
        }
        for (var c = 0; c < this.courses.length; c++) {
          var course = this.courses[course];
          this.tempCheckboxes[course] = this.checkboxes[course];
        }
        this.dialog = false;
      },
      save: function() {
        for (var t = 0; t < this.types.length; t++) {
          var type = this.types[t];
          this.checkboxes[type] = this.tempCheckboxes[type];
        }
        for (var c = 0; c < this.courses.length; c++) {
          var course = this.courses[c];
          this.checkboxes[course] = this.tempCheckboxes[course];
        }
        this.dialog = false;
      },
    },
  }
</script>

<style scope>

#professorPage {
  padding: 2rem;
}

#name {
  font-size: 4em;
  font-family: work-sans-thin, sans-serif;
}

#department-name {
  font-size: 2em;
  margin-bottom: 0.25em;
  font-family: work-sans-thin, sans-serif;
}

.overall {
  font-size: 2em;
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.75em;
  background-color: #303BA6;
}

#overall-score {
  display:flex;
  align-items:center;
}

#customized-score-rating {
  background-color: #509BE6;
}

#customized-score {
  overflow: auto;
  display:flex;
  align-items:center;
}

#customized-score * {
  float: left;
}

.edit-custom-score {
  float: left;
  margin-left: 1rem;
}

.score-description {
  font-size: 2em;
  font-family: work-sans-regular, sans-serif;
}

.professor-score {
  padding: 0.5rem;
}

.fab-container {
  position: fixed;
  right: 4em;
  top: 5em;
  z-index:20;
}

.v-input--selection-controls {
  margin: 0;
  padding: 0;
}

.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {
  margin: 0;
}

.personalized-header {
  margin-bottom: 1rem;
  font-weight: bold;
}

.personalized {
  font-family: work-sans-light, sans-serif;
  font-size: 1.25em;
}

</style>
