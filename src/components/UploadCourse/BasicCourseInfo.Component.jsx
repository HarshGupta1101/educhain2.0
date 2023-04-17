import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function BasicCourseInfoComponent({ courseDetails, setCourseDetails }) {
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
        <div>
          <TextField
            id='outlined-multiline-flexible'
            label='Course Title'
            multiline
            maxRows={3}
            value={courseDetails.courseTitle}
            onChange={(e) =>
              setCourseDetails({
                ...courseDetails,
                courseTitle: e.target.value,
              })
            }
          />

          <TextField
            id='outlined-multiline-flexible'
            label='Course Description'
            multiline
            maxRows={3}
            value={courseDetails.courseDescription}
            onChange={(e) =>
              setCourseDetails({
                ...courseDetails,
                courseDescription: e.target.value,
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Course Instructor'
            multiline
            maxRows={3}
            value={courseDetails.instructor}
            onChange={(e) =>
              setCourseDetails({
                ...courseDetails,
                instructor: e.target.value,
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Course Tags'
            multiline
            maxRows={3}
            value={courseDetails.courseTags}
            onChange={(e) =>
              setCourseDetails({
                ...courseDetails,
                courseTags: e.target.value,
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Total Course Duration'
            multiline
            maxRows={3}
            value={courseDetails.courseDuration}
            onChange={(e) =>
              setCourseDetails({
                ...courseDetails,
                courseDuration: e.target.value,
              })
            }
          />
        </div>
      </Box>
    </>
  );
}

export default BasicCourseInfoComponent;
