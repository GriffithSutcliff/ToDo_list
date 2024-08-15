import light_desk from "./images/bg-desktop-light.jpg";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <img className="desktop" src={light_desk} />
      <div className="todo-list">
          <h3 className="logo">TODO</h3>
        <Todo />
      </div>
    </div>
  );
}

export default App;
