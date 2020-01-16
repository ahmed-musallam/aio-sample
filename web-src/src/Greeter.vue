<template >
  <div>
    <h2>Enter your name below and we'll retrieve a suitable greeting!</h2> 
    <form class="coral-Form coral-Form--vertical" style="max-width:300px;">
      <Textfield class="text-field" label="Name" v-model="name"></Textfield>
      <button is="coral-button" @click="greet" variant="action" type="button">Greet</button>
    </form>
    <coral-wait v-if="loading" size="S"></coral-wait>
    <h4 v-else>{{greeting}}<h4>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Textfield from "./TextField.vue"
import ActionConfig from "./config.json";
import axios from 'axios';

export default Vue.extend({
  data() {
    return {
      greeting: "",
      name: "",
      loading: false
    };
  },
  components: {
    Textfield
  },
  methods: {
    greet () {
      this.loading = true;
      axios.get(ActionConfig.greet, {
        params: {
          name: this.name
        }
      })
      .then(response => {
        this.greeting = response.data.message
      })
      .catch( error => {
        console.log(error);
        this.greeting = error;
      })
      .finally(() =>  {
        this.loading = false;
      });
    }
  }
});
</script>
<style lang="scss" scoped>

</style>