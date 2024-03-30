import { useEffect, useState } from "react"

const DarkMode = () => {
    const [isMonthly , setIsMonthly] = useState(false)
    useEffect(()=>{
        if (isMonthly ) {
            document.body.classList.add('dark')
        }else{
            document.body.classList.remove('dark')
        }
    },[isMonthly])
  return (
    <div>
        <label>
            <input type='checkbox' onChange={()=>  setIsMonthly(!isMonthly)}/>
        </label>
        <p>{isMonthly?"dark":'ligth'}</p>
    </div>
  )

}

export default DarkMode