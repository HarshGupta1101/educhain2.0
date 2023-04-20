import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Divider } from '@mui/material';

function Assignment() {
  const [questions, setQuestions] = useState([
    {
      questionNumber: 1,
      question: '',
      options: ['', '', '', ''],
      answer: '',
    },
  ]);

  const handleQuestionChange = (event, index) => {
    const { value } = event.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[index].question = value;
      return updatedQuestions;
    });
  };

  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[questionIndex].options[optionIndex] = value;
      return updatedQuestions;
    });
  };

  const handleAnswerChange = (event, index) => {
    const { value } = event.target;
    setQuestions((prevState) => {
      const updatedQuestions = [...prevState];
      updatedQuestions[index].answer = value;
      return updatedQuestions;
    });
  };

  const addQuestion = () => {
    setQuestions((prevState) => [
      ...prevState,
      {
        questionNumber: prevState.length + 1,
        question: '',
        options: ['', '', '', ''],
        answer: '',
      },
    ]);
  };

  const handleSubmit = () => {
    questions.map((question) => {
      question.answer = question.options[parseInt(question.answer)];
    });
    console.log(questions);
  };

  return (
    <>
      <Box
        component='form'
        sx={{
          '& .MuiTextField-root': { m: 2, width: '50vw' },
        }}
        noValidate
        autoComplete='off'
      >
        {questions.map((question, index) => (
          <div key={index}>
            <TextField
              id={`question-${index}`}
              label={`Enter Question ${index + 1}`}
              multiline
              maxRows={3}
              fullWidth
              value={question.question}
              onChange={(event) => handleQuestionChange(event, index)}
            />

            <RadioGroup
              aria-labelledby={`options-${index}-label`}
              name={`options-${index}`}
              className='mx-4'
              value={question.answer}
              onChange={(event) => handleAnswerChange(event, index)}
            >
              {question.options.map((option, optionIndex) => (
                <FormControlLabel
                  key={optionIndex}
                  value={`${optionIndex}`}
                  control={<Radio />}
                  label={
                    <TextField
                      id={`option-${index}-${optionIndex}`}
                      label={`Enter Option ${optionIndex + 1}`}
                      multiline
                      value={option}
                      onChange={(event) =>
                        handleOptionChange(event, index, optionIndex)
                      }
                    />
                  }
                />
              ))}
            </RadioGroup>

            <Divider />
          </div>
        ))}

        <div className='m-4'>
          <Button
            variant='outlined'
            color='warning'
            onClick={addQuestion}
            style={{ marginRight: '20px' }}
          >
            <AddCircleOutlineIcon className='mx-2' /> Add More Questions
          </Button>

          <Button
            variant='outlined'
            color='warning'
            onClick={handleSubmit}
            style={{ marginRight: '20px' }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Assignment;