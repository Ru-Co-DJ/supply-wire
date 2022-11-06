import axios from "axios";


export const getData = async ()=>{
    try {
        const result = await axios.get("http://localhost:5001");
        return result.data;
    } catch (error) {
        
    }
}
