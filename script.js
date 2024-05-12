let btn= document.querySelector("button");
let ul= document.querySelector("ul")
let inp= document.querySelector("input")



btn.addEventListener("click",function(){
  //create li item to add in list
  let item= document.createElement("li");
  item.innerText=inp.value;    //copying input value to item

  //creating delete button 
  let btnele= document.createElement("button");
  btnele.innerText="delete";
  btnele.classList.add("delete");
  //append button to item then item to ul
  item.appendChild(btnele)
  ul.appendChild(item);
  inp.value="";   // after adding the task the content should be clear from input box
})

ul.addEventListener("click",function(event){
  if (event.target.nodeName=="BUTTON")
    {
      let listitem=event.target.parentElement;
      listitem.remove();
    }
})