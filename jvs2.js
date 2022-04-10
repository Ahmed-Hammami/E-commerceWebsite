let  carts= document.querySelectorAll('.add-cart');
let products=[
{
  name:'black hat',
tag :'ul1',
price:120,
incart:0,
},
{
  name:'redhoodie',
tag :'ul2',
price:100,
incart:0,
},
]
for (let i=0;i<carts.length;i++){
carts[i].addEventListener('click',()=>{
  cartNumbers(products[i]);
  totalcost(products[i]);
})
}
function loadnumbers() {
  let productNumbers=localStorage.getItem('car');
if (productNumbers){
  document.querySelector('#header span').textContent=productNumbers;
}}

function cartNumbers(product){
  
let productNumbers=localStorage.getItem('car');
productNumbers=parseInt(productNumbers);
if (productNumbers){
  localStorage.setItem('car',productNumbers+1);
  document.querySelector('#header span').textContent=1+productNumbers;
  

}
else 
{localStorage.setItem('car',1);
document.querySelector('#header span').textContent=1;

}

setitems(product);




}
function setitems(product) {
let cartitems=localStorage.getItem('productincart');
cartitems= JSON.parse(cartitems);

if(cartitems!== null){

if(cartitems[product.tag]==undefined){
  cartitems={
    ...cartitems,
    [product.tag]:product
  }


}

  
cartitems[product.tag].incart+=1;
}
 else {
product.incart=1;
cartitems={
  [product.tag]:product
}  
 }
  localStorage.setItem("productincart",JSON.stringify(cartitems));
}

function totalcost(product){
let cartcost=localStorage.getItem('totalcost');

console.log("my cartcost is",cartcost);
console.log(typeof cartcost);
if (cartcost!=null){
  cartcost=parseInt(cartcost);
  localStorage.setItem("totalcost",cartcost+product.price);

}else
{
  localStorage.setItem("totalcost",product.price);
}


}

function displaycart() {
  let cartitems=localStorage.getItem("productincart");
  let cartcost=localStorage.getItem('totalcost');
  cartitems = JSON.parse(cartitems);
  let productcontainer=document.querySelector(".products");
  console.log(cartitems);
  if(cartitems && productcontainer){
    productcontainer.innerHTML='';
    Object.values(cartitems).map(item => {
      productcontainer.innerHTML+=`
      <div class="product"> 
      <i class="fa fa-remove"></i>
      <img src="${item.tag}.jpg">
     <span>  ${item.name}</span> 
     <div id="soum">$${item.price},00</div>
     <div class="quantityy">
     <span>${item.incart}</span>
     </div>
     <div class="total">$${item.incart*item.price},00</div>
     </div>`;
       

    });
    productcontainer.innerHTML+=`
    <div class="ultratotalcontainer">
    <h4 class="ultatotaltitle">
    Total
    </h4>
    <h4 class="ultratotal">
    $${cartcost},00
    </h4>
    </div>
    `


  }
  
}


loadnumbers();
displaycart();























































































function ouvrirPage() {
    var a = document.getElementById("search").value;

    if (a. toUpperCase() === "cagoule". toUpperCase() ) {
      window.open("sproduct1.html");
    }

    else if (a. toUpperCase() === "streetwear". toUpperCase()) {
        window.open("sproduct.html");
    }

    else if (a. toUpperCase() === "Bucket hat". toUpperCase()) {
        window.open("sproduct.html");
    }
    else if (a. toUpperCase() === "hat". toUpperCase()) {
        window.open("sproduct.html");
    }
    else if (a. toUpperCase() === "ca". toUpperCase()) {
        window.open("sproduct1.html");
    }
    else if (a. toUpperCase() === "cag". toUpperCase()) {
        window.open("sproduct1.html");
    }





    else{
alert("we don't have this product");
    }


}







  


const starwrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");
stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    
    starwrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIdx) => {
      if (otherIdx <=clickedIdx) {
        otherStar.classList.add("active");
      }
      
    });
   
     console. log(`star of index ${clickedIdx } was clicked`)
   // POST to backend yout star ranking
 
  });
});





