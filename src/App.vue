<template>
  <div id="app">
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
.cus-keyboard {
  padding: 50px 0;
  margin: 0 auto;
  width: 280px;
}
</style>
