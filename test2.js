alert("The Pic will be hidden after 5s");
function hidden(){
    document.getElementById("orgg").style.display = "none";
    
}

setTimeout(hidden,5000);
setTimeout(show,5000);

var arr =["6.jpg","3.jpg","9.jpg","5.jpg","1.jpg","8.jpg","4.jpg", ]
 var index;


 function show(){
     var parent = document.createElement("div");
     
    var div1 = document.createElement("div");
    div1.innerHTML = `
     
    <img src="7.jpg" alt="" id ="img1" class="imgg" onclick="swape('img1' ,'img2')">
    <img src="5.jpg" alt="" id = "img2" class="imgg" onclick="swape('img2' ,'img3')">
    <img src="3.jpg" alt="" id ="img3" class="imgg" onclick="swape('img3' ,'img4')">
    `;
    var container = document.querySelector("body");
    parent.append(div1);
    
    var div2 = document.createElement("div");
    div2.innerHTML = `
    <img src="4.jpg " alt="" id ="img4" class="imgg" onclick="swape('img4' ,'img5')">
    <img src="2.jpg" alt="" id ="img5" class="imgg" onclick="swape('img5' ,'img6')">    
    <img src="9.jpg" alt="" id ="img6" class="imgg" onclick="swape('img6' ,'img7')">
    `;
    var container = document.querySelector("body");
    parent.append(div2);
    var div3 = document.createElement("div");
    div3.innerHTML = `
           <img src="1.jpg" alt="" id ="img7" class="imgg" onclick="swape('img7' ,'img8')">
            <img src="8.jpg" alt="" id ="img8"  class="imgg"onclick="swape('img8' ,'img9')">
            <img src="6.jpg" alt="" id ="img9" class="imgg" onclick="swape('img9' ,'img1')">
    `;
    var container = document.querySelector("body");
    parent.append(div3);
    container.append(parent);
    parent.classList.add("parent");
    }


// function hidden1(){
//           index = this.index ;
//           index++ ;
//            document.getElementById("img1").setAttribute("src", `${arr[index]}`);
//        index-- ;
//            document.getElementById("img2").setAttribute("src", `${arr[index]}`);

// }

// function hidden2(){
//     index = this.index;
//     index++ ;
//           document.getElementById("img2").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img3").setAttribute("src", `${arr[index]}`);

// }

// function hidden3(){
//     index++;
//            document.getElementById("img3").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img4").setAttribute("src", `${arr[index]}`);
// }

// function hidden4(){
//     index++;
//            document.getElementById("img4").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img5").setAttribute("src", `${arr[index]}`);
    
// }

// function hidden5(){
//     index++;
//            document.getElementById("img5").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img6").setAttribute("src", `${arr[index]}`);
    
// }


// function hidden6(){
//     index++;
//            document.getElementById("img6").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img7").setAttribute("src", `${arr[index]}`);
// }

// function hidden7(){
//     index++;
//            document.getElementById("img7").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img8").setAttribute("src", `${arr[index]}`);

// }

// function hidden8(){
//     index++;
//            document.getElementById("img8").setAttribute("src", `${arr[index]}`);
//            index--;
//            document.getElementById("img9").setAttribute("src", `${arr[index]}`);
    
// }

// function hidden9(){
//     index++;
//           document.getElementById("img9").setAttribute("src", `${arr[index]}`);
//             index--;
//             document.getElementById("img1").setAttribute("src", `${arr[index]}`);
    
// }

function swape( x ,  y){
     
    var temp = document.getElementById(x).getAttribute("src" ) ;
    document.getElementById(x).setAttribute("src" ,document.getElementById(y).getAttribute("src"))  ;
    document.getElementById(y).setAttribute("src" ,temp) ;
    fun();
}


 
// function swape(){

//     var temp = document.getElementById('img1').id ;
//     document.getElementById('img1').id = document.getElementById('img2').id ;
//     document.getElementById('img2').id = temp ;

// }
 
var count2 = 9 , arr2 = [1,2,3,4,5,6,7,8,9] ;
function shuffle() {
    for (let row=1;row<=9;row++) { 
        var row2=Math.floor(Math.random()*9);
        swape(`img${row}`,`img${arr2[row2]}`);    
    } 
    }


 
function fun(){ 
if( (document.getElementById('img1').getAttribute('src') ==  "1.jpg") 
 && (document.getElementById('img2').getAttribute('src') == "2.jpg") 
 && (document.getElementById('img3').getAttribute('src') == "3.jpg") 
 && (document.getElementById('img4').getAttribute('src') == "4.jpg") 
  && (document.getElementById('img5').getAttribute('src') ==  "5.jpg") 
 &&  (document.getElementById('img6').getAttribute('src') == "6.jpg")
 && (document.getElementById('img7').getAttribute('src') ==  "7.jpg")  
 && (document.getElementById('img8').getAttribute('src') ==  "8.jpg")  
 &&  (document.getElementById('img9').getAttribute('src') ==  "9.jpg") 
)
{alert('Congratulations') ;
}
}

