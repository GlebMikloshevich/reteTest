<template>
  <div id="rete" v-show="visible" ref="rete"></div>
</template>

<script>
import init from "../node-editor";

export default {
  inject: ["store"],
  data() {
    return {
      visible: true
    };
  },
  methods: {
    keydown(e) {
      if (e.key === "Control") this.visible = false;
    },
    keyup(e) {
      if (e.key === "Control") this.visible = true;
    }
  },
  mounted() {
    this.store.configurator.subscribe(configurator => {
      if (configurator) init(this.$refs.rete, configurator);
    });

    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
};
</script>

<style>
#rete {
  width: 100%;
  height: 100%;
}

.node .control input, .node .input-control input {
  width: 140px;
}

select, input {
  width: 100%;
  border-radius: 30px;
  background-color: white;
  padding: 2px 6px;
  border: 1px solid #999;
  font-size: 110%;
  width: 170px;
}
</style>
