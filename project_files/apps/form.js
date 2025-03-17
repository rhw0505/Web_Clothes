let sub = document.getElementById("subbtn")
let Form = document.getElementById("form") 
let Name = document.getElementById("name") 
let Date = document.getElementById("date") 
let Telp = document.getElementById("telp")
let email = document.getElementById("email") 

sub.addEventListener("click", function() {
    let msg = []
    console.log("tes")
    let emailval = email.value
    let error = document.getElementById("error")
    
    if(Name.value.length < 5){
        msg.push("Name must be atleast 5 letters")
    }else if(Telp.value.length < 10){
        msg.push("please input valid number (10digits)")
    }else if(!emailval.endsWith("@gmail.com")){
        msg.push("please input valid google email")
    }
    
    if(msg.length > 0){
        event.preventDefault();
        error.innerHTML = msg.join(", ")
        error.style.color = "red";
        error.style.fontWeight = "bold";
    }
})
