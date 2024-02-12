import React,{useState,useEffect} from 'react'
import { MDBRow,MDBCol,MDBListGroup,MDBBtn } from 'mdb-react-ui-kit';
import './App.css';
import Quiz from './components/quiz';
import { prizeMoney, data } from './data' 
import Timer from './components/timer';
import Start from './components/start';

function App() {
  const [questionNumber,setQuestionNumber] = useState(1)
  const [timeout,setTimeout] = useState(false)
  const [name,setName] = useState(null)
  const [earned,setEarned] = useState('$ 0')

  useEffect(()=>{
    questionNumber > 1 &&
    setEarned(
      prizeMoney.find((item)=>item.id === questionNumber - 1).amount
    )
  },[questionNumber])

  return (
    <div className="App">
      {
        !name ? (<Start 
          setName={setName}
          setTimeout={setTimeout}
        />) : (
          <MDBRow>
          <MDBCol md='9'>
             <div className='main'>
              {
                timeout ? (
                  <h3 className='earned' style={{color:'orangered', fontWeight:'600'}}>Your Earned total : {earned}</h3>
                ) : (
                  <>
                   <div className='timer' style={{height:'50%', position:'relative'}}>
                <Timer
                  setTimeout={setTimeout}
                  questionNumber={questionNumber}
                />
              </div>
               <div style={{height:'50%'}}>
                 <Quiz 
                  data={data}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                  setTimeout={setTimeout}
                 />
               </div>
                  </>
                )
              }
              
             </div>
          </MDBCol>
          <MDBCol md='3' className='money'>
            <MDBListGroup className='money-list'>
              <MDBRow>
                <span className='mb-2'>
                   <MDBBtn style={{float:'right'}} className='mx-2' color='light' onClick={()=>setTimeout(true)}>
                    Quit
                   </MDBBtn>
                   <MDBBtn className='ms-1' style={{float:'right'}} onClick={()=>{
                    setName(null)
                    setQuestionNumber(1)
                    setEarned('$ 0')
                   }}>
                    Exit
                   </MDBBtn>
                </span>
                <MDBCol md='6'>Name:{name}</MDBCol>
                <MDBCol md='6'>Total Earned:{earned}</MDBCol>
              </MDBRow>
              <hr />
              {
                prizeMoney.map((item)=>(
                    <>
                     <li className={questionNumber === item.id ? 'item active' : 'item'}>
                      <div className='amount'>{item.amount}</div>
                      </li>
                    </>
                ))
              }
            </MDBListGroup>
          </MDBCol>
        </MDBRow>
        )
      }
     
    </div>
  );
}

export default App;
