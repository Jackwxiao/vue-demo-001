let app = new Vue({
    el:'#app',
    data:{
        open: false
    },
    template:
     `<div>
        <button v-on:click="toogle">点我</button>
        <div v-if="open">你好</div>
     </div>`,
     methods:{
         toogle(){
             this.open = !this.open
         }
     }
})