<template>
  <div class="keyboard">
    <!-- 输入框显示区 -->
    <div class="input">
      <div
        @click.stop="show"
        v-for="(item, index) in length"
        :key="index"
        :class="['box-item', isFocus && currentInput === index ? 'active' : '', text[index] ? 'hight-light' : '']"
      >
        <span>{{ text[index] }}</span>
      </div>
    </div>
    <!-- 点击键盘以外的区域隐藏键盘 -->
    <div @click.stop="hide" v-if="showKeyboard" class="bg"></div>
    <!-- 键盘区 -->
    <div @dbclick="()=>{return false}" ref="cusBoard" v-if="showKeyboard" class="cus-board">
      <div v-for="(line, index) in keys" :key="'line' + index" class="letter-line">
        <!-- 收起键盘 -->
        <div v-if="index === keys.length - 1" @click.stop="hide" class="action">
          <img :src="require('@/assets/keyboard.png')" />
        </div>
        <div @touchstart.stop="touchStart" @touchend.stop="touchEnd" v-for="key in line" :key="key" :data-text="key" class="item">{{ key }}</div>
        <!-- 删除 -->
        <div v-if="index === keys.length - 1" @click.stop="handleDel" class="action">
          <img :src="require('@/assets/delete.png')" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Keyboard",
  props: {
    // 文本数据源
    text: {
      type: String,
      default: "",
    },
    // 固定开头
    defaultVal: {
      type: String,
      default: "",
    },
    // 输入框数量
    length: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      keys: [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"],
      ],
      showKeyboard: false, // 控制键盘显隐
      isFocus: false, // 是否聚焦
    };
  },
  computed: {
    /**
     * 获取当前输入框下标
     * @param {void}
     * @return {void}
     */
    currentInput: function() {
      // 返回当前文本的长度
      const length = this.text.length || 0;
      return length;
    },
  },
  mounted() {
    // 更新固定开头值到文本数据源上
    this.$emit("update:text", this.defaultVal);
  },
  methods: {
    /**
     * 显示键盘
     * @param {void}
     * @return {void}
     */
    show() {
      this.isFocus = true;
      this.showKeyboard = true;
      // 需定时器执行 否则会找不到dom
      setTimeout(() => {
        // 升起键盘
        this.$refs.cusBoard.style.transform = `translateY(0)`;
      }, 20);
    },
    /**
     * 隐藏键盘
     * @param {void}
     * @return {void}
     */
    hide() {
      // 失去焦点
      this.isFocus = false;
      // 降下键盘
      this.$refs.cusBoard.style.transform = `translateY(100%)`;
      // 需定时器执行 否则会没有动画过度
      setTimeout(() => {
        this.showKeyboard = false;
      }, 500);
    },
    /**
     * 按下
     * @param {object} el 点击事件
     * @return {void}
     */
    touchStart(el) {
      // 点击目标
      const { target } = el;

      let text = this.text;
      // 文本达到上限 不做处理 返回
      if (text.length >= this.length) return;
      // 拼接点击的 值
      const content = target.innerText;
      text += content;
      // 更新文本数据源
      this.$emit("update:text", text);

      // 背景色改变
      target.style.background = "rgb(228, 229, 228)";
      // 添加激活className 显示反馈
      target.classList.add("active");
    },
    touchEnd(el) {
      // 点击目标
      const { target } = el;
      // 通过定时器实现过渡效果
      setTimeout(() => {
        // 背景色改变
        target.style.background = "#fff";
        // 移除className
        target.classList.remove("active");
      }, 100);
    },
    /**
     * 点击删除键
     * @param {void}
     * @return {void}
     */
    handleDel(el) {
      console.log(el)
      if (this.defaultVal && this.text.length === this.defaultVal.length && this.text.indexOf(this.defaultVal) === 0) {
        // 有默认开头 如果文本只有固定开头 没有任何输入 点击删除不做任何操作
        return;
      }
      // 从后面开始 删除一个文本
      let text = this.text;
      text = text.slice(0, text.length - 1);
      this.$emit("update:text", text);
    },
  },
};
</script>

<style lang="scss" scoped>
.keyboard {
  user-select: none;
}
.bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0);
}
.input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
.box-item {
  flex-basis: 35px;
  height: 40px;
  border: 1px solid #bfbfbf;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    position: relative;
    border-color: #348fec;
    &::after {
      position: absolute;
      content: "";
      width: 1px;
      height: 50%;
      background-color: #333333;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      animation: inputFocusLine 1s infinite;
    }
  }
  &.hight-light {
    border-color: #348fec;
  }
}
@keyframes inputFocusLine {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.cus-board {
  font-size: 15px;
  background: rgb(246, 247, 246);
  padding: 15px 5px 30px 5px;
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: all 0.5s;
  .active {
    &::after {
      position: absolute;
      top: -40px;
      left: 0;
      width: 32px;
      height: 40px;
      background-color: #ffffff;
      content: attr(data-text);
      animation: itemActive 0.5s infinite;
    }
  }
}
.item,
.action {
  width: 32px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  line-height: 40px;
  text-align: center;
  position: relative;
  img {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
}
@keyframes itemActive {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
.line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
}
.letter-line {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .item,
  .action {
    margin: 2.5px;
  }
}
</style>
