<template>
    <div>
        <v-hover>
            <v-card slot-scope="{ hover }" :class="`single-user-recommendation-card elevation-${hover ? 12 : 2} mt-3`"
                @click="redirect">
                <v-card-text>
                    <v-avatar class="single-user-recommendation-card-text-avatar" size="36">
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                    <span class="single-user-recommendation-card-text-username title ml-2">Jane Doe</span>
                </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            redirect() {
              this.$router.push('/profile/jane-doe');
            }
        }
    }
</script>

<style>
    .single-user-recommendation-card {
        cursor: pointer;
    }
    .single-user-recommendation-card:hover{
        text-decoration: underline;
    }
  

    
</style>