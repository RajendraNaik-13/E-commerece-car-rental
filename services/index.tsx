import request, { gql } from "graphql-request"
import { getDefineEnvPlugin } from "next/dist/build/webpack/plugins/define-env-plugin"
const mastere_url='https://ap-south-1.cdn.hygraph.com/content/cm2bwm0bk00bi07waaeuk7yph/master'
export const getCarList=async()=>{
    const query=gql`
    query MyQuery {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          url
        }
        carBrand
        carType
      }
    }`
 
     const result=await request(mastere_url,query)
     return result
}
export const getStoreLocations=async()=>{
  const query=gql`
  query MyQuery {
  storesLocation(where: {}) {
    adress
  }
}`
  const result=await request(mastere_url,query)
  return result
} 

export const createBooking=async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "`+formValue.userName+`", 
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`", 
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.dropOffTime+`", 
      contactNumber: "`+formValue.contactNumber+`", 
      carId: {connect: 
        {id: "`+formValue.carId+`"}}}
    ) {
      id
    }
  }
  
  `

  const result=await request(mastere_url,mutationQuery);
  return result;
}