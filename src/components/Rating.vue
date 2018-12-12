<template>
  <radial-progress-bar class="rating"
                       :diameter="factor * 50"
                       :stroke-width="5"
                       :completed-steps="completedSteps"
                       :total-steps="totalSteps"
                       :start-color="color"
                       :stop-color="color"
                       :innerStrokeColor="backColor"
                       :style="'{width:' + 2 * factor + 'em;height:' + 2 * factor + 'em;font-size:' + 1.75 * fontFactor + 'em;}'"
                       >
                       {{score}}
  </radial-progress-bar>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  name: 'Rating',
  props: {
    score: {
      required: true
    },
    size: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'regular'
    }
  },

  data: function () {
    return {
      totalSteps: 100,
    }
  },

  computed: {
    completedSteps: function() {
      var scoreToUse = this.score;
      if (typeof scoreToUse != 'number') {
        scoreToUse = 0;
      }
      return Math.floor(scoreToUse * 10);
    },
    factor: function() {
      switch(this.size) {
        case 1: return 1;
        case 2: return 1.25;
        case 3: return 1.5;
        case 4: return 2;
        default: return 1;
      }
    },
    fontFactor: function() {
      switch(this.size) {
        case 1: return 0.95;
        case 2: return 1;
        case 3: return 1.25;
        case 4: return 1.5;
        default: return 0.95;
      }
    },
    color: function() {
      if (this.type == 'customized') {
        return '#FD8508';
      }
      switch(this.size) {
        case 1: return '#99ccff';
        case 2: return '#3399ff';
        case 3: return '#0066cc';
        default: return '#99ccff';
      }
    },
    backColor: function() {
      switch(this.size) {
        case 1: return '#ededed';
        case 2: return '#dedede';
        case 3: return '#dedede';
        default: return '#dedede';
      }
    },
  },

  components: {
    RadialProgressBar
  }
}
</script>

<style scoped>

.rating {
  color: black;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  float: left;
  margin-right: 0.75rem;
  font-family: work-sans-regular, sans-serif;
}
</style>
