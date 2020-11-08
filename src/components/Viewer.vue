<template>
<div id="viewer" ref="viewer">
  <div class="controls" v-show="false">
    <div class="color-controls">
      <input class="mainColor" type="color" title="Main" value="#ffffff">
      <input class="wheelColor" type="color" title="Wheels" value="#c88b00">
    </div>
    <button class="doors">Open doors</button>
    <button class="light">Turn off/on lights</button>
    <input class="speed" type="range" title="Speed" min="0" max="100" value="40">
    <input class="steer" type="range" title="Steer" min="-60" max="60" value="0">
  </div>
</div>
</template>


<script>
export default {
  props: ['load'],
  inject: ['store'],
  methods: {
    async setupConfigurator(){
      const Configurator = global.THREEConfigurator.Configurator;

      const configurator = new Configurator(
         this.$refs.viewer,
        () => window.innerWidth,
        () => window.innerHeight
      );

      await configurator.init();
      configurator.animate();

      this.store.configurator.next(configurator);
    }
  },
  async mounted() {
		window.webpackPublicPath = 'https://rawgit.com/Ni55aN/three.js-configurator/master/dist/';
		let url = 'https://rawgit.com/Ni55aN/three.js-configurator/master/dist/THREEConfigurator.js';

    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', url)
    document.head.appendChild(recaptchaScript)

    await new Promise((res, rej) => {
      recaptchaScript.onload = async () => {
        await this.setupConfigurator();
        res();
      };
  });
  }
}
</script>
