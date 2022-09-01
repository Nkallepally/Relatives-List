// import React from 'react'
// const names=['Relative name','Relative name','Relative name','Relative name',]
// const App = () => {
//   const nameList=names.map((name,i)=><li key={name.split(' ').splice(0,1).toString().toLowerCase()+"list"+(i+1)}>{name+(i+1)}</li>)
//   console.log(nameList)
//   return (
//     <div>
//  <ol>Relative List{nameList}</ol>
//     </div>
//   )
// }

// export default App

import React,{useState} from 'react'

const App=()=>{
  const[toDoitems,settoDoitems]=useState(["Relative name"])
  const renderList=()=>{
      return toDoitems.map((item,index)=>{
          return <li key={item+index}>{item+index}</li>
      })
  }
  const handleAddItem=()=>{
      settoDoitems([...toDoitems,"Relative name"])
  }
   return(
      <div>
          <ul>
          {renderList()}
          </ul>
          <button onClick={handleAddItem}>Add Relatives</button>
      </div>
   )
  }

export default App