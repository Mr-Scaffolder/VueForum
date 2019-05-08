<template>
  <div class="welcome white--text">
 
      <div class="welcome-title display-3">
        VUEFORUM
      </div>
      <div class="welcome-byline">
        A vue js forum Scaffolding
      </div>
      <div class="welcome-auth-buttons mt-4">
        <sign-in></sign-in>
        <sign-up></sign-up>
      </div>


  </div>
</template>

<script>
  import SignIn from './SignIn.vue';
  import SignUp from './SignUp.vue';
  export default {
    components: {
      'sign-in': SignIn,
      'sign-up': SignUp

    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  .welcome {
    background: linear-gradient(to bottom, #0b3360, #1565c0);
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .welcome-auth-buttons{
    display: flex;

  }
  
</style>