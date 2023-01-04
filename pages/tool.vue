<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2022-12-28 16:19:07
 * @LastEditTime: 2023-01-04 12:05:54
 * @LastEditors:  Please set LastEditors
-->
<template>
  <div>
    <div class="contact padding section">
      <p class="boldText"><b>一键出图&在线抠图</b></p>
    </div>
    <ul class="list padding">
      <li class="item" v-for="item in tool" :key="item.url">
        <a :href="item.url" target="_blank">
          <figure>
            <v-img :src="item.imgUrl" lazy :alt="item.name" />
          </figure>
          <div class="brand-infos">
            <div class="brand-sj">
              <strong>{{ item.name }}</strong>
              <p>{{ item.tags }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="contact padding section">
      <p class="boldText"><b>面试题库</b></p>
    </div>
    <ul class="list padding">
      <li class="item" v-for="item in products" :key="item.url">
        <a :href="item.url" target="_blank">
          <figure>
            <v-img :src="item.imgUrl" lazy :alt="item.name" />
          </figure>
          <div class="brand-infos">
            <div class="brand-sj">
              <strong>{{ item.name }}</strong>
              <p>{{ item.tags }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          name: "Vue",
          imgUrl:
            "https://course.51qux.com/wp-content/uploads/2021/07/20210712213711_18562.png",
          url: "https://vue3js.cn/interview/",
          tags: "Interview",
          type: 1,
        },
        {
          name: "React",
          imgUrl:
            "https://tse3-mm.cn.bing.net/th/id/OIP-C.oi8WLwC2u0EEI1j9uKmwWgHaEH?pid=ImgDet&rs=1",
          url: "https://vue3js.cn/interview/React/React.html",
          tags: "Interview",
          type: 1,
        },
        // {
        //   name: "小程序",
        //   imgUrl:
        //     "https://course.51qux.com/wp-content/uploads/2021/07/20210712213711_18562.png",
        //   url: "https://vue3js.cn/interview/applet/applet.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88",
        //   tags: "",
        //   type: 1,
        // }
      ],
      tool: [
        {
          name: "一元超市VPN 翻墙必备",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg",
          url: "https://xn--4gq62f52gdss.com/#/register?code=K2MNSY9m",
          tags: "Tool",
          type: 2,
        },
        {
          name: "meimeiyun VPN 翻墙必备",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg",
          url: "https://www.meimeiyun.top/",
          tags: "Tool",
          type: 2,
        },
        {
          name: "抠图工具",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg",
          url: "https://www.qtool.net/imgmatting/in-batch-goods",
          tags: "Tool",
          type: 2,
        },
        {
          name: "免费图片",
          imgUrl:
            "https://cdn.pixabay.com/photo/2018/02/04/09/09/brushes-3129361__340.jpg",
          url: "https://www.zhihu.com/question/265481379",
          tags: "Tool",
          type: 2,
        },
        {
          name: "Tiny Helpers",
          imgUrl:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/bc374a9a-3f5b-4a7a-8fbb-41049d862ecd.png",
          url: "https://tiny-helpers.dev/",
          tags: "Tool",
          type: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.item {
  position: relative;
  max-width: calc((100% - 24px) / 2);
}
.item figure {
  position: relative;
  display: block;
  line-height: 1;
  border-radius: 14px;
  border-radius: 12px;
  overflow: hidden;
}
.brand-infos {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
  border-radius: 12px;
  overflow: hidden;
}
.brand-infos:before {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 14px;
  opacity: 1;
  visibility: visible;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  -moz-transition: 0.5s;
  transition: 0.5s;
}
.brand-sj {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 28px;
  z-index: 5;
  color: #fff;
}
.brand-sj strong {
  display: block;
  position: relative;
  padding-bottom: 8px;
  line-height: 1.3;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.brand-sj strong:before {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 10px;
  height: 1px;
  background: #fff;
}
.brand-sj p {
  font-size: 12px;
  margin-top: 10px;
}
.item figure div {
  transition: 0.3s;
}
.item:hover figure div {
  transform: scale(1.06);
}
.item:hover .brand-infos:before {
  opacity: 1;
  visibility: visible;
  background: rgba(0, 0, 0, 0.4);
}
.item:hover .brand-infos1 .applet {
  opacity: 1;
  visibility: visible;
}
.item:hover .brand-wrs strong,
.item:hover .brand-wrs i {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
.item:hover .brand-wrs i {
  transition-delay: 0.2s;
}

.applet {
  position: absolute;
  left: 0;
  top: 50%;
  transition: 0.56s;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  opacity: 0;
  visibility: hidden;
}
.applet strong {
  display: block;
  position: relative;
  padding-bottom: 10px;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.2;
  font-weight: normal;
}
.applet strong:before {
  position: absolute;
  left: 50%;
  margin-left: -5px;
  bottom: 0;
  content: "";
  width: 10px;
  height: 1px;
  background: #fff;
}
.applet p {
  margin-top: 5px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 12px;
}
.applet img {
  margin: auto;
  display: block;
  width: 100px;
  height: auto;
  border-radius: 12px;
}
.item:hover .applet {
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 1024px) {
  .item {
    max-width: 100%;
  }
  .brand-sj {
    bottom: 18px;
    left: 18px;
    right: 18px;
  }
}
@media screen and (max-width: 640px) {
  .item {
    max-width: 100%;
  }
}
</style>