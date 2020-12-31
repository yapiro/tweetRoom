<template>
  <aside class = "menu">
    <ul class ="menu-list">
      <template v-for="(menuData,index) in menuDataList">
        <router-link :to="menuData.to" tag="li" class="menu-list-title" :key="index">
          <a class="menu-list-title-link">{{menuData.title}}</a>
        </router-link>
      </template>
    </ul>
  </aside>
</template>

<script>
const MENU_DATA_LIST=[
  {
    title:'ウイスキー',
    to:{name:'Wisky'}
  },
  {
    title:'旅',
    to:{name:'Trip'}
  },
  {
    title:'筋トレ',
    to:{name:'Muscle'}
  },
]

export default{
  data(){
    return{
      menuDataList : MENU_DATA_LIST
    }
  }  
}
</script>

<style>
.menu{
    position:fixed;
    width:198px;
    height:100%;
    border-right:1px solid black;
    background-color:rgb(241, 240, 240);
    text-align:center;
}
.menu-list{
    list-style:none;
    margin:0 auto;
    padding:0;
}
.menu-list-title{
    border-bottom:1px solid black;
    height:50px;
    line-height:50px;
    margin:0 auto;
}
.menu-list-title-link{
  text-align:center;
  display:block;
  color:black;
  font-size:14px;
}
.menu-list-title-link:hover,.router-link-exact-active .menu-list-title-link{
  font-size:18px;
  background-color:#555;
  color:white;
  font-weight:bold;
}
</style>