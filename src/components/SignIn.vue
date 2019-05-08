<template>
    <div>

        <v-dialog width="400">
            <v-btn slot="activator" class="sign-in-button pink accent-3 white--text" flat>Sign In </v-btn>
            <v-card class="sign-in-card">
                <div class="sign-in-card-header white--text pa-3 text-sm-center display-1">
                    Sign In
                </div>
                <div class="sign-in-card-body pa-3">
                    <v-form class="sign-in-card-body-form" ref="form" lazy-validation>


                        <v-text-field class="sign-in-card-body-form-email" label="Your Email..."
                            :rules="[rules.required,rules.email]" v-model="email"></v-text-field>
                        <v-text-field class="sign-in-card-body-form-password" label="Your Password..."
                            :rules="[rules.required]" :type="'password'" v-mode="password"></v-text-field>
                        <v-layout row wrap class="mt-3">
                            <v-spacer></v-spacer>
                            <v-flex sm12>
                                <v-btn class="sign-in-card-body-form-button pink accent-3 white--text" @click="signIn">
                                    Sign In
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
        mounted() {

        },
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
                email: '',
                password: ''



            }
        },
        methods: {
            signIn() {
                if (this.$refs.form.validate()) {
                    //  axios.post('/SIGN-up', {
                    //   
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
    .sign-in-card-header {
        background: linear-gradient(to right, #0b3360, #1565c0);
    }

</style>
