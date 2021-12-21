var vueTask = new Vue({
  el: '#app',
  data: {
    message: 'Selam',
    api: 'https://jsonplaceholder.typicode.com/posts',
    userList: []
  },
  methods: { getUserList() {
    let that = this;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (veri) {
      that.userList = veri.data
      // handle success
    console.log(that.userList)
    })
    
    }},
  created() {
    this.getUserList();
    //apiden veri çekme işlemleri burada olur
 },
  mounted() {
    //componentler render edildiği an
  }
})

//TASK
//axios ile veriyi çek (posts verisi)
//bootstrap card içine v-for ile dön veri title and body yazdır >> https://getbootstrap.com/docs/4.0/components/card/ d-flex olsun güzel gözüksün
