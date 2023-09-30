import React from 'react';
const todoList = [
  {title: "Code The Dream",
  id: 1,
  lesson: 1.1,
},
  {title: "Flamingo React Class",
  id: 2,
  lesson: 1.1,
},
  {title: "Complete The Assignment",
  id: 3,
  lesson: 1.1,
},
];
function App() {
  return (
    <div> 
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item){
          return <li key={item.id}>
                  <a href={item.id}> {item.title}
                  <span> {item.id} </span>
                  <span> {item.lesson} </span>
                  </a>
                </li>
        })}
      </ul>
    </div>
  );
}

export default App;
