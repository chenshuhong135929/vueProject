<template>
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul class="nav nav-tabs">
                  <li>
                    <router-link  class="list-group-item" active-class="active" to="/home/home-news">News</router-link>
                  </li>
                  <li>
                    <router-link  class="list-group-item"  active-class="active" to="/home/home-message">Message</router-link>
                  </li>
                </ul>
                <div>
                      <!--include是输入主键名（componenets的name）-->
                      <keep-alive include="HomeNews">
                              <router-view></router-view>
                      </keep-alive>
                      
                </div>
              </div>
            </div>
     
</template>

<script>
export default {
name:'Home',
mounted(){
      console.log("挂载完毕");
},
beforeDestroy(){
      console.log("销毁");
}
}
</script>

<style>

</style>