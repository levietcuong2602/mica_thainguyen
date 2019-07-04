<template>
  <div
    class="zap-slideout"
    :class="[{'isOpen': isOpen} ]"
  >
    <div
      class="zap-slideout-opener"
      @click="toggle"
    >{{openerText}}</div>
    <ul class="zap-slideout-menu">
      <li class="zap-slideout-menu-item">
        <img
          class="zap-emoji"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/19332/zap-emoji.svg"
          alt="Zap Emoji"
        />
      </li>
      <li
        class="zap-slideout-menu-item"
        v-for="item in menu"
        :key="item"
      >{{item}}
      </li>
      <li
        class="zap-slideout-menu-item--small"
        v-for="item in smallMenu"
        :key="item"
      >{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SlideoutMenu',
  data: () => ({
    openerText: 'Open',
    isOpen: false,
    menu: ['Home', 'Work', 'Contact'],
    smallMenu: ['Tips', 'Resources', 'Shenanigans']
  }),
  methods: {
    open() {
      this.openerText = 'Close';
      this.isOpen = true;
    },
    close() {
      this.openerText = 'Open';
      this.isOpen = false;
    },
    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }
}
</script>
<style scoped>
.zap-slideout {
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  padding: 30px;
  background-color: #34495e;
  transform: translateX(-100%);
  z-index: 1000;
  transition: 0.5s;
  overflow-x: hidden;
}

.zap-slideout.isOpen {
  transform: translateX(0);
}

.zap-slideout-opener {
  position: absolute;
  top: 20px;
  left: 100%;
  margin-left: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  cursor: pointer;
}

.zap-slideout-opener {
  color: red;
}
</style>

