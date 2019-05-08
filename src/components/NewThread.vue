<template>
    <div>
        <v-dialog width="700px" scrollable persistent v-model="dialog">
            <v-btn slot="activator" class="new-thread-button pink accent-3 white--text" large round>
                New
                Thread
            </v-btn>
            <v-card class="new-thread-card">
                <v-card-title class="new-thread-card-title headline white--text">New Thread.....</v-card-title>
                <v-card-text class="new-thread-card-body">

                    <v-form class="new-thread-card-body-form" ref="form" lazy-validation>

                        <v-text-field class="new-thread-card-body-form-title" label="So Whats Your Thread ABout ....."
                            :rules="[rules.required]" v-model="title"></v-text-field>


                    </v-form>

                    <vue-editor v-model="content" class="mt-4"></vue-editor>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="pink accent-3 white--text" @click="createThread">Create</v-btn>
                    <v-btn color="pink accent-3 white--text" @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar.show" :bottom="snackbar.y === 'bottom'" :left="snackbar.x === 'left'"
            :right="snackbar.x === 'right'" :timeout="snackbar.timeout" :vertical="snackbar.mode === 'vertical'"
            class="white--text">
            Your Thread has been created...!

        </v-snackbar>
    </div>
</template>

<script>
    import {
        VueEditor
    } from "vue2-editor";
    export default {
        components: {
            VueEditor
        },
        mounted() {

        },
        data() {
            return {
                content: '',
                title:'',
                dialog: false,
                snackbar: {
                    show: false,
                    timeout: 50000000,
                    y: "bottom",
                    x: "right",
                    mode: 'vertical'
                },
                rules: {
                    required: value => !!value || 'Please Fill Out This Field.',
                }
            };
        },
        methods: {
            createThread() {
                if (this.$refs.form.validate()) {
                    axios
                        .post("/thread/", {
                            title: this.title,
                            content: this.content,
                        })
                        .then(response => {
                            // this.$emit('created',{
                            //     thread:response.data
                            // })
                            // this.dialog = close;
                            // this.snackbar.show = true;
                        });
                
            }

        }

        }


    };
</script>

<style>
    .new-thread-card-title {
        background: linear-gradient(to right, #0b3360, #1565c0);
    }

    .codex-editor--narrow .codex-editor__redactor {
        padding-bottom: 40px !important;
    }


    .new-thread-card-body-instruction-test {}

    .v-snack__content {
        background: linear-gradient(to right, #0b3360, #1565c0)
    }

    .v-snack--vertical .v-snack__content {
        height: 72px !important;
    }
</style>