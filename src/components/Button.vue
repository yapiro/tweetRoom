<template>
  <div class = "button" @click="onClick">
      {{title}}
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'ボタン'
        },
        onClick:{
            type:Function,
            required:true
        }
    }
}
</script>

<style>
  .button{
    display:inline-block;
    border-radius:5px;
    background-color:red;
    color:white;
    cursor:pointer;
    padding:10px;
  }
  .button:hover{
      background-color:rgb(205, 8, 8);
  }
  .button:active{
      background-color:rgb(135, 3, 3);
  }
</style>