<template>
  <div id="professorPage">

    <h1 id="name">Professor {{ name }}</h1>
    <div id="overall-score" class="professor-score">
      <rating v-bind:score="overallScore" v-bind:size="3"/>
      <div class="score-description">Overall score</div>
    </div>
    <div id="customized-score" class="professor-score">
      <rating v-bind:score="customizedScore" v-bind:size="3"/>
      <div class="score-description">Your customized score</div>
      <v-btn outline fab small color="indigo" class="edit-custom-score">
        <v-icon>edit</v-icon>
      </v-btn>
    </div>

    <br />
    <hr />

    <br />
    <aspect type="homework" v-bind:department="department" v-on:report-average="reportAverage"/>
    <hr />

    <br />
    <aspect type="exams" v-bind:department="department" v-on:report-average="reportAverage"/>
    <hr />

    <br />
    <aspect type="reading" v-bind:department="department" v-on:report-average="reportAverage"/>
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

    data: function () {
      return {
        name: 'John Smith',
        customizedScore: 7.2,
        department: '',
        aspectAverages: [],
      };
    },

    created: function() {
      var departments = ['CS', 'HIST', 'ENG', 'PHYS', 'ECON', 'GEO'];
      this.department = departments[Math.floor(Math.random() * departments.length)];
    },

    computed: {
      overallScore: function() {
        var sum =  this.aspectAverages.reduce((total, aspectAverage) => {
          return total + aspectAverage.average;
        }, 0);
        return Math.round( sum / this.aspectAverages.length * 10) / 10;
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
