<template>
  <div class="container">
    <div class="cadr">
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default="{ iter, idx }">
        <span style="color: yellowgreen"
          >Item: {{ iter }} and index {{ idx }}</span
        >
      </template>
    </app-list>
    <app-block>
      <p>This is an important text</p>
      <template #header>
        <h3>This is the headline</h3>
      </template>
      <template v-slot:footer>
        <hr />
        <small>This is footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from "./components/AppBlock.vue";
import AppList from "./components/AppList.vue";
export default {
  components: { AppBlock, AppList },
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
