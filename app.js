// input amount function 

function amountUpdate(product,total,amount,isIncreasing){
    const numInput= document.getElementById(product+"-change");
    let numVal= numInput.value;
    if(isIncreasing){
        numVal= parseInt(numVal) +1;
    }else if(numVal>0){
        numVal= parseInt(numVal) -1;
    }
    numInput.value = numVal;
  const phoneAmount = document.getElementById(total+"-change");
     phoneAmount.innerText= numVal* amount;
        updateTotal();
        
       
}

// total calculate function 

function updateTotal(){
   const phoneInput= document.getElementById("number-change");
   const newInput = parseInt(phoneInput.value);
   const phoneTotal = newInput *1219;
   const caseInput= document.getElementById("case-change");
   const newCase= parseInt(caseInput.value);
   const totalCase = newCase * 59;
   const subTotalInput = document.getElementById("sub-total");
   const subTotal = phoneTotal+ totalCase;
   subTotalInput.innerText= subTotal;

//  tax update 
   const tax= document.getElementById("tax");
   const taxTotal= subTotal/10;
   tax.innerText= taxTotal
//  total update 

const allTotal = document.getElementById("all-total");
const alltotalInput= subTotal +taxTotal;
allTotal.innerText= alltotalInput;


  
}


// all event listener 

document.getElementById("phone-plus").addEventListener("click",function(){

 amountUpdate("number","price",1219,true);
});

document.getElementById("phone-minus").addEventListener("click",function(){
    amountUpdate("number","price",1219,false);
})

document.getElementById("case-plus").addEventListener("click",function(){
    amountUpdate("case","amount",59,true);
})
document.getElementById("case-minus").addEventListener("click",function(){
    amountUpdate("case","amount",59,false);
})