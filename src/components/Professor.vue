<template>
  <div>
    <v-layout column justify-center align-center>
      <v-subheader>Offset Top</v-subheader>
      {{ offsetTop }}
    </v-layout>
    <v-container
      v-on:scroll="onScroll"
      id="scroll-target"
      style="max-width: 400px"
      class="scroll-x"
    >
      <v-layout
        column
        align-center
        justify-center
        style="width: 1000px"
      >
      </v-layout>
    </v-container>
  </div>
</template>


<!--template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>

      <div class="scrolling-wrapper-flexbox">
          <v-card class="card" sm3>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            </v-card-title>
            <v-card-text>
              Located two hours south of Sydney in the Southern Highlands of New South Wales, ...
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange">More</v-btn>
            </v-card-actions>
          </v-card>
          <v-card class="card" sm3>
            <v-card-title primary-title>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            </v-card-title>
            <v-card-text>
              Located two hours south of Sydney in the Southern Highlands of New South Wales, ...
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange">More</v-btn>
            </v-card-actions>
          </v-card>
      </div>
    </v-layout>
  </v-container>
</template-->

<script>

  export default {
    data: () => ({
      offsetTop: 0
    }),

    methods: {
      onScroll (e) {
        this.offsetTop = e.target.scrollTop;
      }
    }
  }
</script>

<style scope>
card {
  display: inline;
}
</style>
