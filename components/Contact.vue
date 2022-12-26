<template>
  <div class="contact padding section">
    <p class="boldText"><b>Contact</b></p>
    <a
      href="mailto:kerwin_1727@163.com"
      class="mt-4 mr-2 rounded-full generalBtn"
      ><p class="p-3 generalBtnText smallText opacity-80">Email</p></a
    >
    <a
      href="https://github.com/kerwingo"
      target="_blank"
      class="mt-4 mr-2 rounded-full generalBtn"
      ><p class="p-3 generalBtnText smallText opacity-80">GitHub</p></a
    >
    <a href="javascript:;" class="mt-4 mr-2 rounded-full generalBtn"
      ><p class="p-3 generalBtnText smallText opacity-80" @click="wakeWx">
        WeChat
      </p>
      <input type="text" id="chatNum" value="kerwin1727" class="inpt"
    /></a>
  </div>
</template>

<script>
export default {
  methods: {
    wakeWx() {
      const chatUrl = "weixin://";
      if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
        var ifr = document.createElement("iframe");
        ifr.src = chatUrl;
        ifr.style.display = "none";
        document.body.appendChild(ifr);
      } else {
        window.location.href = chatUrl;
      }
    },
  },
};
</script>

<style scoped>
.inpt {
  width: 0px;
  height: 0px;
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>