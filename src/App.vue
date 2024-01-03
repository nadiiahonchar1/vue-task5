<template>
  <div class="container">
    <div class="cadr">
      <h2>Dynamic and asynchronous components</h2>
      <app-button
        :color="active === 'one' ? 'primary' : ''"
        @action="active = 'one'"
        >One</app-button
      >
      <app-button
        :color="active === 'two' ? 'primary' : ''"
        @action="active = 'two'"
        >Two</app-button
      >
    </div>
    <!-- <app-text-one v-if="active === 'one'"></app-text-one>
    <app-text-two v-else-if="active === 'two'"></app-text-two> -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./components/AppButton.vue";
import AppTextOne from "./components/AppTextOne.vue";
import AppTextTwo from "./components/AppTextTwo.vue";
export default {
  data() {
    return {
      active: "one",
    };
  },
  computed: {
    componentName() {
      // if (this.active === "one") {
      //   return "app-text-one";
      // }
      // return "app-text-two";
      return "app-text-" + this.active;
    },
  },
  components: { AppButton, AppTextOne, AppTextTwo },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: rgb(251 255 132 / 30%);
}

.container {
  margin: 0 auto;
  width: 50vw;
}

.card {
  border: 1px solid rgb(87, 87, 199);
  border-radius: 10px;
}

.card-title {
  margin-bottom: 10px;
}

.card {
  margin-bottom: 5px;
  padding: 5px 20px;
}
.centeder {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
