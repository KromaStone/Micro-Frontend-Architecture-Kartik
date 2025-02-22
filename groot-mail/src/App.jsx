import './App.css'
import Button from "grootConnect/Button";

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold  text-center bg-gray-100 p-4 rounded-lg">
        Groot Mail Application
      </h1>
      <p className="mt-2">This is the mail micro-frontend.</p>
      <div className='w-full flex justify-center '>
        <div className='w-44'>
          <Button onClick={() => alert("Button clicked by Chat App")}>
            Chat Button
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
