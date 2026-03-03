import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setOtherUser } from "../../redux/userSlice"

const getOtherUser = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async (e) => {
            try {
                let data = await axios.get("https://shri-vr-backend.onrender.com/getOther",
                // let data = await axios.get("http://localhost:8000/getOther",
                    { withCredentials: true })
                dispatch(setOtherUser(data.data))

            } catch (error) {
                console.log(error.response.data.message)

            }
        }
        fetchData()
    }, [])
}

export default getOtherUser