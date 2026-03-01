import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUserData } from "./redux/userSlice"

const getCurrentUser = ()=>{
    let dispatch = useDispatch()
    useEffect(()=>{
        const fatchData = async(e)=>{
            try {
                let data = await axios.get("http://localhost:8000/getCurrent",
                    {
                        withCredentials:true
                    }
                )
                dispatch(setUserData(data.data))
            } catch (error) {
                console.log(error)
            }
        }
        fatchData()
    })
}
export default getCurrentUser