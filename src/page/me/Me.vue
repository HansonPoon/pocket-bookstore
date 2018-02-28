<template>
    <div class="me">
        <div class="pic">
            <div class="cover">
                <div class="logo"></div>
                <p class="userName">取个名字太难</p>
            </div>
        </div>      
        <div>
            <ul>
                <li>设置个人资料 <span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>管理收货地址<span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>我的订单<span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>我的评价<span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>商品收藏<span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>店铺收藏<span><i class="fa fa-angle-right fa-lg"></i></span></li>
                <li>浏览记录<span><i class="fa fa-angle-right fa-lg"></i></span></li>
            </ul>
            <button>退出登录</button>
        </div>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.me {
  background-color: rgb(241, 241, 241);
  color: #666;
}
.pic {
  position: relative;
  height: 160px;
  background: url("../../../static/imgs/logo.png") no-repeat;
  background-size: cover;
}
/* 背景图半透明效果 */
.cover {
  padding-top: 15px;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
}
.logo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
  background: url("../../../static/imgs/logo.png") no-repeat;
  background-size: cover;
  background-position: center;
}

.userName {
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
  color: rgb(165, 2, 2);
  z-index: 3;
}
li {
  position: relative;
  height: 45px;
  line-height: 45px;
  padding-left: 20px;
  font-size: 14px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  span{
    position: absolute;
    right: 20px;
  }
}
li:last-child {
  border-bottom: none;
}
button {
  display: block;
  width: 300px;
  height: 45px;
  margin: 15px auto;
  border: none;
  outline: none;
  border-radius: 15px;
  background-color: rgb(228, 0, 0);
  color: #fff;
  font-size: 14px;
  font-family: 'Microsoft Yahei',sans-serif,arial,tahoma;
}
button:hover {
  background-color: rgb(253, 65, 65);
}
</style>