import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setLoading, setUserData } from "../../redux/userSlice"

const getCurrentUser = ()=>{
    let dispatch = useDispatch()
    useEffect(()=>{
        const fatchData = async(e)=>{
            try {
                let data = await axios.get("https://shri-vr-backend.onrender.com/getCurrent",
                // let data = await axios.get("http://localhost:8000/getCurrent",
                    {
                        withCredentials:true
                    }
                )
                dispatch(setUserData(data.data))
                
            } catch (error) {
                console.log(error.response.data.message)
            }finally {
                dispatch(setLoading(false));
            }
        }
        fatchData()
    },[])
}
export default getCurrentUser