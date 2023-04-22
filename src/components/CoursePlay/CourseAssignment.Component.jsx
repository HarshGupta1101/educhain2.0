import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

function CourseAssignmentComponent(props) {
  const [questions, setQuestions] = useState(props.courseAssessmentIds);
  const userAnswerArray = [];

  const handleAnswerChange = (event, index) => {
    const { value } = event.target;
    if (index < userAnswerArray.length) {
      userAnswerArray[index] =
        questions[index][`option${String.fromCharCode(65 + parseInt(value))}`];
    } else {
      userAnswerArray.push(
        questions[index][`option${String.fromCharCode(65 + parseInt(value))}`]
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userAnswerArray);
    const intitalScore = questions.length;
    let yourScore = 0;
    userAnswerArray.map((answer, index) => {
      if (questions[index].correctOption === answer) {
        yourScore += 1;
      }
    });
    console.log(`You Scored ${yourScore} out of ${intitalScore}`);
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
              disabled={true}
            />

            <RadioGroup
              aria-labelledby={`options-${index}-label`}
              name={`options-${index}`}
              className='mx-4'
              onChange={(event) => handleAnswerChange(event, index)}
            >
              {['optionA', 'optionB', 'optionC', 'optionD'].map(
                (option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={`${optionIndex}`}
                    control={<Radio />}
                    label={
                      <TextField
                        id={`option-${index}-${optionIndex}`}
                        multiline
                        value={question[option]}
                        disabled={true}
                      />
                    }
                  />
                )
              )}
            </RadioGroup>

            <Divider />
          </div>
        ))}

        <div className='m-4'>
          <Button
            variant='outlined'
            color='warning'
            onClick={(e) => handleSubmit(e)}
            style={{ marginRight: '20px' }}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
}

export default CourseAssignmentComponent;
