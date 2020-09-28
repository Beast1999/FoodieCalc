


document.querySelector("button").addEventListener("click", checkfoodie);


function checkfoodie(){
  var name = document.querySelector(".name").value;
  var food = document.querySelector(".food").value;

  if (name === ""){
    alert("enter name");
  }else if (food === ""){
    alert("enter food");
  }else{
    var n1 = Math.random() * 100;
    n1 = Math.floor(n1);
    document.querySelector('#result').value = n1 + "%";

    if (n1 > 80){
      document.querySelector("h2").innerHTML = "you are true foodie";
    }else if (n1 > 50 && n1 <= 80) {
      document.querySelector("h2").innerHTML = "you can become a foodie in future";
    }else if (n1 <= 50) {
      document.querySelector("h2").innerHTML = "you are not a foodie...";
    }
  }



}
