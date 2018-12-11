import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    professors: [
      {name: 'Denise Simmons', code: 'denise-simmons', department: 'ECON', id: 1, courses: [], reviews: []},
      {name: 'Johnny Patterson', code: 'johnny-patterson', department: 'ENGL', id: 2, courses: [], reviews: []},
      {name: 'Ronald Turner', code: 'ronald-turner', department: 'ENGL', id: 3, courses: [], reviews: []},
      {name: 'Willie Williams', code: 'willie-williams', department: 'BIO', id: 4, courses: [], reviews: []},
      {name: 'Todd Young', code: 'todd-young', department: 'IT', id: 5, courses: [], reviews: []},
      {name: 'Wanda Diaz', code: 'wanda-diaz', department: 'IT', id: 6, courses: [], reviews: []},
      {name: 'Russell Gonzalez', code: 'russell-gonzalez', department: 'HIST', id: 7, courses: [], reviews: []},
      {name: 'Judith Rivera', code: 'judith-rivera', department: 'CS', id: 8, courses: [], reviews: []},
      {name: 'Norma Howard', code: 'norma-howard', department: 'IT', id: 9, courses: [], reviews: []},
      {name: 'Paul Sanchez', code: 'paul-sanchez', department: 'CS', id: 10, courses: [], reviews: []},
      {name: 'Stephanie Scott', code: 'stephanie-scott', department: 'IT', id: 11, courses: [], reviews: []},
      {name: 'Jane Hall', code: 'jane-hall', department: 'HUM', id: 12, courses: [], reviews: []},
      {name: 'Fred Coleman', code: 'fred-coleman', department: 'PHYS', id: 13, courses: [], reviews: []},
      {name: 'Carolyn Evans', code: 'carolyn-evans', department: 'BIO', id: 14, courses: [], reviews: []},
      {name: 'Amanda Jackson', code: 'amanda-jackson', department: 'BIO', id: 15, courses: [], reviews: []},
      {name: 'Donna Clark', code: 'donna-clark', department: 'BIO', id: 16, courses: [], reviews: []},
      {name: 'Paula James', code: 'paula-james', department: 'ENGL', id: 17, courses: [], reviews: []},
      {name: 'Ashley Russell', code: 'ashley-russell', department: 'STAT', id: 18, courses: [], reviews: []},
      {name: 'Wayne Sanders', code: 'wayne-sanders', department: 'IT', id: 19, courses: [], reviews: []},
      {name: 'Debra Torres', code: 'debra-torres', department: 'HIST', id: 20, courses: [], reviews: []},
      {name: 'George Miller', code: 'george-miller', department: 'CS', id: 21, courses: [], reviews: []},
      {name: 'Barbara Johnson', code: 'barbara-johnson', department: 'PHYS', id: 22, courses: [], reviews: []},
      {name: 'Donald Peterson', code: 'donald-peterson', department: 'IT', id: 23, courses: [], reviews: []},
      {name: 'Kathleen Morgan', code: 'kathleen-morgan', department: 'HUM', id: 24, courses: [], reviews: []},
      {name: 'Jerry Baker', code: 'jerry-baker', department: 'ENGL', id: 25, courses: [], reviews: []},
      {name: 'Jeremy Hill', code: 'jeremy-hill', department: 'STAT', id: 26, courses: [], reviews: []},
      {name: 'Sean Collins', code: 'sean-collins', department: 'ECON', id: 27, courses: [], reviews: []},
      {name: 'Joan Mitchell', code: 'joan-mitchell', department: 'CS', id: 28, courses: [], reviews: []},
      {name: 'Lawrence Washington', code: 'lawrence-washington', department: 'IT', id: 29, courses: [], reviews: []},
      {name: 'Kenneth Thomas', code: 'kenneth-thomas', department: 'ENGL', id: 30, courses: [], reviews: []},
      {name: 'Kathy Ross', code: 'kathy-ross', department: 'CS', id: 31, courses: [], reviews: []},
      {name: 'Keith Powell', code: 'keith-powell', department: 'CS', id: 32, courses: [], reviews: []},
      {name: 'Helen Smith', code: 'helen-smith', department: 'IT', id: 33, courses: [], reviews: []},
      {name: 'Jacqueline Roberts', code: 'jacqueline-roberts', department: 'CS', id: 34, courses: [], reviews: []},
      {name: 'Lori Brown', code: 'lori-brown', department: 'CS', id: 35, courses: [], reviews: []},
      {name: 'Christine Lopez', code: 'christine-lopez', department: 'ECON', id: 36, courses: [], reviews: []},
      {name: 'Victor Long', code: 'victor-long', department: 'CS', id: 37, courses: [], reviews: []},
      {name: 'Lillian Richardson', code: 'lillian-richardson', department: 'IT', id: 38, courses: [], reviews: []},
      {name: 'Angela Foster', code: 'angela-foster', department: 'HIST', id: 39, courses: [], reviews: []},
      {name: 'Janet Alexander', code: 'janet-alexander', department: 'BIO', id: 40, courses: [], reviews: []},
      {name: 'Annie Anderson', code: 'annie-anderson', department: 'IT', id: 41, courses: [], reviews: []},
      {name: 'Frank Davis', code: 'frank-davis', department: 'HIST', id: 42, courses: [], reviews: []},
      {name: 'Carol Jones', code: 'carol-jones', department: 'GEOL', id: 43, courses: [], reviews: []},
      {name: 'Alan Griffin', code: 'alan-griffin', department: 'BIO', id: 44, courses: [], reviews: []},
      {name: 'Lisa Nelson', code: 'lisa-nelson', department: 'IT', id: 45, courses: [], reviews: []},
      {name: 'Nancy Hernandez', code: 'nancy-hernandez', department: 'GEOL', id: 46, courses: [], reviews: []},
      {name: 'Brenda Parker', code: 'brenda-parker', department: 'ECON', id: 47, courses: [], reviews: []},
      {name: 'Beverly Walker', code: 'beverly-walker', department: 'ECON', id: 48, courses: [], reviews: []},
      {name: 'Eric Butler', code: 'eric-butler', department: 'IT', id: 49, courses: [], reviews: []},
      {name: 'Andrea Martinez', code: 'andrea-martinez', department: 'CS', id: 50, courses: [], reviews: []},
      {name: 'Craig Carter', code: 'craig-carter', department: 'ECON', id: 51, courses: [], reviews: []},
      {name: 'Kimberly Stewart', code: 'kimberly-stewart', department: 'ECON', id: 52, courses: [], reviews: []},
      {name: 'Clarence Henderson', code: 'clarence-henderson', department: 'PHYS', id: 53, courses: [], reviews: []},
      {name: 'Douglas Flores', code: 'douglas-flores', department: 'GEOL', id: 54, courses: [], reviews: []},
      {name: 'Steve Ramirez', code: 'steve-ramirez', department: 'CS', id: 55, courses: [], reviews: []},
      {name: 'Timothy Wood', code: 'timothy-wood', department: 'BIO', id: 56, courses: [], reviews: []},
      {name: 'Tammy Barnes', code: 'tammy-barnes', department: 'HUM', id: 57, courses: [], reviews: []},
      {name: 'Dennis Perez', code: 'dennis-perez', department: 'PHYS', id: 58, courses: [], reviews: []},
      {name: 'Julia Reed', code: 'julia-reed', department: 'GEOL', id: 59, courses: [], reviews: []},
      {name: 'Heather Gray', code: 'heather-gray', department: 'PHYS', id: 60, courses: [], reviews: []},
      {name: 'Jennifer Bryant', code: 'jennifer-bryant', department: 'CS', id: 61, courses: [], reviews: []},
      {name: 'Arthur Lewis', code: 'arthur-lewis', department: 'HIST', id: 62, courses: [], reviews: []},
      {name: 'Matthew Harris', code: 'matthew-harris', department: 'ECON', id: 63, courses: [], reviews: []},
      {name: 'Mary Wilson', code: 'mary-wilson', department: 'IT', id: 64, courses: [], reviews: []},
      {name: 'Diana Bell', code: 'diana-bell', department: 'HUM', id: 65, courses: [], reviews: []},
      {name: 'Stephen King', code: 'stephen-king', department: 'PHYS', id: 66, courses: [], reviews: []},
      {name: 'Kathryn Cooper', code: 'kathryn-cooper', department: 'ECON', id: 67, courses: [], reviews: []},
      {name: 'Gregory Adams', code: 'gregory-adams', department: 'GEOL', id: 68, courses: [], reviews: []},
      {name: 'Billy Perry', code: 'billy-perry', department: 'HIST', id: 69, courses: [], reviews: []},
      {name: 'Marilyn Thompson', code: 'marilyn-thompson', department: 'ENGL', id: 70, courses: [], reviews: []},
      {name: 'Margaret Murphy', code: 'margaret-murphy', department: 'GEOL', id: 71, courses: [], reviews: []},
      {name: 'Gerald Moore', code: 'gerald-moore', department: 'IT', id: 72, courses: [], reviews: []},
      {name: 'Susan White', code: 'susan-white', department: 'STAT', id: 73, courses: [], reviews: []},
      {name: 'Christopher Green', code: 'christopher-green', department: 'GEOL', id: 74, courses: [], reviews: []},
      {name: 'Elizabeth Rodriguez', code: 'elizabeth-rodriguez', department: 'PHYS', id: 75, courses: [], reviews: []},
      {name: 'Jean Jenkins', code: 'jean-jenkins', department: 'IT', id: 76, courses: [], reviews: []},
      {name: 'David Rogers', code: 'david-rogers', department: 'STAT', id: 77, courses: [], reviews: []},
      {name: 'Ruby Morris', code: 'ruby-morris', department: 'ENGL', id: 78, courses: [], reviews: []},
      {name: 'Michelle Bennett', code: 'michelle-bennett', department: 'HUM', id: 79, courses: [], reviews: []},
      {name: 'Jessica Cook', code: 'jessica-cook', department: 'BIO', id: 80, courses: [], reviews: []},
      {name: 'Irene Cox', code: 'irene-cox', department: 'BIO', id: 81, courses: [], reviews: []},
      {name: 'Nicole Price', code: 'nicole-price', department: 'CS', id: 82, courses: [], reviews: []},
      {name: 'Jeffrey Watson', code: 'jeffrey-watson', department: 'ECON', id: 83, courses: [], reviews: []},
      {name: 'Anthony Allen', code: 'anthony-allen', department: 'GEOL', id: 84, courses: [], reviews: []},
      {name: 'Emily Ward', code: 'emily-ward', department: 'HUM', id: 85, courses: [], reviews: []},
      {name: 'Chris Bailey', code: 'chris-bailey', department: 'ENGL', id: 86, courses: [], reviews: []},
      {name: 'Joyce Wright', code: 'joyce-wright', department: 'HIST', id: 87, courses: [], reviews: []},
      {name: 'Shawn Campbell', code: 'shawn-campbell', department: 'GEOL', id: 88, courses: [], reviews: []},
      {name: 'Louis Brooks', code: 'louis-brooks', department: 'BIO', id: 89, courses: [], reviews: []},
      {name: 'Laura Lee', code: 'laura-lee', department: 'HIST', id: 90, courses: [], reviews: []},
      {name: 'Phyllis Edwards', code: 'phyllis-edwards', department: 'BIO', id: 91, courses: [], reviews: []},
      {name: 'Martin Hughes', code: 'martin-hughes', department: 'HUM', id: 92, courses: [], reviews: []},
      {name: 'Alice Martin', code: 'alice-martin', department: 'STAT', id: 93, courses: [], reviews: []},
      {name: 'Ernest Taylor', code: 'ernest-taylor', department: 'ECON', id: 94, courses: [], reviews: []},
      {name: 'Harry Robinson', code: 'harry-robinson', department: 'PHYS', id: 95, courses: [], reviews: []},
      {name: 'Nicholas Garcia', code: 'nicholas-garcia', department: 'ENGL', id: 96, courses: [], reviews: []},
      {name: 'Eugene Gonzales', code: 'eugene-gonzales', department: 'IT', id: 97, courses: [], reviews: []},
      {name: 'Frances Kelly', code: 'frances-kelly', department: 'IT', id: 98, courses: [], reviews: []},
      {name: 'Evelyn Phillips', code: 'evelyn-phillips', department: 'HUM', id: 99, courses: [], reviews: []},
    ],
    types: [
      'homework',
      'exams',
      'reading',
      'projects',
    ],
  },
  getters: {
    professors(state) {return state.professors;},
    types(state) {return state.types;},
    professor: (state) => (code) => {
      return state.professors.find(professor => professor.code === code)
    },
    // eslint-disable-next-line
    departmentName: (state) => (department) => {
      switch(department) {
        case "CS":   return "Computer Science";
        case "HIST": return "History";
        case "ENGL": return "English";
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
  },
  mutations: {
    addCourse(state, input) {
      for (var i = 0; i < state.professors.length; i++) {
        if (state.professors[i].code == input.code) {
          state.professors[i].courses.push(input.course);
        }
      }
    },
    addReview(state, input) {
      for (var i = 0; i < state.professors.length; i++) {
        if (state.professors[i].code == input.code) {
          state.professors[i].reviews.push(input.review);
        }
      }
    },
  },
  actions: {

  }
})
