import "./App.css";
import storage from "./hooks/useLocalStore";

function App() {
  storage.set("name", "pasan");
  const value = storage.get<string>('name');
  storage.remove("name");
  return <div className="App">
    <p>{value}</p>
  </div>;
}

export default App;
