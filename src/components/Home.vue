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
          :items="this.$store.getters.professors"
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
  font-family: work-sans-regular, sans-serif;
}

.main-title {
  font-size: 5em;
  text-align: center;
  font-family: work-sans-thin, sans-serif;
}

.sub-title {
  font-size: 2.5em;
  text-align: center;
  font-family: work-sans-thin, sans-serif;
}

.home-instructions {
  font-size: 2em;
  margin-right: 1rem;
  margin-bottom: 1.75rem;
  float: left;
  font-family: work-sans-thin, sans-serif;
}

.department {
  color: #888888;
}
</style>
