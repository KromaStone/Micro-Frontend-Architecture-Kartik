import React from 'react';
import './App.css'
import { Suspense } from 'react';

function App() {
  const ChatApp = React.lazy(() => import("../../groot-chat/src/App"));
  const MailApp = React.lazy(() => import("../../groot-mail/src/App"));

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center p-4">
        Groot Connect Application
      </h1>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Main Application</h1>
        <div className='flex flex-col md:flex-row gap-4 justify-between'>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full h-50 mb-4 border-[1px] rounded-lg p-4 border-blue-400 bg-blue-100 hover:border-green-400 hover:bg-green-100 transition-all ease-in-out duration-300">
              <h2 className="text-md italic text-gray-500">Chat App</h2>
              <ChatApp />
            </div>
            <div className='w-full h-50  border-[1px] rounded-lg p-4 border-blue-400 bg-blue-100 hover:border-green-400 hover:bg-green-100 transition-all ease-in-out duration-300'>
              <h2 className="text-md italic text-gray-500">Mail App</h2>
              <MailApp />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
