import SelectUser from "./components/Select/select";
import ListTask from "./components/Task/listTask.jsx"
import "./input.css";
function App() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="!container mx-auto">
        <p className="font-bold text-xl mb-3">User</p>
        <SelectUser />
        <ListTask />
      </div>
    </div>
  );
}

export default App;
