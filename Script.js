let istatus= document.querySelector("#H3");
let btn = document.querySelector("button");
var checked = 0;

btn.addEventListener("click",function(){
    if(checked == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color = "blue"
    btn.innerHTML = "Remove"
    btn.style.marginLeft = "36%"
    checked = 1;
    alert("hey why are you sending friend request to me I dont know your name first tell me your name")
    prompt("")
     
}
else{
    istatus.innerHTML ="Stranger"
    istatus.style.color = "black"
    btn.innerHTML = "Add Friend"
    btn.style.marginLeft = "32%"
    checked = 0;
}
})
