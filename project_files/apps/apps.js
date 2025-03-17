

let icon = document.querySelector("#mobile-ham");
let active = false;
icon.addEventListener("click", function(){
    console.log("tes")
    active = !active;
    if(active){
        let drop = document.querySelector(".navbar")
        drop.style.opacity = "1";
        drop.style.visibility = "1";
        drop.style.right = "0px";
        drop.style.display = "flex";
        drop.style.right = "0px";
        // drop.style.height = "100%";
    }else{
        let drop = document.querySelector(".navbar")
        // drop.style.right = "-1000px";
        drop.style.opacity = "0";
        drop.style.visibility = "0";
        drop.style.display = "none";
    }

})


let obj = {
    "yellow pine shirt": {
        "prod_name":"yellow pine shirt",
        "prod_price":"$15.00",
        "Prod_url":"./pics/Summer-Shirts-For-Men-Casual-Yellow-coconut-Print-Button-Beach-Shirt-Short-Sleeve-Loose-Top-Summer.jpg_Q90 1.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "island paradise shirt":{
        "prod_name":"island paradise shirt",
        "prod_price":"$13.50",
        "Prod_url":"./pics/island-paradise.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black coral shirt":{
        "prod_name":"black coral shirt",
        "prod_price":"$12.00",
        "Prod_url":"./pics/Summer-Beach-Men-Shirt-Mens-Fashion-Stand-Collar-Strip-Print-Short-Sleeve-T-Shirt-Top-Blusas.jpg_Q90 1.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "seagrass shirt":{
        "prod_name":"seagrass shirtt",
        "prod_price":"$20.00",
        "Prod_url":"./pics/seagrass-shirt.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "striped tropical shirt":{
        "prod_name":"striped tropical shirtt",
        "prod_price":"$17.00",
        "Prod_url":"./pics/striped-shirt.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "orange car shirt":{
        "prod_name":"orange car shirt",
        "prod_price":"$15.00",
        "Prod_url":"./pics/striped-shirt.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "crane shirt":{
        "prod_name":"crane shirt",
        "prod_price":"$12.00",
        "Prod_url":"./pics/crane-shirt.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "tiger stripe shirt":{
        "prod_name":"tiger stripe shirt",
        "prod_price":"$11.50",
        "Prod_url":"./pics/tiger-stripe.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black stripe shirt":{
        "prod_name":"black stripe shirt",
        "prod_price":"$12.00",
        "Prod_url":"./pics/black-stripe.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black stripe shirt":{
        "prod_name":"black stripe shirt",
        "prod_price":"$12.00",
        "Prod_url":"./pics/black-stripe.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black marble shirt":{
        "prod_name":"black marble shirt",
        "prod_price":"$14.00",
        "Prod_url":"./pics/black-marble.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black floral shirt":{
        "prod_name":"black floral shirt",
        "prod_price":"$13.00",
        "Prod_url":"./pics/black-floral.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "brown coral shirt":{
        "prod_name":"brown coral shirt",
        "prod_price":"$17.50",
        "Prod_url":"./pics/brown-coral.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "turquoise polo shirt":{
        "prod_name":"turquoise polo shirt",
        "prod_price":"$16.00",
        "Prod_url":"./pics/turquise-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "navy polo shirt":{
        "prod_name":"navy polo shirt",
        "prod_price":"$16.00",
        "Prod_url":"./pics/navy-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "green polo shirt":{
        "prod_name":"green polo shirt",
        "prod_price":"$16.00",
        "Prod_url":"./pics/green-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "pink polo shirt":{
        "prod_name":"pink polo shirt",
        "prod_price":"$16.00",
        "Prod_url":"./pics/pink-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black orange polo shirt":{
        "prod_name":"black orange polo shirt",
        "prod_price":"$16.00",
        "Prod_url":"./pics/black-orage-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "grey polo shirt":{
        "prod_name":"grey polo shirt",
        "prod_price":"$15.00",
        "Prod_url":"./pics/grey-polo.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "cream trousers":{
        "prod_name":"cream trousers",
        "prod_price":"$25.00",
        "Prod_url":"./pics/cream-trouser.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "black shorts":{
        "prod_name":"black shorts",
        "prod_price":"$23.50",
        "Prod_url":"./pics/black-shorts.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "red shorts":{
        "prod_name":"red shorts",
        "prod_price":"$22.00",
        "Prod_url":"./pics/red-shorts.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "light grey shorts":{
        "prod_name":"light grey shorts",
        "prod_price":"$24.00",
        "Prod_url":"./pics/light-grey-shorts.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "navy shorts":{
        "prod_name":"navy shorts",
        "prod_price":"$27.00",
        "Prod_url":"./pics/navy-shorts.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "grey jogging pants":{
        "prod_name":"grey jogging pants",
        "prod_price":"$35.00",
        "Prod_url":"./pics/grey-jogger.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "navy shorts":{
        "prod_name":"navy shorts",
        "prod_price":"$22.00",
        "Prod_url":"./pics/navy-shorts2.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "light brown trousers":{
        "prod_name":"light brown trousers",
        "prod_price":"$28.50",
        "Prod_url":"./pics/ligh-brown-trousers.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "biege trousers":{
        "prod_name":"biege trousers",
        "prod_price":"$26.50",
        "Prod_url":"./pics/biege-trousers.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "dark green shorts":{
        "prod_name":"dark green shorts",
        "prod_price":"$20.00",
        "Prod_url":"./pics/dark-green-shorts.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "dark green trousers":{
        "prod_name":"dark green trousers",
        "prod_price":"$27.00",
        "Prod_url":"./pics/dark-green-trousers.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
    "prestige cream trousers":{
        "prod_name":"prestige cream trousers",
        "prod_price":"$29.00",
        "Prod_url":"./pics/prestige-trousers.png",
        "prod_desc":"Designed by Indonesian designer Peter Rusli in 2022, this shirt was heavily inspired by the vast majority of islands scattered around Indonesia. “a canvas painted by nature” is what he described it.",
        "prod_size":"Available in : S  M  L  XL  XXL",
        "prod_mats":"Material : 100% cotton"
    },
}
let preview = document.querySelector(".preview-contain")

let img = document.querySelector(".prev-img")
let prev_tittle = document.querySelector(".prev-tittle")
let prev_price = document.querySelector(".prev-price")
let predesc = document.querySelector(".predesc")
let presize = document.querySelector(".presize")
let prematerial = document.querySelector(".prematerial")
let card = document.querySelectorAll(".card")

card.forEach( elem =>{

    elem.addEventListener("click", function(){
    //    console.log("tai")
        let name = elem.querySelector(".product-name").innerHTML
        console.log(name)
        img["src"] = obj[name].Prod_url
        prev_tittle.innerHTML =obj[name].prod_name
        prev_price.innerHTML = obj[name].prod_price
        predesc.innerHTML = obj[name].prod_desc
        presize.innerHTML = obj[name].prod_size
        prematerial.innerHTML = obj[name].prod_mats
        preview.style.display = "flex";
   })
})

let close = document.querySelector(".closeicon")

close.addEventListener("click", function(){
    preview.style.display = "none"
})



// for(let i = 0;i<Object.keys(obj).length ; i++){
//     if()
// }
// const form = document.querySelector("#form"),
// nextBtn = form.querySelector(".nextBtn"),
// backBtn = form.querySelector(".backBtn"),
// allInput = form.querySelectorAll(".first input");


// nextBtn.addEventListener("click", ()=> {
//     allInput.forEach(input => {
//         if(input.value != ""){
//             form.classList.add('secActive');
//         }else{
//             form.classList.remove('secActive');
//         }
//     })
// })

// backBtn.addEventListener("click", () => form.classList.remove('secActive'));

