const form = document.querySelector("form");
const input = document.querySelector("input");
const todoList = document.querySelector(".todoslist");
let items = JSON.parse(localStorage.getItem("items")) || [];

const fromLocal = () => {
    if(input.value){
        items.push(input.value);
        localStorage.setItem("items", JSON.stringify(items));
    }
    console.log(items);
    todoHtml = ""
    items.forEach((item) => {
      todoHtml += `<div class="todo">
<p>${item}</p>
<span>&times;<span>
    </div> 
`;
    });
   todoList.innerHTML = todoHtml
    input.value = "";
  }

const renderTodos = (e) => {
  e.preventDefault();
  if(input.value){
    fromLocal();
}
};
const strikenRemove = (e) => {
  // console.log(e.target)
  if (e.target.nodeName == "P") {
    const ele = e.target;
    ele.classList.toggle("strike");
  } else if (e.target.nodeName == "SPAN") {
    const ele = e.target.parentNode;
    console.log(e.target.previousElementSibling.innerText)
    const txt = e.target.previousElementSibling.innerText
    items.map((item,index)=>{
    if(item == txt){
    items.splice(index,1)
    localStorage.setItem("items", JSON.stringify(items));
    }
    })
    // console.log(ele)
    ele.remove();
  }
};
form.addEventListener("submit", renderTodos);
todoList.addEventListener("click", strikenRemove);
fromLocal()