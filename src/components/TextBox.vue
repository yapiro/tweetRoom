<template>
  <div class="textbox-container">
      <textarea placeholder = "ここに入力" class="textbox-input" v-model.trim="body"></textarea>
      <div class="textbox-button">
          <Button title="投稿する" :onClick="post"></Button>
      </div>
  </div>
</template>

<script>
import Button from './Button';
export default {
    components:{
      Button
    },    
    data(){
        return{
            body:''
        }
    },
    props:{
      onPost:{
        type:Function,
        required:true
      }
    },
    methods:{
      post(){
        if(!this.body){
            alert('入力してください')
            return;
        }
        const newMessages = this.createMessage();
        this.onPost(newMessages)
        this.body = '';
      },
      createMessage(){
          return{
            date: new Date().toLocaleString(),
            body: this.body
          }
      }
    }
}
</script>

<style>
.textbox-container{
  padding:10px;
}
.textbox-input{
  resize:none;
  width:100%;
  height:100px;
  border:1px solid black;
  border-radius:5px;
  padding:0;
  background:white;
}
.textbox-button{
  text-align:right;
  margin-top:10px;
}
</style>