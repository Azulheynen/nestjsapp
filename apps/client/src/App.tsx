
import './App.css'

function App() {
  return (
   <button onClick={async() => {
   const response = await fetch('/api')
   const data = response.text()
   console.log(data)
   }}>
     Soy un frontend y funciono
   </button>
  )
}

export default App
