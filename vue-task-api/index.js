var vueTask = new Vue({
  el: '#app',
  data: {
    message: 'Selam',
    api: 'https://jsonplaceholder.typicode.com/posts'
  },
  methods: {},
  created() {
    //apiden veri çekme işlemleri burada olur
 },
  mounted() {
    //componentler render edildiği an
  }
})

//TASK
//axios ile veriyi çek (posts verisi)
//bootstrap card içine v-for ile dön veri title and body yazdır >> https://getbootstrap.com/docs/4.0/components/card/ d-flex olsun güzel gözüksün
