<template>
  <div>
    <!-- <a href="./assets/images/resume.pdf"></a> -->
    <iframe :src="src" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "/assets/images/resume.pdf",
    };
  },
};
</script>