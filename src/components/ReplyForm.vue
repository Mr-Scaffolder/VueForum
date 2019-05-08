<template>
    <div>
        <v-btn class="answer-form-answer-button pink accent-3 white--text" @click="showEditor=true"
            v-show="!showEditor">REPLY</v-btn>
        <div class="answer-form-editor" v-show="showEditor">
            <vue-editor v-model="content" class></vue-editor>
            <v-layout>
                <v-spacer>
                    
                </v-spacer>
                <v-btn class="answer-form-answer-button pink accent-3 white--text" @click="reply">REPLY</v-btn>
                <v-btn class="answer-form-answer-button pink accent-3 white--text" @click="showEditor=false">CANCEL
                </v-btn>
            </v-layout>

        </div>
    </div>
</template>

<script>
    import {
        VueEditor
    } from "vue2-editor";
    export default {
        props: ['thread'],
        components: {
            VueEditor
        },
        data() {
            return {
                content: "",
                showEditor: false
            };
        },
        methods: {
            reply() {
                // Use the thread in the props
                // axios.post('/thread/' + thread.slug + '/reply')
                //     .then(response => {
                //         // Emit that the answer has been created to the parent layout 
                //         this.$emit('created', {
                //             reply: response.data
                //         })
                //     });
            }
        }
    };
</script>

<style>
</style>