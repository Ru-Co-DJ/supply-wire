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
            category
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

export const login = gql`
    query login($email: String!, $password: String!){
        user(email: $email, password: $password){
            fullName
            location
            store
        }
    }
`

export const addProductGQL = gql`
  mutation AddProduct(
    $name:String!,
    $price:Float!,
    $description:String!,
    $datePosted:String!,
    $quantity:Int!,
    $color:String!,
    $category:String!,
    $images:[String]!,
    $serie:String!,
    $store:ID!,
    $rate:Float!,
    $brand:String!,
    $sales:Int!,
    $reviews: [String]!
  ) {
    AddProduct(name:$name, price:$price, description:$description, datePosted:$datePosted, quantity:$quantity, color:$color, category:$category, images:$images, serie:$serie, store:$store, rate:$rate, brand:$brand, sales:$sales, reviews:$reviews) {
        name
    }
  }
`;

export const storeImages = async (images)=>{
    try {
        const result = await axios.post("http://localhost:5001/store-images",images,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        return result.data //? array of images urls
    } catch (error) {
        console.log(error)
        return null
    }
}