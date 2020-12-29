<template>
  <aside class = "menu">
    <ul class ="menu-list">
      <li class = "menu-list-title">ウイスキー</li>
      <li class = "menu-list-title">旅</li>
      <li class = "menu-list-title">筋トレ</li>
    </ul>
  </aside>
</template>

<script>
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
.menu-list-title:hover{
    background-color:rgb(118, 115, 115);
}
</style>