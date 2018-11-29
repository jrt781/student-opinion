<template>
  <div id="professorPage">

    <div class="aspect">
      <h1>Homework</h1>

      <div class="gallery"
      v-bind:class="{ expanded: isExpanded }">
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
      }
    }
  }
</script>

<style scope>

.aspect {
  margin: 2rem;
  width: 100%;
  min-width: 1000px;
}

.gallery {
  overflow: hidden;
  height: 18rem;
}

.expanded {
  height: auto;
}

.card-container {
  margin: 1em;
  float: left;
  height: 16rem;
}

.card {}

.expand-button {
  margin: 0 auto;
  clear: both;
  display: block;
}

</style>
