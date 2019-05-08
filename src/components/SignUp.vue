<template>
    <div>

        <v-dialog width="400">
            <v-btn slot="activator" class="sign-up-button pink accent-3 white--text" flat>Sign Up </v-btn>
            <v-card class="sign-up-card">
                <div class="sign-up-card-header white--text pa-3 text-sm-center display-1">
                    Sign Up
                </div>
                <div class="sign-up-card-body pa-3">
                    <v-form class="sign-up-card-body-form" ref="form"  lazy-validation>

                        <v-text-field class="sign-up-card-body-form-email" label="Your Username..."
                            :rules="[rules.required]" v-model="username"></v-text-field>
                        <v-text-field class="sign-up-card-body-form-email" label="Your Email..."
                            :rules="[rules.required,rules.email]" v-model="email"></v-text-field>
                        <v-text-field class="sign-up-card-body-form-password" label="Your Password..."
                            :rules="[rules.required]" :type="'password'" v-model="password"></v-text-field>
                        <v-layout row wrap class="mt-3">
                            <v-spacer></v-spacer>
                            <v-flex sm12>
                                <v-btn class="sign-up-card-body-form-button pink accent-3 white--text"
                                    @click="validate">
                                    Sign Up
                                </v-btn>
                            </v-flex>
                        </v-layout>



                    </v-form>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rules: {
                    required: value => !!value || 'Please Fill Out This Field.',
                    email: value => {
                        const pattern =
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'This is not an  Email!!!!'
                    }
                },
                username: '',
                email: '',
                password: '',



            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    // this.snackbar = true
                    // axios.post('/sign-up', {
                    //     username: this.username,
                    //     email: this.email,
                    //     password: this.password
                    // }).then(response => {
                    //     this.$store.dispatch('saveAuthToken', response.data.token);
                    //     axios.defaults.headers.common['Authorization'] = token
                    // });
                }
            },
        }
    }
</script>
<style>
    .sign-up-card-header {
        background: linear-gradient(to right, #0b3360, #1565c0);
    }
</style>