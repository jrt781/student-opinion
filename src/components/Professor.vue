<template>
  <div class="aspect">
    <v-btn round color="primary" class="change" v-on:click="prev" v-bind:disabled="reviewIndex == 0">
      <prev-icon />
    </v-btn>

    <v-flex sm3 class="card-container" v-for="review in reviewsToDisplay" :key="review.id">
      <v-card class="card" sm3>
        <v-card-title primary-title>
          <h3 class="headline mb-0">{{review.course}}, {{review.semester}}</h3>
        </v-card-title>
        <v-card-text>
          {{review.text}}
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">More</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-btn round color="primary" v-on:click="next" :disabled="reviewIndex == reviews.length - 3">
      <next-icon />
    </v-btn>
  </div>
</template>

<script>
import NextIcon from "vue-material-design-icons/ChevronRight.vue"
import PrevIcon from "vue-material-design-icons/ChevronLeft.vue"

  export default {
    data: () => ({
      reviewIndex: 0,
      reviews: [
        {
          course: 'CS 236',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          course: 'CS 237',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          course: 'CS 238',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          course: 'CS 239',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          course: 'CS 240',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
      ],
    }),

    computed: {
      reviewsToDisplay: function() {
        var toDisplay = [];
        toDisplay.push(this.reviews[this.reviewIndex]);
        if (this.reviewIndex + 1 < this.reviews.length) {
          toDisplay.push(this.reviews[this.reviewIndex + 1]);
        }
        if (this.reviewIndex + 2 < this.reviews.length) {
          toDisplay.push(this.reviews[this.reviewIndex + 2]);
        }
        return toDisplay;
      }
    },

    components: {
      NextIcon,
      PrevIcon
    },

    methods: {
      next: function() {
        this.reviewIndex += 3;
        if (this.reviewIndex + 3 >= this.reviews.length) {
          this.reviewIndex = this.reviews.length - 3;
        }
      },
      prev: function() {
        this.reviewIndex -= 3;
        if (this.reviewIndex < 0) {
          this.reviewIndex = 0;
        }
      },
    }
  }
</script>

<style scope>
.card-container {
  margin: 1em;
  float: left;
}

.aspect {
  display : flex;
  align-items : center;
}

.change {
  width: 10px;
}
</style>
