// const ulList = document.querySelector('ul');
// const computedStyle = window.getComputedStyle(ulList);
// if(computedStyle.display === 'none'){
//     ulList.style.display = "block";
// }




 const inputData = document.getElementById("inputData") ;
const listContainer = document.getElementById("list-container");

function addList (){
   if(inputData.value === ""){
    alert("You must write something");
   }
   else{
    let li = document.createElement('li');
    li.innerHTML = inputData.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
   span.innerHTML = "\u00d7";
   li.appendChild(span);
   }
   inputData.value = "";
   saveData();
   
}

listContainer.addEventListener("click",function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      
   }

   else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      
   }
},false);

function saveData(){
   localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
   listContainer.innerHTML = localStorage.getItem("data");
}
showData();