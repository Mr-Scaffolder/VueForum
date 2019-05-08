<template>
  <div>
    <v-container>
      <v-layout wrap row>
        <v-flex lg8>
          <v-card class="show-thread-card mb-5">
            <v-card-title class="show-thread-card-title white--text">
              <v-layout row wrap align-center>
                <v-flex class="show-thread-card-title-user-details">
                  <v-layout column align-center>
                    <v-flex>
                      <v-avatar class="show-thread-card-title-user-details-avatar">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                      </v-avatar>
                    </v-flex>
                    <v-flex>
                      <span class="show-thread-card-title-user-details-name" @click="redirectProfile">John Doe</span>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex class="show-thread-card-title-header">
                  <h3 class="headline">Is Building A Monopoly A Legal Thing ?</h3>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="show-thread-card-title-created-at text-lg-right">2 days ago</v-flex>
              </v-layout>
            </v-card-title>

            <v-card-text class="show-thread-card-text">
              <div class="show-thread-card-text-thread" v-html="dummy"></div>
            </v-card-text>
            <v-card-actions>
              <v-btn class="pink accent-3 white--text" fab small>
                <v-icon>thumb_up</v-icon>
              </v-btn>
              <v-btn class="pink accent-3 white--text" fab small>
                <v-icon>thumb_down</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="pink accent-3 white--text" fab small>
                <v-icon>arrow_downward</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>

          <reply-form :thread="thread" @created="updateReplies">

          </reply-form>

          <single-thread-reply>

          </single-thread-reply>
          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>

          <single-thread-reply>

          </single-thread-reply>


        </v-flex>
        <v-flex lg3 offset-lg1>
          <span class="display-1">
            RECOMMENDATIONS
            <!-- offset this section!! -->
          </span>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
          <single-recommendation></single-recommendation>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import ReplyForm from "./ReplyForm.vue";
  import SingleThreadReply from './SingleThreadReply.vue';
  import SingleRecommendation from './SingleRecommendation.vue';
  export default {
    components: {
      "reply-form": ReplyForm,
      'single-thread-reply': SingleThreadReply,
      'SingleRecommendation': SingleRecommendation
    },
    mounted() {
      // axios.get('/thread/'+this.$route.params.slug)
      //       .then(response=>{
      //           this.thread = response.data;
      //       });
    },
    data() {
      return {
        replies:[],
        thread: '',
        dummy: "Lorem ipsum dolor sit amet , consectetur adipiscing elit. Proin blandit nisi nibh, vel tincidunt lectus placerat luctus. Fusce non arcu aliquam, gravida justo at, ultrices turpis. Pellentesque in ante dolor. Nullam congue rhoncus justo ac euismod. Sed at rutrum orci. Quisque sollicitudin commodo diam, in ornare justo tincidunt consequat. Nam ac lacus risus. Nullam sodales turpis metus, a pellentesque eros fringilla a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus accumsan nisi, quis dictum ligula molestie a. Quisque volutpat est quis ligula eleifend, non sollicitudin lorem accumsan. Curabitur nec vestibulum urna. Integer a ipsum arcu. Donec placerat dolor et interdum tempor. Aliquam vel justo congue, blandit ipsum at, porttitor diam."
      };
    },
    methods: {
      redirectProfile() {
        // dummy rooute
        this.$router.push('/profile/jane-doe');
      },
      updateReplies(data){
        this.replies.push(data.reply);
      }
    }
  };
</script>

<style>
  .show-thread-card-title {
    background: linear-gradient(to bottom, #0b3360, #1565c0);
  }

  .show-thread-card-title-user-details-name {
    cursor: pointer;
  }

  .show-thread-card-title-user-details-name:hover {
    text-decoration: underline;
  }

  .ce-inline-toolbar .ce-inline-toolbar--showed {
    z-index: 1000 !important;
  }
</style>