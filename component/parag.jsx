import React from 'react'
import "./MyFirst.css"
import ImageCube from "../src/assets/image-equilibrium.jpg"
import ImageFace from "../src/assets/image-avatar.png"

const MyFirst = () => {
  return (
    <body>
    <div>
        <div className='cardcentral'> 
            <div className='imageUn'>
                <img src={ImageCube} alt="" />
            </div>
            <h1>Equilibrum</h1>
            <p>Our equilibrum lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque alias ratione, delectus ut omnis cum laudantium sequi provident soluta expedita, eius, deleniti perspiciatis quibusdam illum.</p>
            <div className='ligneText'>
                <h2>0.041ETH</h2>
                <p>3 days left</p>
            </div>
            <div className='sousLaLigne'>
                <img className='imageAva' src={ImageFace} alt="" />
                <p>Created by...</p>
            </div>
        </div>
    </div>
    </body>
  )
}

export default MyFirst