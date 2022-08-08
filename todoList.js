const whatTodo = document.getElementById("whatTodo");
const todoBtn = document.querySelector("#whatTodo button");
const todoInput = document.querySelector("#whatTodo input");
const todoList = document.getElementById("todoList");
let toDos = [];
//toDos 라는 배열 생성

const TODOS_KEY =  "toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // todos array의 내용을 string으로 바꾼 후 localStorage에 넣는 함수.
}

const savedToDos = localStorage.getItem(TODOS_KEY);
// localstroage에 있는 저장된 todos 변수들

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //자바스크립트가 읽을 수 있는 object로 변경하기 
    toDos = parsedToDos ; 
    parsedToDos.forEach(paintTodo);
}

function paintTodo(tomato){
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    // li 랑 span 만들기
    span.innerText = tomato.text;
    // span에 newTodo값 넣어주기
    listItem.id = tomato.id;
    // li에 id값 부여해주기
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
    const li= event.target.parentElement;
    // 버튼을 누르면 li 자체를 삭제하는 함수.
    // 해당 btn이 속해있는 li 확인하려면 event함수 사용하기.
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // 우리가 클릭한 li.id가 아닌 것들은 남겨두고 싶음
    saveToDos();
}


function handleTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text: newTodo,
        //텍스트는 newTodo의 value값 얻고
        id: Date.now(),
        //랜덤한 숫자의 id 얻기
       };
    toDos.push(newTodoObj);
    //obj 형태로 array에 저장한다
    paintTodo(newTodoObj);
    saveToDos();
}

todoBtn.addEventListener("click",handleTodo);

