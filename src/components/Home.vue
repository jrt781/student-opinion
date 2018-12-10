<template>
  <div class="home">

    <v-toolbar color="indigo" dark fixed app>
    </v-toolbar>

    <v-content>
      <div style="display:flex;justify-content:center;align-items:center;">
        <h1 class="main-title">Student Opinion</h1>
      </div>
      <br />
      <div style="display:flex;justify-content:center;align-items:center;">
        <h2 class="sub-title">
          Find out exactly how good your professors are, in the words of your fellow students.
        </h2>
      </div>
      <br />
      <br />
      <div style="display:flex;align-items:center;">

        <h3 class="home-instructions">Find a professor: </h3>
        <v-autocomplete
          :items="professors"
          :filter="customFilter"
          item-text="name"
          label="Professor"
          v-model="profInput"
          return-object
          outline
        >
          <template slot="selection" slot-scope="data">
            {{ data.item.name }}&nbsp;<span class="department">({{ departmentName(data.item.department) }})</span>
          </template>
          <template slot="item" slot-scope="data">
            {{ data.item.name }}&nbsp;<span class="department">({{ departmentName(data.item.department) }})</span>
          </template>
        </v-autocomplete>
      </div>
      <br>
      <div style="display:flex;justify-content:center;align-items:center;">
        <v-btn class="button" color="primary" v-on:click="search" :disabled="profInput == null">Search this professor</v-btn>
      </div>

    </v-content>

    <!-- TODO: change color of app! -->
    <v-footer color="indigo" app>
      <span class="white--text" id="footer">&copy; 2018</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    profInput: null,
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
  methods: {
    search: function() {
      window.location.href = this.converted;
    },
    departmentName: function(department) {
      switch(department) {
        case "CS":   return "Computer Science";
        case "HIST": return "History";
        case "ENGL": return "Engineering";
        case "PHYS": return "Physics";
        case "ECON": return "Economics";
        case "GEOL": return "Geology";
        case "BIO":  return "Biology";
        case "HUM":  return "Humanities";
        case "STAT": return "Statistics";
        case "IT":   return "Information Technology";
        default:     return department;
      }
    },
    // eslint-disable-next-line
    customFilter (item, queryText, itemText) {
      // item: the object from the array of items
      // queryText: what the user has typed in
      // itemText: what displays in the text field
      const name = item.name.toLowerCase()
      const department = item.department.toLowerCase()
      const departmentName = this.departmentName(item.department).toLowerCase();
      const searchText = queryText.toLowerCase()

      return name.indexOf(searchText) > -1 ||
        department.indexOf(searchText) > -1 ||
        departmentName.indexOf(searchText) > -1
    },
  },
  computed: {
    converted: function() {
      var name = '';
      if (this.profInput != null) {
        name = this.profInput.name;
      }
      return '/#/professor/' + name.replace(/\s+/g, '-').toLowerCase();
    }
  }
}
</script>

<style scope>
#footer {
  text-align: center;
  width: 100%;
  margin: auto;
}

.home {
  padding: 2rem 20rem;
}

.button {
  margin: auto;
}

.main-title {
  font-size: 5em;
  text-align: center;
}

.sub-title {
  font-size: 2.5em;
  text-align: center;
}

.home-instructions {
  font-size: 2em;
  margin-right: 1rem;
  margin-bottom: 1.75rem;
  float: left;
}

.department {
  color: #888888;
}
</style>
