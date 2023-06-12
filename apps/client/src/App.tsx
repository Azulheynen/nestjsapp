
import './App.css'

function App() {
  return (
    <div className=''>
   <button onClick={async() => {
   const response = await fetch('/api')
   const data = response.text()
   console.log(data)
   }}>
     Soy un frontend y funciono
   </button>
   </div>
  )
}

export default App
