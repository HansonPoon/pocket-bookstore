<template>
    <div class="category">
        <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="请输入您要查找的书名" v-model="text" @keydown.enter="search">
        </div>
        <ul>
            <li v-for='item in showBook' @click="showBookInfo(item)">
                <div class="img">
                    <img :src="item.cover">    
                </div>
                <div class="txt">
                    <p class="name">{{item.name}}</p>
                    <p class="author">{{item.author}}</p>
                    <p class='price'>¥ {{item.price}}</p>
                </div>
            </li>
        </ul>
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
                    <button class="buyBtn joinCart">加入购物车
                      
                    </button>
                    <button class="buyBtn buyNow">立即购买</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bookInfo: [],
      text: "",
      showBook:[],
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
    search() {
      if (this.text == "") {
        this.showBook = this.bookInfo;
      } else {
        this.showBook = this.bookInfo.filter(item => {
          return new RegExp(this.text, "gi").test(item.name);
        });
      }
    },
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
    }
  },
  created() {
    /* ajax引入图书数据 */
    function getBookInfo() {
      return axios.get("./static/bookData/book-info.json");
    }
    axios.all([getBookInfo()]).then(
      axios.spread(bookInfo => {
        this.bookInfo = bookInfo.data;
        // 确保进入页面时有内容正常显示
        this.showBook = this.bookInfo;
      })
    );
  }
};
</script>

<style lang="scss" scoped>
.search {
  width: 340px;
  height: 30px;
  margin: 5px auto 0;
  position: relative;
  i {
    position: absolute;
    top: 8px;
    left: 10px;
  }
  input {
    width: 100%;
    height: 100%;
    padding-left: 30px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 15px;
  }
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
li {
  height: 120px;
  width: 340px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  position: relative;
}
.img {
  height: 100%;
  padding: 10px 0;
  img {
    height: 100px;
    width: 80px;
  }
}
.txt {
  width: 240px;
  height: 100px;
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.name,
.author,
.price {
  height: 25px;
  line-height: 25px;
  overflow: hidden;
}
.name {
  color: rgb(133, 174, 252);
  font-size: 16px;
}
.author {
  color: #999;
}
.price {
  color: rgb(219, 57, 57);
  font-size: 18px;
}
</style>