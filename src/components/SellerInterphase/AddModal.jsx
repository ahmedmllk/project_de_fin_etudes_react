import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addproduct } from '../../store/slices/ProductSlice'
const AddModal = ({setshow,setempty}) => {
    const [image, setimage] = useState("")
    const [op, setop] = useState(false)
    const [Name, setName] = useState('')
    const [Brand, setBrand] = useState('')
    const [Price, setPrice] = useState(0)
    const [Sexe, setSexe] = useState('')
    const [Image, setImage] = useState('')
    const [produit, setproduit] = useState({name:'',brand:'',sexe:'',price:'',image:'',Owner:'aa'})
    const dispatch=useDispatch()

  return (
    <div className='modal'>
        <div className='smallmodal'>
        <div className='Filter hoo'>
      <h1>Criteria</h1>
        <h2>Name</h2>
        <input type="text" className='input' onChange={(e)=>setproduit({...produit,name:(e.target.value)})}/>
        <h2>Brand:</h2>
          <input type="text" className='input' onChange={(e)=>setproduit({...produit,brand:(e.target.value)})}/>
        <h2>Sexe</h2>
          <select id="p"   onChange={(e)=>setproduit({...produit,sexe:(e.target.value)})} name="" >
            <option value={"Male"} >Male</option>
            <option value={"Female"}  >Female</option>
          </select>
          
        <h2>Price:</h2>
        <input type="number" className='input' name="" id="" onChange={(e)=>setproduit({...produit,price:(e.target.value)})}/>
        <div className='Buttons'>
            <button onClick={()=>{setshow(false);setempty(false);dispatch(addproduct(produit))}} className='confirm'>Confirm</button>
            <button onClick={()=>{setshow(false);setName('');setBrand('');setPrice(0);setSexe('');setImage('')}} className='cancel'>Cancel</button>
        </div>
      </div>
      <div className='addPhoto'>
        <input type="file" label="Image"  name="myFile"  accept='.jpeg, .png, .jpg' id="file-upload" onChange={(e)=>{convertToBase64(e.target.files[0]).then((base64String)=>{setproduit({...produit,image:(base64String)})});setop(true)}} />
        {op?<img src={produit.image} alt="" />: <div><h1>ADD PHOTO</h1>
        <h2>+</h2></div> }
       
        
      </div>
        </div>
     
    </div>
  )
}

export default AddModal
function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }