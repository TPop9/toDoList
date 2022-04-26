import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import AddNewTask from "./components/AddNewTask";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/todos")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <AddNewTask setData={setData} />
      <ToDoList data={data} setData={setData} />
    </div>
  );
}

export default App;
