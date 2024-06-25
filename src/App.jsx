import { useState } from 'react'
import InputForm from './Component/InputForm'
import Card from './Component/Card'
import Transaction from './Component/Transaction'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar'
import { negetiveInventory , setCardDetails } from './Redux/Reducer';
import  History from './Component/History'




function App() {
  const dispatch = useDispatch()
  const [number, setNumber] = useState("");
  const [cvv2, setCvv2] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [inventory, setInventory] = useState("");
  const [numberT, setNumberT] = useState("");
  const [cvv2T, setCvv2T] = useState("");
  const [yearT, setYearT] = useState("");
  const [monthT, setMonthT] = useState("");
  const [nameT, setNameT] = useState("");
  const [passwordT, setPasswordT] = useState("");
  const [inventoryT, setInventoryT] = useState("");
  const [idCardT , setidCardT] = useState('')

  const {list}=useSelector((state)=>state.card);

  // const SelectCard = (event) => {
  //   const foundedCard =list.map((card)=>{
  //     return card.id === event.id;
  //   })
  //   console.log(foundedCard)

  //   if(foundedCard){
  //     setNumberT(event.number),
  //     setCvv2T(event.cvv2),
  //     setPasswordT(event.password),
  //     setNameT(event.name),
  //     setMonthT(event.month),
  //     setYearT(event.year)
  //     setidCardT(event.id)
  //   }

  // }

  const SelectCard = (card) =>{
    dispatch(setCardDetails(card))
  }

  const handelNegetive = (negetivePrice , id) => {
    dispatch(negetiveInventory({negetivePrice , id}))
    console.log(handelNegetive)
  }
 


  

  return (
    <>
      <Navbar/>
      <div
       className='flex justify-center flex-col items-center'
       
       >
    <Routes>
          <Route index element={   
    <InputForm/>}/>
    <Route path='/Transaction' element={

<Transaction  numberT={numberT}
    setNumberT={setNumberT}
    cvv2T={cvv2T}
    setCvv2T={{setCvv2T}}
    yearT={yearT}
    setYearT={setYearT}
    monthT={monthT}
    setMonthT={setMonthT}
    nameT={nameT}
    setNameT={setNameT}
    passwordT={passwordT}
    setPasswordT={setPasswordT}
    inventoryT={inventoryT}
    setInventoryT={setInventoryT}
    idCardT={idCardT}
    setidCardT={setidCardT}
    handelNegetive={handelNegetive}
/> }/>
<Route
path='/history'
element={<History/>}
/>
    </Routes>
    {list.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                Number={item.number}
                Password={item.password}
                Cvv2={item.cvv}
                Year={item.year}
                Month={item.month}
                Inventory={item.inventory}
                SelectCard={() => SelectCard(item)}
              />
            );
          })}
    </div>
    </>
  )
}

export default App
