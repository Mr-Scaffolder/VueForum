<template>
    <div>
        <v-hover>
            <v-card slot-scope="{ hover }"  :class="`single-recommendation-card elevation-${hover ? 12 : 2} mt-3`" @click="redirect">
                <v-card-title class="single-recommendation-card-title">


                    <h3 class="single-recommendation-card-title-header">Is Building A Monopoly A Legal Thing ?</h3>
                    

                </v-card-title>
            </v-card>
        </v-hover>

    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods:{
            redirect(){
                //Redirect to questions  page
               
            }
        }
    }
</script>

<style>
.single-recommendation-card{
    cursor: pointer;
}
.single-recommendation-card:hover{
    text-decoration: underline;
    
}
</style>