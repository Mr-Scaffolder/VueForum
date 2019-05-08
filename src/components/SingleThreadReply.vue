<template>
    <div>
        <v-card class="single-thread-reply-card mt-5">
            <v-card-title class="single-thread-reply-card-title">
                <v-layout row wrap class="single-thread-reply-card-title-user-details" align-center>
                    <v-flex lg1>
                        <v-avatar class="single-thread-reply-card-title-user-details-avatar">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                        </v-avatar>
                    </v-flex>
                    <v-flex lg4>
                        <span class="single-thread-reply-card-title-user-details-username font-weight-bold"
                            @click="redirectProfile">
                            John Doe
                        </span> answered on <span class="single-thread-card-title-user-details-created-at">
                            23 May , 2020
                        </span>
                    </v-flex>
                    <v-spacer></v-spacer>
                </v-layout>
            </v-card-title>
            <v-card-text>
                <div class="single-thread-reply-card-text-answer">
                    {{ answer }}
                </div>
            </v-card-text>
            <v-card-actions>
                <v-btn class="pink accent-3 white--text" fab small>
                    <v-icon>thumb_up</v-icon>
                </v-btn>
                <v-btn class="pink accent-3 white--text" fab small>
                    <v-icon>thumb_down</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, praesentium inventore! Recusandae dignissimos unde consequatur praesentium quis molestiae, officia repellat porro sequi ducimus rerum ut vitae illo minima quia ex?             </v-card-actions> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem soluta eum sapiente suscipit error quidem sunt numquam nam dignissimos alias unde labore, dicta distinctio, saepe pariatur! Eos voluptatum officia explicabo.'
            }
        },
        methods: {
            redirectProfile() {
                this.$router.push('/profile/jane-doe');
            }
        }

    }
</script>

<style>
    .single-thread-reply-card-title-user-details-username {
        cursor: pointer;
    }

    .single-thread-reply-card-title-user-details-username:hover {
        text-decoration: underline;
    }
</style>