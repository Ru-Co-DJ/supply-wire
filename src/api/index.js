import axios from "axios";
import {gql} from "@apollo/client"

// export const getData = async ()=>{
//     try {
//         const result = await axios.get("http://localhost:5001");
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const getProduct = async (id)=>{
//     try{
//         const res = await axios.get(`http://localhost:5001/products/${id}`)
//         return res.data
//     }catch(error){
//         console.log(error)
//     }
// }

export const getOneProductGQL = gql`
    query getOneProduct($id:ID){
        product(id: $id){
            id
            name
            price
            description
            datePosted
            quantity
            color
            category
            images
            serie
            storeObj{
                name
                id
            }
            rate
            brand
            sales
            reviews{
                name
                rate
                review
                date
            }
        }
    }
    
`

export const getProductsGQL = gql`
    query getProducts{
        products{
            id
            name
            price
            datePosted
            images
            storeObj{
                name
            }
            sales
            reviews{
                name
            }
        }
    }
`

export const getStore = gql`
    query getOneStore($id:ID){
        store(id: $id){
            name
            rate
            sales
            rank
            description
            dateOpened
            productsObj{
                id
                name
                images
                price
                category
            }
            image
            reviews{
                name
                date
                rate
                review
            }
        }
    }
`

export const getStores = gql`
    query getstores{
        stores{
            id
            name
            image
            dateOpened
            rank
            rate
            sales
            description
        }
    }
` 