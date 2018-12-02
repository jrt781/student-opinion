<template>
  <div id="professorPage">

    <h1 id="name">Professor {{ name }}</h1>
    <div class="rating overall elevation-3">{{overallScore}}</div>
    <div style="font-size: 2em; padding-top:0.5em; margin-bottom: 1em;">Overall score for this professor</div>
    <div class="rating overall elevation-3" id="customized-score">{{customizedScore}}</div>
    <div style="font-size: 2em; padding-top:0.5em; margin-bottom: 1em;">Customized score for this professor</div>

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

  </div> <!-- end professorPage -->




</template>

<script>
  import Aspect from './Aspect.vue'

  export default {
    name: 'Professor',

    components: {
      Aspect,
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

.rating {
  font-size: 2em;
  background-color: #303BA6;
  color: white;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  width:2em;
  height:2em;
  float: left;
  margin-right: 0.75rem;
}

.overall {
  font-size: 2em;
  width: 2.5em;
  height: 2.5em;
  margin-right: 0.75em;
}

#customized-score {
  background-color: #509BE6;
}

</style>
