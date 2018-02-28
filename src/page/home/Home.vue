<template>
    <div class="">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                <img id="8a15ba78-76fc-f086-bc77-aed3bc45c988-image" src="https://images-cn.ssl-images-amazon.com/images/S/aplus-media/vc/8ce13aae-7439-4b5a-8acf-4541498d9064._SR970,300_.jpg" style="width: 414px; height: 174px; left: -19.5px; top: 0px;">
                </div>
                <div class="swiper-slide">
                <img src="https://images-cn.ssl-images-amazon.com/images/S/aplus-media/vc/398bcc44-eb54-4220-9a1f-b8879fac4ebc._SR970,300_.jpg" style="width: 414px; height: 174px; left: -19.5px; top: 0px;">
                </div>
                <div class="swiper-slide">
                <img src="https://images-cn.ssl-images-amazon.com/images/S/aplus-media/vc/0b0e7f72-5450-44bd-a607-866143710425._SR970,300_.jpg" style="width: 414px; height: 174px; left: -19.5px; top: 0px;">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
        <div class='ad'>
            <i class="fa fa-bullhorn fa-lg" style="color:orange;margin-right:10px"></i>
            双11全场图书低至1折,更有隐藏神秘惊喜!
        </div>

        <!-- 新书上架 -->
        <div class="showBook">
            <h3 class="areaTitle">新书上架</h3>
            <ul class="clearfix">
                <li v-for="item in newBookInfo" @click='showBookInfo(item)'>
                    <img :src="item.cover" alt="">
                    <p class="bookName">{{item.name}}</p>
                    <p class='bookPrice'>¥{{item.price}}</p>      
                </li>
            </ul>
            
        </div>

        <!-- 编辑推荐 -->
        <div class="showBook">
            <h3 class="areaTitle">小编推荐</h3>
            <ul class="clearfix">
                <li v-for="item in recommendBookInfo" @click='showBookInfo(item)'>
                    <img :src="item.cover" alt="">
                    <p class="bookName">{{item.name}}</p>
                    <p class='bookPrice'>¥{{item.price}}</p> 
                </li>
            </ul>
        </div>

        <!-- 热门畅销 -->
        <div class="showBook">
            <h3 class="areaTitle">热门畅销</h3>
            <ul class="clearfix">
                <li v-for="item in hotBookInfo" @click='showBookInfo(item)'>
                    <img :src="item.cover" alt="">
                    <p class="bookName">{{item.name}}</p>
                    <p class='bookPrice'>¥{{item.price}}</p> 
                </li>
            </ul>
        </div>

        <!-- 点击显示图书信息控制面板 -->
        <div class="showBookInfo" v-show='ifShow'>
            <div class="showBookInfo_top">
                <span @click="closeModal">
                    <i class="fa fa-close fa-lg"></i>
                </span>
            </div>
            <div class="showBookInfo_simpleInfo">
                <div class="bookImgBox">
                    <img :src="modalInfo.cover" alt="">
                </div>
                <div class="txtInfo">
                    <p class="rp">
                        <span class="key">书名</span>
                        {{modalInfo.name}}
                    </p>
                    <p class="rp">
                        <span class="key">作者</span>
                        {{modalInfo.author}}
                    </p>
                    <p class="rp">
                        <span class="key">价格</span>
                        {{modalInfo.price}}
                    </p>
                    <p class="rpl">
                        <span class="detail">详情</span>
                    </p>
                </div>
                <p class="bbn">{{modalInfo.name}}</p>
                <p class="describle">
                    {{modalInfo.describe}}
                </p>
            </div>
            <div class="ft">
                <p class="pn">
                    <span class="fs">￥ {{modalInfo.price}}</span>
                    <span>
                        <span class="calc" @click="reduce">-</span> 
                        <span class="calc"> {{bookNum}} 本 </span>
                        <span class="calc" @click="add">+</span>
                    </span>
                </p>
                <div class="btnBox">
                    <button class="buyBtn joinCart" @click="moveToCart('购物车')">加入购物车</button>
                    <button class="buyBtn buyNow">立即购买</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import swiperCss from "swiper/dist/css/swiper.css";
import Swiper from "swiper/dist/js/swiper.js";

export default {
  name: "",
  data() {
    return {
      newBookInfo: [],
      recommendBookInfo: [],
      hotBookInfo: [],
      //   是否显示图书弹出框
      ifShow: false,
      //   购书数量
      bookNum: "1",
      //   面板数据
      modalInfo: {
        cover: ""
      }
    };
  },
  methods: {
    showBookInfo(book) {
      this.ifShow = true;
      this.modalInfo = {
        name: book.name,
        cover: book.cover,
        describe: book.describe,
        author: book.author,
        price: book.price
      };
    },
    closeModal() {
      this.ifShow = false;
    },
    reduce(){
        if(this.bookNum >= 2){
            this.bookNum = this.bookNum - 1
        }
    },
    add(){
        this.bookNum = Number(this.bookNum) + 1
    },
    moveToCart(val){
        
    }
  },
  created() {
    //   配置轮播图
    window.onload = () => {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        autoplay: true,
        effect: "coverflow",
        speed: 800,
        reverseDirection: false,
        clickable: true,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }

        // 如果需要前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      });
    };

    /* ajax引入图书数据 */
    function getNewBookInfo() {
      return axios.get("./static/bookData/newBook.json");
    }

    function getRecommendBookInfo() {
      return axios.get("./static/bookData/recommendBook.json");
    }

    function getHotBookInfo() {
      return axios.get("./static/bookData/hotBook.json");
    }

    axios
      .all([getNewBookInfo(), getRecommendBookInfo(), getHotBookInfo()])
      .then(
        axios.spread((newBook, recommendBook, hotBook) => {
          // 两个请求现在都执行完成
          this.newBookInfo = newBook.data;
          this.recommendBookInfo = recommendBook.data;
          this.hotBookInfo = hotBook.data;
        })
      );
  }
};
</script>

<style lang="scss" scoped>

</style>