
import TransactionForm from "./components/TransactionForm/TransactionForm";
import "./input.css";
function App() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-align-items">
      <div className="!container mx-auto !w-1/2 border border-gray-300 rounded">
        <TransactionForm/>
      </div>
    </div>
  );
}

export default App;
