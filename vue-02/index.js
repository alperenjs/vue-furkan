var vue01App = new Vue({
  el: '#app',
  data: {
    message: 'Selam',
    user: '',
    userList: []
  },
  methods: {
    login() {
      //işlem yaptık apiden login olduk ve bize isim geldi
      this.user = "Furkan";
    },
    getUserList() {
      let that = this;

      axios.get('/userList.json')
        .then(function (veri) {
          // handle success
          that.userList = veri.data;
        })
    }
  },
  created() {
    //apiden veri çekme işlemleri burada olur
    this.getUserList();
  },
  mounted() {
    //componentler render edildiği an
  }
})