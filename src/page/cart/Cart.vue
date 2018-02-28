<template>
    <div class="cart">
        <div class="empty" v-if="chosenBook.length == 0">
            <div class="cartBox">
                <i class='fa fa-shopping-cart fa-5x'></i>
                <span class="emCart">购物车竟然是空的！</span>
            </div>
            <div class="gotoSearch">
                <router-link :to='{name:"category"}' tag='div' >
                    <span>去看看？</span>
                </router-link>  
            </div> 
            
        </div>
        <div class="hasBook" v-else>
            <div class="edit">
                <span>编辑</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      chosenBook: [1]
    };
  }
};
</script>

<style lang="scss" scoped>
.cart {
  background-color: rgb(241, 241, 241);
}
.empty,
.hasBook {
  width: 100%;
  height: 100%;
  position: relative;
}
.empty {
  padding: 200px 20px 50px;
}
.edit {
  height: 40px;
  line-height: 40px;
  text-align: right;
  span {
    color: rgb(133, 174, 252);
    margin-right: 10px;
  }
}
.cartBox {
  margin-left: 30px;
  color: rgb(184, 184, 184);
}
.emCart {
  font-size: 18px;
  margin-left: 30px;
  color: rgb(184, 184, 184);
}
.gotoSearch {
  text-align: center;
  margin-top: 20px;
  color: #56be9c;
  span {
    font-size: 16px;
    text-decoration: underline;
  }
}
</style>