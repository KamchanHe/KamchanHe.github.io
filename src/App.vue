<template>
  <div @dblclick="() => {return false;}" id="app">
    <div class="cus-keyboard">
      <Keyboard :length="length" :defaultVal="defaultVal" :text.sync="value"></Keyboard>
    </div>
  </div>
</template>

<script>
import Keyboard from "@/components/keyboard/index.vue";
export default {
  name: "App",
  components: {
    Keyboard,
  },
  data() {
    return {
      value: "",
      defaultVal: "MO",
      length: 6,
    };
  },
};
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: scroll;
}
.cus-keyboard {
  width: 100%;
  padding: 50px 0;
  margin: 0 auto;
  width: 280px;
}
</style>
