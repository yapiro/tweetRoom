<template>
  <div>
    <TextBox :onPost="addMessage"></TextBox>
    <div class="line"></div>
    <MessageList :messages="reversedMessages"></MessageList>
  </div>
</template>

<script>
import TextBox from './TextBox';
import MessageList from './MessageList';
export default {
    components:{
        TextBox,
        MessageList
    },
    data(){
      return{
        messages: []
      }
    },
    computed:{
      reversedMessages(){
        return this.messages.slice().reverse()
      }
    },
    methods:{
      addMessage(message){
        this.messages.push(message)
      }
    }
}
</script>

<style scoped>

.line{
  border-top:10px solid #ccc;
}
</style>