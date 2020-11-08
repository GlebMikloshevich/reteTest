<template lang="pug">
#app
  Rete
  Viewer
  button(
    class="help-button",
    v-tooltip.right="'Hold a Ctrl - hide the editor<br> Mouse - control a viewer'"
  ) ?
</template>

<script>
import Rete from "./components/Rete";
import Viewer from "./components/Viewer";
import Store from "./store.js";

export default {
  name: "App",
  provide: {
    store: new Store()
  },
  components: {
    Rete,
    Viewer
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
}

.help-button {
  position: absolute;
  left: 5px;
  bottom: 5px;
  z-index: 6;
}
</style>

<style>
.tooltip {
  background: rgba(0,0,0,0.7);
  padding: 8px;
  border-radius: 6px;
  color: white;
  z-index: 10000;
}
</style>