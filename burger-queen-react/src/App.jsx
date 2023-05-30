import { useState } from 'react'
import './App.css'

function ButtonG(){
  return (
    <button>ingresa</button>
  )
}
function ImgKat (){
return (
<div>
<img src='https://i.imgur.com/MK3eW3As.jpg' alt='katherine'/>;
</div>
)
} 

function App() {
  return (

      <div>
        <h1 className='titulo'>bienvenido mesero!</h1>
        <ButtonG />
        <ImgKat/> 
        </div>
        
  )
}

export default App
