<template>
  <div id="professorPage">

    <h1 id="name">Professor {{ name }}</h1>
    <h2 id="department-name">{{departmentName}} Department</h2>
    <div id="overall-score" class="professor-score">
      <rating v-bind:score="overallScore" v-bind:size="3"/>
      <div class="score-description">Overall score</div>
    </div>
    <div id="customized-score" class="professor-score">
      <rating v-bind:score="customizedScore" v-bind:size="3"/>
      <div class="score-description">Your customized score</div>


      <v-dialog v-model="dialog" width="500" >
        <v-btn slot="activator" outline fab small color="indigo" class="edit-custom-score">
          <v-icon>edit</v-icon>
        </v-btn>

        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>
            Customized Score
          </v-card-title>

          <v-card-text>
            Choose what will be part of calculating your customized score of this professor:
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="primary" @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>

    <br />
    <hr />

    <br />
    <aspect type="homework"
      v-bind:department="department"
      v-bind:courses="courses"
      v-bind:show-courses="selectedCourses"
      v-bind:sorting-method="selectedSortingMethod"
      v-on:report-average="reportAverage"/>
    <hr />

    <br />
    <aspect type="exams"
      v-bind:department="department"
      v-bind:courses="courses"
      v-bind:show-courses="selectedCourses"
      v-bind:sorting-method="selectedSortingMethod"
      v-on:report-average="reportAverage"/>
    <hr />

    <br />
    <aspect type="reading"
      v-bind:department="department"
      v-bind:courses="courses"
      v-bind:show-courses="selectedCourses"
      v-bind:sorting-method="selectedSortingMethod"
      v-on:report-average="reportAverage"/>
    <hr />

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
      name: {
        type: String,
        required: true
      }
    },

    data: function () {
      return {
        dialog: false,
        customizedScore: 7.2,
        department: '',
        courses: [],
        aspectAverages: [],
      };
    },

    created: function() {
      var departments = ['CS', 'HIST', 'ENG', 'PHYS', 'ECON', 'GEO'];
      this.department = departments[Math.floor(Math.random() * departments.length)];

      var numCourses = Math.round(2+(Math.random()*5));
      for (var i = 0; i < numCourses; i++) {
        this.courses.push(this.department + ' ' + Math.round(100+(Math.random()*400)));
      }

      this.$emit('report-courses', this.courses);
    },

    computed: {
      overallScore: function() {
        var sum =  this.aspectAverages.reduce((total, aspectAverage) => {
          return total + aspectAverage.average;
        }, 0);
        return Math.round( sum / this.aspectAverages.length * 10) / 10;
      },
      departmentName: function() {
        switch(this.department) {
          case "CS":   return "Computer Science";
          case "HIST": return "History";
          case "ENG":  return "Engineering";
          case "PHYS": return "Physics";
          case "ECON": return "Economics";
          case "GEO":  return "Geology";
          default:     return this.department;
        }
      }
    },

    methods: {
      reportAverage: function(aspectAverage) {
        this.aspectAverages.push(aspectAverage);
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
}

#department-name {
  font-size: 2em;
  margin-bottom: 0.25em;
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
}

.professor-score {
  padding: 0.5rem;
}

</style>
