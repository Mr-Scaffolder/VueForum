<template>
    <div>
        <v-card class="single-thread-card mb-5">
            <v-card-title class="single-thread-card-title white--text">
                <v-layout row wrap align-center>
                    <v-flex class="single-thread-card-title-user-details">
                        <v-layout column align-center>
                            <v-flex>
                                <v-avatar class="single-thread-card-title-user-details-avatar">
                                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                                </v-avatar>
                            </v-flex>
                            <v-flex>
                                <span class="single-thread-card-title-user-details-name" @click="redirectProfile">
                                    John Doe
                                </span>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex class="single-thread-card-title-header">
                        <h3 class="headline" @click="redirect">
                            Is Building A Monopoly A Legal Thing ?
                        </h3>
                    </v-flex>
                    <v-spacer>

                    </v-spacer>
                    <v-flex class="single-thread-card-title-created-at text-lg-right">
                        2 days ago
                    </v-flex>
                </v-layout>

            </v-card-title>

            <v-card-text class="single-thread-card-text">
                <div class="single-thread-card-text-thread" v-html="dummy">

                </div>



            </v-card-text>
            <v-card-actions>
                <v-btn flat class="pink--text">25 replies</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat class="pink--text" @click="redirectReply()">Reply</v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    export default {
        prop: ['thread'],
        data() {
            return {
                dummy: '<h1>Yo This is Dummy Text</h1> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum voluptate dolore enim nihil officia porro, illo voluptatem similique doloremque corrupti voluptates quasi accusamus fuga alias magni excepturi vitae hic.'

            }
        },
        methods: {
            redirect() {
                // this.$router.to('/thread'+this.thread.slug)
                // dummy text
                this.$router.push('/thread/is-building-a-monopoly-a-good-thing');
            },
            redirectProfile() {

                // dummy route
                this.$router.push('/profile/jane-doe');
            },
            redirectReply() {
                // dummy route
                this.$router.push('/thread/is-building-a-monopoly-a-good-thing');
            }
        }
    }
</script>

<style scoped>
    .single-thread-card-title {
        background: linear-gradient(to bottom, #0b3360, #1565c0);

    }

    .headline,
    .single-thread-card-title-user-details-name {
        cursor: pointer;
    }

    .headline:hover,
    .single-thread-card-title-user-details-name:hover {
        text-decoration: underline;
    }

    .ce-inline-toolbar .ce-inline-toolbar--showed {
        z-index: 1000 !important;
    }
</style>