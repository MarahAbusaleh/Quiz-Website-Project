let btn1 = document.getElementById("btnlog1");
let btn2 = document.getElementById("btnlog2");
let toLogOut = document.getElementById("toLogOut");

currentUser = JSON.parse(localStorage.getItem('user'));
console.log(currentUser[0]);
console.log(currentUser[1]);

const displaycurrentUser = document.getElementById("h3name");
displaycurrentUser.innerHTML = currentUser[0];

// if(currentUser[1] == true){
//     // btn1.style.display = 'none';
//     btn1.innerHTML = "Log Out";
//     const logoutLink = "/Pages/login.html";
//     toLogOut.setAttribute('href', "/Pages/login.html");

//     btn2.style.display = 'none';
// }



// localStorage.setItem("name", "sam");
//             let local =localStorage.getItem("name");
//             console.log(local);
            function goToQuiz(){
                if(local = ""){
                    window.location.href = "https://web.whatsapp.com/";
                }
                else{
                    window.location.href = "/Pages/Questions.html";
                }
            }