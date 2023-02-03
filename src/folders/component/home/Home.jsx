import React,{useState} from 'react'
import '../../styles/brand.scss'
import Brand from './Brand';
import Footer from './Footer';
import img1 from '../../asset/Untitled design (4).png'
import img2 from '../../asset/Untitled design (3).png';
import img3 from '../../asset/240_F_376357853_snKQw2dCSVXUpML7zisIsw2ObcnVmsAU.jpg';


import in_img from '../../asset/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg';

import de_img from '../../asset/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'
const Home = () => {

const arr = [img1,img2,img3]
const [data , setdata] = useState(1)
function increase() {
  if (data < arr.length){
    setdata(data+1)

  }else{
    setdata(0)
  }
}

function deacreas() {
  if (data ==0){
    setdata(arr.length)
  }else{
    setdata(data-1)

  }
}
// console.log(data)
  return (
    <div className='home'>

      <div className="caru">
        <img src={in_img} alt="1" onClick={()=>increase()} className="in" />
        <img src={arr[data]} alt="main" />

        <img src={de_img} alt="2" onClick={()=>deacreas()} className="de"/>
      </div>
      <h1 >TOP PICK BRAND</h1>
      <Brand/>
      <h1 >FOR MEN </h1>
      <Brand/>

     <h1 >FOR WOMEN</h1>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default Home