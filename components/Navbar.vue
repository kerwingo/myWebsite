<template>
  <div class="navbar padding mt-9" v-if="show">
    <p
      class="mr-5 navbarBtn thinText display-inline-block"
      v-for="item in menus"
      :key="item.path"
      :class="{ active: path === item.path }"
    >
      <a :href="item.path" :target="item.target ? item.target : '_self'">{{
        item.name
      }}</a>
    </p>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        this.path = to.path;
      },
    },
  },
  mounted() {
    const { query } = this.$route;
    if (query.hid) {  //做一个导航栏的开关
      this.show = false;
    }
  },
  data() {
    return {
      show: true,
      path: "/",
      menus: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Case",
          path: "/case",
        },
        {
          name: "Contact",
          path: "/contact",
        },
        {
          name: "Tool",
          path: "/tool",
        },
        {
          name: "Blog",
          path: "https://blog.kerwin.plus/",
          target: "_blank",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbarBtn:hover {
  font-weight: 600;
}
.active {
  font-weight: 600;
  color: #fdd641;
}
</style>
