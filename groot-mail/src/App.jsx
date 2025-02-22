import './App.css'
import Button from "grootConnect/Button";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold  text-center bg-gray-100 p-4 rounded-lg">
        Groot Mail Application
      </h1>
      <p className="mt-2">This is the mail micro-frontend.</p>
      <Button onClick={() => alert("Button clicked by Chat App")}>
        Chat Button
      </Button>
    </>
  )
}

export default App
