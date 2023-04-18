import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Divider } from '@mui/material';

function Assignment() {

  const [addQuestions,setAddQuestions] = useState(1);

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
      {[...Array(addQuestions)].map((e, index)=>(
        <div key={index}>
          <TextField
            id='outlined-multiline-flexible'
            label={`Enter Question ${index+1}`}
            multiline
            maxRows={3}
            fullWidth
          />
        <RadioGroup
            aria-labelledby={`options-${index}-label`}
            name={`options-${index}`}
            className='mx-4'
        >
            <FormControlLabel value="1" control={<Radio />} 
            label={<TextField
            id={`option-${index}-1`}
            label='Enter Option 1'
            multiline
            />} />
            <FormControlLabel value="2" control={<Radio />} 
            label={<TextField
                id={`option-${index}-2`}
            label='Enter Option 2'
            multiline
            />} />
            <FormControlLabel value="3" control={<Radio />} 
            label={<TextField
            id={`option-${index}-3`}
            label='Enter Option 3'
            multiline
            />} />
            <FormControlLabel value="4" control={<Radio />} 
            label={<TextField
            id={`option-${index}-4`}
            label='Enter Option 4'
            multiline
            />} />
        </RadioGroup> 
        <Divider />
        </div>
        ))}
        <div className='m-4'>
        <Button variant='outlined' color='warning' onClick={()=> setAddQuestions(addQuestions+1)} style={{marginRight:'20px'}} >
          <AddCircleOutlineIcon className='mx-2'/> Add More Questions
          </Button>
        <Button variant='outlined' color='warning' style={{marginRight:'20px'}} >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Assignment;