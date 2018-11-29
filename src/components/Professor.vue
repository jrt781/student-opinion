<template>
  <div id="professorPage">

    <div class="aspect">
      <h1>Homework</h1>

      <div class="gallery">
        <v-flex class="card-container" v-for="review in reviews" :key="review.id" sm3 >
          <v-card class="card">
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
      </div> <!-- end gallery -->
      <v-btn round flat class="expand-button" v-on:click="expandAspect" :disabled="reviews.length <= 3">
        <expand-icon />
      </v-btn>
    </div> <!-- end aspect -->
  </div> <!-- end professorPage -->
</template>

<script>
  import ExpandIcon from "vue-material-design-icons/ChevronDown.vue"

  export default {
    data: () => ({
      reviewIndex: 0,
      reviews: [
        {
          id: '123',
          course: 'CS 236',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '124',
          course: 'CS 237',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '125',
          course: 'CS 238',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '126',
          course: 'CS 239',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '127',
          course: 'CS 240',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '128',
          course: 'CS 241',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '129',
          course: 'CS 242',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
      ],
      reviewsToDisplay: [
        {
          id: '123',
          course: 'CS 236',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '124',
          course: 'CS 237',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '125',
          course: 'CS 238',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '126',
          course: 'CS 239',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '127',
          course: 'CS 240',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '128',
          course: 'CS 241',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
        {
          id: '129',
          course: 'CS 242',
          semester: 'Winter 2018',
          text: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        },
      ],
      // options: {
      //   container: '#homework-reviews',
      //   easing: 'ease-in',
      //   offset: -60,
      //   force: true,
      //   cancelable: true,
      //   onStart: function(element) {
      //     // scrolling started
      //   },
      //   onDone: function(element) {
      //     // scrolling is done
      //   },
      //   onCancel: function() {
      //     // scrolling has been interrupted
      //   },
      //   x: false,
      //   y: true
      // },
    }),

    computed: {
      // reviewsToDisplay: function() {
      //   var toDisplay = [];
      //   toDisplay.push(this.reviews[this.reviewIndex]);
      //   if (this.reviewIndex + 1 < this.reviews.length) {
      //     toDisplay.push(this.reviews[this.reviewIndex + 1]);
      //   }
      //   if (this.reviewIndex + 2 < this.reviews.length) {
      //     toDisplay.push(this.reviews[this.reviewIndex + 2]);
      //   }
      //   return toDisplay;
      // }
    },

    components: {
      ExpandIcon
    },

    methods: {
      expandAspect: function() {
      },
    }
  }
</script>

<style scope>

.aspect {
  margin: 2rem;
  width: 100%;
}

.gallery {
  overflow: hidden;
}


.card-container {
  margin: 1em;
  float: left;
}

.expand-button {
  margin: 0 auto;
  clear: both;
  display: block;
}

</style>
