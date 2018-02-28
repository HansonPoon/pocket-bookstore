<template>
  <div id="app">    
    <header>
      {{headTitle}}
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <router-link :to='{name:"home"}' tag='div' @click.native="giveTitle('首页')"> 
        <div class="option">
          <i class="fa fa-home fa-inverse fa-2x"></i>
          <p>首页</p>
        </div>
      </router-link>
      <router-link :to='{name:"category"}' tag='div' @click.native="giveTitle('分类')">
        <div class="option">
          <i class="fa fa-list fa-inverse fa-2x"></i>
          <p>分类</p>
        </div>
      </router-link>  
      <router-link :to='{name:"cart"}' tag='div' @click.native="giveTitle('购物车')">
        <div class="option">
          <i class="fa fa-shopping-cart fa-inverse fa-2x"></i>
          <p>购物车</p>
        </div>
      </router-link>
      <router-link :to='{name:"me"}' tag='div' @click.native="giveTitle('我的主页')">
        <div class="option">
          <i class="fa fa-user fa-inverse fa-2x"></i>
          <p>我的主页</p>
        </div>
      </router-link>
      

    </footer>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      headTitle: "首页"
    };
  },
  methods: {
    giveTitle(title) {
      this.headTitle = title;
    }
  }
};
</script>

<style lang='sass'>
  @import './style/main.scss';
</style>
