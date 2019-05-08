<template>
  <v-app>
    <div v-if="is_authenticated">
      <v-toolbar app class="app_toolbar white--text">
        <v-toolbar-title class="headline text-uppercase">
          Vueforum
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-autocomplete v-model="model" :items="questions" persistent-hint class="app-searchbar  mt-3" append-icon="false" placeholder="Search For All Threads...." @change="search"></v-autocomplete>
        <v-btn small fab class="pink accent-3 white--text">
            <v-icon>
              power_settings_new 
            </v-icon>
        </v-btn>
      </v-toolbar>
    </div>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    components: {},

    data() {
      return {
        routes_with_no_navbars: ["welcome"],
        model: null,
        questions: [
          'Is Building A Monopoly A Good Thing ?',
          'Is Partying with friends a bad thing  ?',
          'Which Racer has won the formula 1 the most number of times ?',
          'Is Civil Enginnering the most toughest field of engineering ?',
          'Whats the differecne between Devops and Software Developer ?'
        ]

      };
    },
    methods:{
      search(){
        // make an api call to search and then return items to list
      }
    },
    computed: {
      is_authenticated() {
        return this.$store.getters.is_authenticated;
      },
    }
  };
</script>
<style>
  .app_toolbar {
    background: linear-gradient(to right, #0b3360, #1565c0) !important;
  }

  .app-searchbar{
    width: 0px !important;
    
  }

  input{
    background: white !important;
    border-radius: 1000px;
    padding: 20px !important; 
    
  }
</style>