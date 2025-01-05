
import React from "react"
export function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  React.useEffect(()=>{
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem = JSON.parse(localStorageItem)
        if(!parsedItem){
          parsedItem = initialValue
        }else{
          setItem(parsedItem)
        }
        setLoading(false)
      }catch(error){
        console.log(error)
        setLoading(false)
        setError(true)
      }
    }, 2000);
  },[]) 
  const [item, setItem] = React.useState(initialValue)
  const saveItem = (newArray) =>{
    const newArrayS = JSON.stringify(newArray)
    localStorage.removeItem(itemName)
    localStorage.setItem(itemName, newArrayS)
    setItem(newArray)
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}