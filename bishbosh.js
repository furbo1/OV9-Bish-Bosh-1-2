//Ex 1 Bish-Bosh 
(function BishBosh(){
  for(let i = 1; i < 101; i++)
    {
      if(i % 12 === 0){
        console.log("Bish-Bosh")
      }else if(i % 3 === 0){
        console.log("Bish")
      }else if(i % 4 === 0)
        {
          console.log("Bosh")
        }
      else {
        console.log(i)
      }
    }
})()

document.addEventListener("DOMContentLoaded", function () {

  //Ex 2
  
let bish = document.getElementById('bish').value
let bosh = document.getElementById('bosh').value
let limit = document.getElementById('limit').value
let listItem = document.getElementsByTagName('li')

let err = document.getElementById('error')
let list = document.getElementById('list')
let btn = document.getElementById('btn')
let clr = document.getElementById('clear')




function refreshPage(){
  if(bish != "" && bosh != "" && limit != "" ){
    window.location.reload();
  }
}

function BishBash2(){
 
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
        let li = document.createElement("LI")
        let text = document.createTextNode("Bish-Bosh")
        li.appendChild(text)
        list.appendChild(li)
         
      }else if(i % bish === 0){
        let li = document.createElement("LI")
        let text = document.createTextNode("Bish")
        li.appendChild(text)
        list.appendChild(li)
       
      }else if(i % bosh === 0){
        let li = document.createElement("LI")
        let text = document.createTextNode("Bosh")
        li.appendChild(text)
        list.appendChild(li)
         
        }
      else {
        let li = document.createElement("LI")
        li.innerHTML += `${i}`
        list.appendChild(li)
       
      }
    }
    
  }
  
  
  
}

function reload(){
  let container = document.getElementById("list");
  let content = container.innerHTML;
  container.innerHTML= content; 

  
}


function Clear(){
  form.reset();
}

btn.addEventListener("click", (e) =>{
  e.preventDefault()
  BishBash2()
  
})

clr.addEventListener("click", Clear())

 
  btn.addEventListener('click', () => {
      // handle the click event
      console.log('clicked');
  });

  clr.addEventListener('click', () => {
    // handle the click event
    console.log('clear clicked');
});

  
  });

  
  


