import { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import axios from 'axios';
import { StyledForm, StyledInput, StyledButton, StyledContext, StyledNav, StyledTextArea } from './form.style.js';

const Form = () => {
  const [formdata, setformdata] = useState({ 'paragraph': '', 'no': 3, 'length': 50 })
  const [question, setQuestion] = useState([])
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value })

  }
  //console.log(formdata)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:5000/home', {
      context: formdata.paragraph,
      Number: formdata.no,
      length: formdata.length
    })
      .then(function (response) {
        console.log(response.data);
        let d = response.data
        const generated_questions = d.generated_questions
        console.log(generated_questions)
        setQuestion([...question, ...generated_questions])
        console.log("printing data after response")



        //document.getElementById("Backend").innerHTML = response;
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const resetFunction = () => {
    setQuestion([])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='formbox'>
          <label>Enter the paragraph </label>
          <input id='paragraph' type='text' value={formdata.paragraph} onChange={handleChange} />
        </div>
        <div className='formbox'>
          <label>Enter the no of question </label>
          <input type='number' id='no' value={formdata.no} onChange={handleChange} />
        </div>
        <div className='formbox'>
          <label>Enter the length of answer </label>
          <input type='number' id='length' value={formdata.length} onChange={handleChange} />
          <button type='submit'>
            submit
          </button>
        </div>



      </form>

      <button onClick={resetFunction}>Next question</button>



      {

        question.length > 0 && question.map((datavalue) =>

          <div>

            <input type='description' style={{ width: '100vw' }} value={datavalue} />

          </div>



        )


      }
    </div>
  );
}

export default Form;