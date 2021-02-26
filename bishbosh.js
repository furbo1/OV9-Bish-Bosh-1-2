//Ex 1 Bish-Bosh 
// (function BishBosh(){
//   for(let i = 1; i < 101; i++)
//     {
//       if(i % 12 === 0){
//         console.log("Bish-Bosh")
//       }else if(i % 3 === 0){
//         console.log("Bish")
//       }else if(i % 4 === 0)
//         {
//           console.log("Bosh")
//         }
//       else {
//         console.log(i)
//       }
//     }
// })()



  //Ex 2
 
let bish = document.getElementById('bish').value
let bishInput =  document.getElementById('bish')
bishInput.addEventListener('keyup', function() {
  document.getElementById('bish').setAttribute("value", this.value)
  
})



let bosh = document.getElementById('bosh').value
let boshInput = document.getElementById('bosh')
boshInput.addEventListener('change', function() {
  document.getElementById('bish').setAttribute("value", bosh)
  
})



let limit = document.getElementById('limit').value
let limitInput =  document.getElementById('limit')
limitInput.addEventListener('change', function() {
  document.getElementById('bish').setAttribute("value", limit)
  
})

let listDiv = document.getElementById('list-group')
let body = document.getElementById('body')


let err = document.getElementById('error')
let list = document.getElementById('list')
let btn = document.getElementById('btn')
let clr = document.getElementById('clear')



// function changeField(e){
//   e.target.id = e.target.value
//   console.log(e.target.value)
// }

function BishBosh2(bish,bosh, limit){
  bish = bishInput.value;
  bosh = boshInput.value;
  limit = limitInput.value;
  if(bish < 0 || bosh < 0 || limit < 0 ){
    if(err.innerText == ""){
      let text = document.createTextNode('Numbers cannot be negative!')
    err.appendChild(text)
    }
  }else if(isNaN(bish) || isNaN(bosh)|| isNaN(limit) ){
    if(err.innerText == ""){
      let text = document.createTextNode('Only numbers are accepted!')
    err.appendChild(text)
    }
    
  }
  else if(!list.firstChild) {
    
    for(let i = 1; i < limit; i++)
    {
      if(i % (bish * bosh) === 0){
        let li = document.createElement("li")
        let text = document.createTextNode("Bish-Bosh")
        li.appendChild(text)
        
        list.appendChild(li)
        
       
         
      }else if(i % bish === 0){
        let li = document.createElement("li")
        let text = document.createTextNode("Bish")
        li.appendChild(text)
       
        list.appendChild(li)
        
       
       
      }else if(i % bosh === 0){
        let li = document.createElement("li")
        let text = document.createTextNode("Bosh")
        li.appendChild(text)
        li.innerText = "Bosh"
        list.appendChild(li)
        }
      else {
        let li = document.createElement("li")
        li.innerText = `${i}`
        list.appendChild(li)
        
       
      }
    }
    
  }
  
 
}


function Clear(){
  // form.reset();
  document.getElementById('bish').setAttribute("value", "")
  
  document.getElementById('bosh').setAttribute("value", "")
  
  document.getElementById('limit').setAttribute("value", "")
  
}

btn.addEventListener("click", (e)=>{
  e.preventDefault();
  bishInput.addEventListener('change', function() {
    document.getElementById('bish').setAttribute("value", bishInput.value)
    
  })
  boshInput.addEventListener('change', function() {
    document.getElementById('bish').setAttribute("value", boshInput.value)
    
  })
  limitInput.addEventListener('change', function() {
    document.getElementById('bish').setAttribute("value", limitInput.value)
    
  })
   
   
    
 
  BishBosh2(bishInput.value, boshInput.value, limitInput.value)
  console.log(bishInput.value, boshInput.value, limitInput.value, "clicked bishInput")
  
  document.getElementById('body').classList.remove("willnotrender")
  document.getElementById('body').classList.add("willnotrender")
  body.offsetHeight
  // window.getComputedStyle()
})
 


clr.addEventListener("click", Clear)

 
  
  