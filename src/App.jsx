import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
let myObj =[{
  name :"ali",
age : 16,
Rollno :25
},
{
  name:"ahmad",
  age:23,
  Rollno :50
},{
  name:"Syed Talal",
  age:21,
  Rollno :51
}]
// console.


let arr =[1,2,3,4]
  return (
    <>
         <h1 className="text-3xl font-bold underline bg-green-400 text-white rounded p-5">
      Hello world!
    </h1> <br/>
    {/* <Card name= "syedtalal" rollno="21" someobj = {myObj} anotherObj={arr}/> <br/> */}
{myObj.map(Obj=> (
    <Card  name={Obj.name}  age = {Obj.age} Rollno = {Obj.Rollno}/>
))}
    {/* <Card myObj={myObj}/> */}
    {/* <Card attributes={myObj}/> */}
{/* we use Card twice as a component but lets say we have to add diffenent data in the card like name and picture ans
discrription so to do this we use loop to display card but each card represents its own information tw is information ka intezam props se hta hy  components ka access rhta h props pe*/}
    <br/>















    </>
  )
}

export default App
