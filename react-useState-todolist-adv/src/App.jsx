import { useState } from "react";
import "./App.css";

// we have controlled and uncontrolled components

function Card({ todo, handlerEdit,handlerDelete }) {
  //Uncontrolled components
  const [isEdit, setIsEdit] = useState(false);
  const { title, id } = todo;
  const saveEdit = (e) => {
    handlerEdit({ id, value: e.target.value });
    setIsEdit(false);
    console.log("saveEdit");
  };
  return (
    <section className="Card" key={id}>
      {!isEdit ? (
        <h3>{title}</h3>
      ) : (
        <input onBlur={saveEdit} type="text" defaultValue={title} />
      )}
      <div className="Action">
        {!isEdit ? <button onClick={() => setIsEdit(true)}>Edit</button> : null}
        <button onClick={()=>handlerDelete(id)} >Delete</button>
      </div>
    </section>
  );
}
function App() {
  const [layout, setLayout] = useState(" layout-varible");
  const [todos, setTodos] = useState([]);

  const title = "your dreams to do list";
  const descrip = "Controller Todos";

  console.log("Layout", layout);

  const handlerAdd = (event) => {
    console.log("Click event:", event.target.todotitle);
    event.preventDefault();

    //const value =event.target.todotitle.value
    const { value } = event.target.todotitle;

    //guard

    if (!value) return alert("Please enter a todo ");
    console.log("value: ", value);

    const newTodo = {
      title: value.trim(),
      id: Date.now(),
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
    //reset insite input part
  };

  const handlerEditTodo = ({ id, value }) => {
    console.log(value, id);
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: value };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handlerDeleteTo = (id) => {
    console.log(id);
    const newdeleted= todos.filter((item)=> item.id !== id);
    setTodos(newdeleted);
  };
  console.log("todos:", todos);

  return (
    <div>
      <h1>{title}</h1>
      <div className="LayoutAction">
        <h3>Layout</h3>
        <button
          onClick={() => setLayout("rows")}
          style={{ border: layout === "row" ? "2px solid blue " : "" }}
        >
          Row
        </button>
        <button
          onClick={() => setLayout("cols")}
          style={{ border: layout === "row" ? "2px solid blue " : "" }}
        >
          Cols
        </button>
      </div>
      <br />

      <form className="Form" onSubmit={handlerAdd} action="">
        <h3>{descrip}</h3>
        <input className="inp-border " type="text" name="todotitle" />

        {/* burda reset() functionun ikisi icinde calistigina baktik */}
        {/* <input className="inp-border " type="text" name="todotitle" /> */}

        <button type="submit">Add</button>
        <button onClick={() => setTodos([])} type="button">
          Clear
        </button>
      </form>

      {todos.length < 0 ? (
        <div className="Fallback"></div>
      ) : (
        <div>
          <h2>You can chill to day</h2>{" "}
        </div>
      )}

      <main className={layout === "cols" ? "CardsLayout Cols" : "CardsLayout"}>
        {todos.map((todo) => (
          <Card
            handlerDelete={handlerDeleteTo}
            handlerEdit={handlerEditTodo}
            todo={todo}
            key={todo.id}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
