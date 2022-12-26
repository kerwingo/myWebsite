<!--
 * @Description: Description
 * @Author: Kerwin
 * @Date: 2022-12-25 18:42:58
 * @LastEditTime: 2022-12-26 14:52:13
 * @LastEditors:  Please set LastEditors
-->
<template>
  <div>
    <div class="contact padding section">
      <p class="boldText"><b>官网</b></p>
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
    <div class="contact padding section">
      <p class="boldText"><b>小程序&H5</b></p>
    </div>
    <ul class="list padding">
      <li class="item" v-for="item in xcx" :key="item.url">
        <a href="javascript:;">
          <figure>
            <v-img :src="item.imgUrl" lazy :alt="item.name" />
          </figure>
          <div class="brand-infos">
            <div class="applet">
              <strong>{{ item.name }}</strong>
              <p>扫码欣赏</p>
              <img :src="item.url" :alt="item.name" />
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
          name: "术妍印象美容服务",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-9/202189174826134.jpg",
          url: "https://www.sushuyan.com/",
          tags: "官网",
          type: 1,
        },
        {
          name: "符阳文化旅游",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-6/2021861741436896.jpg",
          url: "http://www.scfywl.cn/",
          tags: "官网",
          type: 1,
        },
        {
          name: "长沙康礼未来教育",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-9-7/2021971714472049.jpg",
          url: "http://www.ccschangsha.com/",
          tags: "官网",
          type: 1,
        },
        {
          name: "永逸集团",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-6/202186165083445.jpg",
          url: "http://www.yongyigroup.cn/",
          tags: "官网",
          type: 1,
        },
        {
          name: "美赛机器人",
          url: "http://maintsite.com/",
          imgUrl:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/33820bf0-b0d3-4d64-be09-fa6c6ca80cf5.png",
          tags: "官网",
          type: 1,
        },
      ],
      xcx: [
        {
          name: "蜜蛋店铺",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/2021814160486217.jpg",
          url: "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/2021814160475509.jpg",
          tags: "小程序",
          type: 2,
        },
        {
          name: "五一活动",
          imgUrl:
            "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/2021814160506389.jpg",
          url: "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/2021814160507615.png",
          tags: "H5",
          type: 2,
        },
        {
          name: "脑悦康",
          imgUrl:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/b64beaa1-9c2c-4699-a48c-b6131af23ead.jpg",
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/9a7d18a0-b976-45b0-b6c9-0f028fe86f1b.png",
          tags: "小程序",
          type: 2,
        },
        {
          name: "LS乐饰",
          imgUrl:
            "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/3676a942-c4fd-4747-b0b0-115a81218f49.jpg",
          url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7ea61f24-4b09-4924-abb9-e53121c80e16/3bd77e39-2a20-4d77-bc0a-a5d988d9e0e2.png",
          tags: "小程序",
          type: 2,
        },
        // {
        //   name: "招聘登记",
        //   imgUrl:
        //     "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/20218141551532153.jpg",
        //   url: "https://www.symansbon.cn/Uploadfiles/Picture/2021-8-14/20218141551531138.png",
        //   tags: "H5",
        //   type: 2,
        // },
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
  background: rgba(0, 0, 0, 0.4);
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