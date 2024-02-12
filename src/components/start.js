import React, { useRef } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

const Start = ({setName,setTimeout}) => {
   const inpurRef = useRef()

   const handleClick=()=>{
     setTimeout(false)
     inpurRef.current.value && setName(inpurRef.current.value)
   }

    return (
    <div style={{
        margin:'auto',
        padding:'15px',
        maxWidth:'400px',
        alignContent:'center',
        marginTop:'300px'
        }}>
       <input type='text' placeholder='Enter name' ref={inpurRef} className='form-control' />
       <MDBBtn className='mt-2' style={{width:'100%'}} onClick={handleClick}>
          start Game
       </MDBBtn>
    </div>
  )
}

export default Start