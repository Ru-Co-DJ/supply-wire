import axios from "axios";


export const getData = async ()=>{
    try {
        const result = await axios.get("http://localhost:5001");
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (id)=>{
    try{
        const res = await axios.get(`http://localhost:5001/products/${id}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}