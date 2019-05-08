<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex lg8>
                    <new-thread @created="updateThreads"></new-thread>
                    <div class="home-single-threads mt-3">
                        <single-thread>

                        </single-thread>
                    </div>

                </v-flex>
                <v-flex lg2 offset-lg2>
                    <span class="display-3">

                        EMPTY SPACE
                    </span>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import NewThread from './NewThread.vue'
    import SingleThread from './SingleThread';
    export default {
        components: {
            'new-thread': NewThread,
            'single-thread': SingleThread
        },
        mounted() {
            this.getThreads();
        },
        data() {
            return {
                threads: []
            }
        },
        methods: {
            getThreads() {
                axios.get('/threads')
                    .then(response => {
                        this.threads = response.data;
                    });
            },
            updateThreads(data){
                this.threads.push(data.thread)
            }
        }
    }
</script>

<style>

</style>