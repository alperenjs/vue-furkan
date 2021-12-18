var vue01App = new Vue({
    el: '#app',
    data: {
      message: 'Selam',
      user: ''
    },
    methods:{
        login(){
            //işlem yaptık apiden login olduk ve bize isim geldi
           this.user = "Furkan";
        }
    }
  })