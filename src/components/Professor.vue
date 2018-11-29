<template>
  <div id="professorPage">

    <div class="aspect">
      <h1>Homework</h1>

      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex v-for="review in firstThree(reviews)" :key="review.id"  xs4 >
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
        </v-layout>
      </v-container>

      <transition
          name="expand"
          @enter="enter"
          @after-enter="afterEnter"
          @leave="leave">
          <v-container grid-list-xl v-if="isExpanded">
            <v-layout row wrap>
              <v-flex v-for="review in afterFirstThree(reviews)" :key="review.id"  xs4 >
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
            </v-layout>
          </v-container>
      </transition>

      <v-btn round flat class="expand-button" v-on:click="expandAspect"
          v-if="!isExpanded && reviews.length > 3">
        <expand-icon />
      </v-btn>
      <v-btn round flat class="expand-button" v-on:click="collapseAspect"
          v-if="isExpanded">
        <collapse-icon />
      </v-btn>
    </div> <!-- end aspect -->
    <hr />
  </div> <!-- end professorPage -->




</template>

<script>
import ExpandIcon from "vue-material-design-icons/ChevronDown.vue"
import CollapseIcon from "vue-material-design-icons/ChevronUp.vue"

  export default {
    components: {
      ExpandIcon, CollapseIcon
    },

    data: () => ({
      isExpanded: false,
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
    }),

    computed: {

    },

    methods: {
      expandAspect: function() {
        this.isExpanded = true;
      },
      collapseAspect: function() {
        this.isExpanded = false;
      },
      firstThree: function(array) {
        return array.slice(0, 3);
      },
      afterFirstThree: function(array) {
        return array.slice(3);
      },
      enter(element) {
        const width = getComputedStyle(element).width;

        element.style.width = width;
        element.style.position = 'absolute';
        element.style.visibility = 'hidden';
        element.style.height = 'auto';

        const height = getComputedStyle(element).height;

        element.style.width = null;
        element.style.position = null;
        element.style.visibility = null;
        element.style.height = 0;

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
      leave(element) {
        const height = getComputedStyle(element).height;

        element.style.height = height;

        setTimeout(() => {
          element.style.height = 0;
        });
      },
    }
  }
</script>

<style scope>

.expand-button {
  margin: 0 auto;
  clear: both;
  display: block;
}

.expand-enter-active,
.expand-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}

</style>
