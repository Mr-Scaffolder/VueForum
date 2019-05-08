<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex lg8>
                    <v-card class="profile-card">
                        <v-card-text class="profile-card-text">

                            <v-layout row wrap class="profile-card-text-user-details">
                                <v-flex lg3>
                                    <v-avatar class="profile-card-text-user-details-avatar" size="128">
                                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                    </v-avatar>

                                </v-flex>
                                <v-flex lg4>
                                    <v-layout column wrap justify-center pt-4>
                                        <v-flex>
                                            <span class="profile-card-text-user-details-username display-1">
                                                John Doe
                                            </span>

                                        </v-flex>
                                        <v-flex>
                                            <span class="profile-card-text-user-details-profession">
                                                software developer@google
                                            </span>

                                        </v-flex>
                                        <v-flex>
                                            <span class="profile-card-text-user-details-followers-count">
                                                22k followers
                                            </span>

                                        </v-flex>

                                    </v-layout>
                                </v-flex>


                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <span class="profile-card-actions-questions-count font-weight-bold mr-2">
                                52 questions
                            </span>
                            <span class="profile-card-actions-answeres-count font-weight-bold">
                                47 answers
                            </span>
                            <v-spacer>

                            </v-spacer>
                            <v-btn class="white--text pink profile-card-actions-follow-button">
                                <v-icon left>message</v-icon>

                                MESSAGE
                            </v-btn>
                            <v-btn class="white--text pink profile-card-actions-follow-button">
                                <v-icon left>add</v-icon>

                                FOLLOW
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                    <div class="single-threads mt-5">

                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                        <single-thread>

                        </single-thread>
                    </div>

                </v-flex>
                <v-flex lg3 offset-lg1>
                    <span class="display-1">
                        OTHER PEOPLE
                        <div class="profile-other-user-recommendations">
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>
                            <single-user-recommendation></single-user-recommendation>

                        </div>
                    </span>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import SingleThread from './SingleThread';
    import SingleUserRecommendation from './SingleUserRecommendation';
    export default {
        components: {
            'single-thread': SingleThread,
            'single-user-recommendation': SingleUserRecommendation
        },
        mounted() {
            // axios.get('/profile/'+this.$route.params.slug)
            //       .then(response=>{
            //           this.user = response.data;
            //       });
        },
        data(){
            return{
                user:null
            }
        }
    }
</script>

<style>

</style>