<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        ["", "primary", "danger"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  min-width: 100px;
  height: 30px;
  border-radius: 10px;
  background-color: #2756a8ad;
  border: transparent;
  color: white;
  cursor: pointer;
}

.danger {
  color: rgb(219, 29, 29);
  border: 1px solid red;
}

.primary {
  color: orange;
  border: 1px solid orange;
}

.btn:hover {
  border: transparent;
  background-color: rgb(0, 119, 128);
}
</style>
