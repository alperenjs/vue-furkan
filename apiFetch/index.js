/*
API: Application Proggramina Interface

axios : veri çekmeye yarayan kütüphane

API FETCH TÜRLERİ > 1- GET 2- POST
*/

var userList = [];
const myUl = document.getElementById("myul");


axios.get('/userList.json')
  .then((response) => {
    // handle success

    
    userList = response.data;
    console.log("userList: ", userList)

        for(i=0; i<userList.length; i++){
            myUl.innerHTML += 
                `<li> 
                    ${userList[i].name}
                 </li>
                `
            
        }
  });











//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });