<template>
  <div class="about padding section">
    <center>
      <img
        class="rounded-full"
        width="140"
        src="niceAvatar.png"
        draggable="false"
      />
    </center>
    <div id="aboutComps" class="mt-6">
      <p class="boldText"><b>More about me</b></p>
      <p class="mt-4 normalText opacity-60">
        I am Kerwin, a self taught full-stack web developer based in
        <a
          href="https://www.google.com/search?q=turkey"
          target="_blank"
          class="border-b-2 border-gray-500  border-opacity-40 hover:border-opacity-70"
          >Chengdu,China</a
        >.
      </p>
      <p class="mt-4 normalText opacity-60">
        I am passionate about design and technology so I always try to craft
        great-looking products.
      </p>
      <p class="mt-4 normalText opacity-60">
        In my six-year programming career, I've worked for three companies. I
        have led or participated in the development of many applications,
        including WeChat mini programs, official account websites, background
        management systems, etc. I gradually realized what my true passion was
        and started learning more about programming and interaction design to
        achieve better product delivery.
      </p>
      <p class="mt-4 normalText opacity-60">
        When not coding, I like to watch TV shows and movies, play some games
        with friends or hang out with them. I'm also listening to music most of
        the time.
      </p>
      <p class="mt-4 normalText opacity-60">
        I consider myself a curious and inquisitive person, so on my spare time
        I like to work on side projects, try to contribute to open source
        software and aim to constantly learn something new to improve my
        skillset.
      </p>
      <p class="mt-4 normalText opacity-60">
        And last but not least, please don't hesitate to
        <a
          href="/contact"
          class="border-b-2 border-gray-500  border-opacity-40 hover:border-opacity-70"
          >contact me</a
        >!
      </p>
    </div>
    <div id="aboutComps" class="mt-5">
      <p class="boldText"><b>Technologies</b></p>
      <a
        v-for="item in technologies"
        :key="item.name"
        :href="item.link"
        target="_blank"
        class="mt-4 mr-2 rounded-full generalBtn"
        ><p class="p-3 generalBtnText smallText opacity-80">
          {{ item.name }}
        </p></a
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: "HTML",
          link: "https://html.com",
        },
        {
          name: "CSS",
          link: "https://www.w3.org/Style/CSS",
        },
        {
          name: "Javascript",
          link: "https://javascript.com",
        },
        {
          name: "Node.js",
          link: "https://nodejs.org",
        },
        {
          name: "Electron.js",
          link: "https://www.electronjs.org",
        },
        {
          name: "Tailwindcss",
          link: "https://tailwindcss.com",
        },
        {
          name: "Mongo DB",
          link: "https://mongodb.com",
        },
        {
          name: "Figma",
          link: "https://figma.com",
        },
        {
          name: "Nuxt.js",
          link: "https://nuxtjs.org",
        },
        {
          name: "Vuejs",
          link: "https://vuejs.org",
        },
        {
          name: "Typescript",
          link: "https://www.typescriptlang.org",
        },
        {
          name: "Svelte",
          link: "https://svelte.dev",
        },
        {
          name: "Nest.js",
          link: "https://nestjs.com/",
            },
            {
                name: "React.js",
                link:"https://reactjs.org"
            }
      ],
    };
  },
};
</script>