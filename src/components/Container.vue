<template>
  <div id="app">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="yeet">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>




        <v-list-group prepend-icon="sort">
          <v-list-tile slot="activator">
            <v-list-tile-title>Filter</v-list-tile-title>
          </v-list-tile>

          <v-list-tile id="first-filter">
            <v-list-tile-content>
              <v-select
                v-model="selectedCourses"
                :items="courses"
                chips
                label="Courses to display"
                multiple
                outline
              ></v-select>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-content>
              <v-select
                v-model="selectedSortingMethod"
                :items="sortingMethods"
                label="Sort reviews by"
                outline
                class="filter"
              ></v-select>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- TODO: change color of app! -->
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Student Opinion</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <Professor
        v-on:report-courses="reportCourses"
        :selected-courses="selectedCourses"
        :selected-sorting-method="selectedSortingMethod"
        :name="name"
        :department="department"
        />
    </v-content>

    <!-- TODO: change color of app! -->
    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
    </v-footer>
  </div>
</template>

<script>
  import Professor from './Professor'

  export default {
    name: 'Container',
    components: {
      Professor
    },
    data: () => ({
      drawer: null,
      selectedCourses: [],
      selectedSortingMethod: 'semester, most recent',
      sortingMethods: [
        "rating, highest",
        "rating, lowest",
        "semester, most recent",
        "semester, oldest",
      ],
      courses: [],
      name: '',
      department: '',
      professors: [
        {name: 'Denise Simmons', department: 'ECON', id: 1},
        {name: 'Johnny Patterson', department: 'ENGL', id: 2},
        {name: 'Ronald Turner', department: 'ENGL', id: 3},
        {name: 'Willie Williams', department: 'BIO', id: 4},
        {name: 'Todd Young', department: 'IT', id: 5},
        {name: 'Wanda Diaz', department: 'IT', id: 6},
        {name: 'Russell Gonzalez', department: 'HIST', id: 7},
        {name: 'Judith Rivera', department: 'CS', id: 8},
        {name: 'Norma Howard', department: 'IT', id: 9},
        {name: 'Paul Sanchez', department: 'CS', id: 10},
        {name: 'Stephanie Scott', department: 'IT', id: 11},
        {name: 'Jane Hall', department: 'HUM', id: 12},
        {name: 'Fred Coleman', department: 'PHYS', id: 13},
        {name: 'Carolyn Evans', department: 'BIO', id: 14},
        {name: 'Amanda Jackson', department: 'BIO', id: 15},
        {name: 'Donna Clark', department: 'BIO', id: 16},
        {name: 'Paula James', department: 'ENGL', id: 17},
        {name: 'Ashley Russell', department: 'STAT', id: 18},
        {name: 'Wayne Sanders', department: 'IT', id: 19},
        {name: 'Debra Torres', department: 'HIST', id: 20},
        {name: 'George Miller', department: 'CS', id: 21},
        {name: 'Barbara Johnson', department: 'PHYS', id: 22},
        {name: 'Donald Peterson', department: 'IT', id: 23},
        {name: 'Kathleen Morgan', department: 'HUM', id: 24},
        {name: 'Jerry Baker', department: 'ENGL', id: 25},
        {name: 'Jeremy Hill', department: 'STAT', id: 26},
        {name: 'Sean Collins', department: 'ECON', id: 27},
        {name: 'Joan Mitchell', department: 'CS', id: 28},
        {name: 'Lawrence Washington', department: 'IT', id: 29},
        {name: 'Kenneth Thomas', department: 'ENGL', id: 30},
        {name: 'Kathy Ross', department: 'CS', id: 31},
        {name: 'Keith Powell', department: 'CS', id: 32},
        {name: 'Helen Smith', department: 'IT', id: 33},
        {name: 'Jacqueline Roberts', department: 'CS', id: 34},
        {name: 'Lori Brown', department: 'CS', id: 35},
        {name: 'Christine Lopez', department: 'ECON', id: 36},
        {name: 'Victor Long', department: 'CS', id: 37},
        {name: 'Lillian Richardson', department: 'IT', id: 38},
        {name: 'Angela Foster', department: 'HIST', id: 39},
        {name: 'Janet Alexander', department: 'BIO', id: 40},
        {name: 'Annie Anderson', department: 'IT', id: 41},
        {name: 'Frank Davis', department: 'HIST', id: 42},
        {name: 'Carol Jones', department: 'GEOL', id: 43},
        {name: 'Alan Griffin', department: 'BIO', id: 44},
        {name: 'Lisa Nelson', department: 'IT', id: 45},
        {name: 'Nancy Hernandez', department: 'GEOL', id: 46},
        {name: 'Brenda Parker', department: 'ECON', id: 47},
        {name: 'Beverly Walker', department: 'ECON', id: 48},
        {name: 'Eric Butler', department: 'IT', id: 49},
        {name: 'Andrea Martinez', department: 'CS', id: 50},
        {name: 'Craig Carter', department: 'ECON', id: 51},
        {name: 'Kimberly Stewart', department: 'ECON', id: 52},
        {name: 'Clarence Henderson', department: 'PHYS', id: 53},
        {name: 'Douglas Flores', department: 'GEOL', id: 54},
        {name: 'Steve Ramirez', department: 'CS', id: 55},
        {name: 'Timothy Wood', department: 'BIO', id: 56},
        {name: 'Tammy Barnes', department: 'HUM', id: 57},
        {name: 'Dennis Perez', department: 'PHYS', id: 58},
        {name: 'Julia Reed', department: 'GEOL', id: 59},
        {name: 'Heather Gray', department: 'PHYS', id: 60},
        {name: 'Jennifer Bryant', department: 'CS', id: 61},
        {name: 'Arthur Lewis', department: 'HIST', id: 62},
        {name: 'Matthew Harris', department: 'ECON', id: 63},
        {name: 'Mary Wilson', department: 'IT', id: 64},
        {name: 'Diana Bell', department: 'HUM', id: 65},
        {name: 'Stephen King', department: 'PHYS', id: 66},
        {name: 'Kathryn Cooper', department: 'ECON', id: 67},
        {name: 'Gregory Adams', department: 'GEOL', id: 68},
        {name: 'Billy Perry', department: 'HIST', id: 69},
        {name: 'Marilyn Thompson', department: 'ENGL', id: 70},
        {name: 'Margaret Murphy', department: 'GEOL', id: 71},
        {name: 'Gerald Moore', department: 'IT', id: 72},
        {name: 'Susan White', department: 'STAT', id: 73},
        {name: 'Christopher Green', department: 'GEOL', id: 74},
        {name: 'Elizabeth Rodriguez', department: 'PHYS', id: 75},
        {name: 'Jean Jenkins', department: 'IT', id: 76},
        {name: 'David Rogers', department: 'STAT', id: 77},
        {name: 'Ruby Morris', department: 'ENGL', id: 78},
        {name: 'Michelle Bennett', department: 'HUM', id: 79},
        {name: 'Jessica Cook', department: 'BIO', id: 80},
        {name: 'Irene Cox', department: 'BIO', id: 81},
        {name: 'Nicole Price', department: 'CS', id: 82},
        {name: 'Jeffrey Watson', department: 'ECON', id: 83},
        {name: 'Anthony Allen', department: 'GEOL', id: 84},
        {name: 'Emily Ward', department: 'HUM', id: 85},
        {name: 'Chris Bailey', department: 'ENGL', id: 86},
        {name: 'Joyce Wright', department: 'HIST', id: 87},
        {name: 'Shawn Campbell', department: 'GEOL', id: 88},
        {name: 'Louis Brooks', department: 'BIO', id: 89},
        {name: 'Laura Lee', department: 'HIST', id: 90},
        {name: 'Phyllis Edwards', department: 'BIO', id: 91},
        {name: 'Martin Hughes', department: 'HUM', id: 92},
        {name: 'Alice Martin', department: 'STAT', id: 93},
        {name: 'Ernest Taylor', department: 'ECON', id: 94},
        {name: 'Harry Robinson', department: 'PHYS', id: 95},
        {name: 'Nicholas Garcia', department: 'ENGL', id: 96},
        {name: 'Eugene Gonzales', department: 'IT', id: 97},
        {name: 'Frances Kelly', department: 'IT', id: 98},
        {name: 'Evelyn Phillips', department: 'HUM', id: 99},
      ],

    }),
    created: function() {
      this.name = this.parseName(this.$route.params.name);
      for (var i = 0; i < this.professors.length; i++) {
        if (this.professors[i].name == this.name) {
          this.department = this.professors[i].department;
        }
      }
    },
    methods: {
      parseName: function(nameParam) {
        var name = nameParam.replace(/-/g, ' ');
        name = name.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
        return name;
      },
      yeet: function() {
        window.location.href = "/#/";
      },
      reportCourses: function(courses) {
        this.courses = courses;
        this.selectedCourses = courses;
      },
    }
  }
</script>

<style scope>
#footer {
  text-align: center;
  width: 100%;
  margin: auto;
}

.v-text-field.v-text-field--enclosed .v-text-field__details, .v-text-field.v-text-field--enclosed .v-input__slot {
  padding: 0 12px 5px;
}

.v-input__slot {
  margin-bottom: 0;
}

.v-list--dense .v-list__tile:not(.v-list__tile--avatar) {
  min-height:40px;
  height: auto;
}

#first-filter {
  margin-top: 15px;
}
</style>
