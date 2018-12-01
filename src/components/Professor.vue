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

    <aspect />
    <hr />
    <br />
    <aspect />
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
        overallScore: 6.7,
        customizedScore: 7.2,
      };
    },

    computed: {

    },

    methods: {

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
