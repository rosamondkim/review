const whatTodo = document.getElementById("whatTodo");
const todoBtn = document.querySelector("#whatTodo button");
const todoInput = document.querySelector("#whatTodo input");
const todoList = document.getElementById("todoList");
let toDos = [];
//toDos 라는 배열 생성

const TODOS_KEY =  "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    // todos array의 내용을 string으로 바꾼 후 localStorage에 넣는 함수.
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// localstroage에 있는 저장된 todos 변수들

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //자바스크립트가 읽을 수 있는 object로 변경하기 
    toDos = parsedToDos ; 
    // 이거 이해 잘 안된다. push 해줘야하는거아닌가?
    parsedToDos.forEach(paintTodo);
}

function paintTodo(tomato){
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    // li 랑 span 만들기
    span.innerText = tomato;
    // span에 newTodo값 넣어주기

    const button = document.createElement("button");
    button.innerText="✖️"
    //버튼 만들고, x아이콘 넣어주기
    button.addEventListener("click",deleteTodo)
    //버튼에 이벤트리스너 넣기, deletoTodo라는 함수 발동!
    listItem.appendChild(span);
    listItem.prepend(button);
    // listitem 마지막에 span 요소 넣고, 앞에 btn요소 넣기
    todoList.appendChild(listItem);
    //완성된 li 를 이제 todoList에 넣어주는거다
}

function deleteTodo(event){
    const deleteLi= event.target.parentElement;
    // 버튼을 누르면 li 자체를 삭제하는 함수.
    // 해당 btn이 속해있는 li 확인하려면 event함수 사용하기.
    deleteLi.remove();
}

function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    toDos.push(newTodo);
    paintTodo(newTodo);
    saveToDos();
    todoInput.value="";
}

todoBtn.addEventListener("click",handleTodo)

