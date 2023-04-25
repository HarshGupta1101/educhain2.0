import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ModuleInfoComponent({
  courseDetails,
  setCourseDetails,
  moduleNumber,
  CourseId,
}) {
  // console.log(moduleNumber.split(' ')[1], CourseId);

  const [moduleDetails, setModuleDetails] = useState({
    moduleTitle: '',
    moduleBrief: '',
    moduleFee: 0,
    noOfChapters: 0,
  });

  const handleModuleSubmit = async (e) => {
    e.preventDefault();
    const data = moduleDetails;
    data['CourseId'] = CourseId;
    data['moduleNumber'] = parseInt(moduleNumber.split(' ')[1]);
    console.log(data);
    await fetch('http://127.0.0.1:5000/course/addmodule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: String(localStorage.getItem('token')),
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // handle successful response
        if (!data.status) {
          throw new Error(data.message);
        }

        data.courseData.courseModules.map((module) => {
          if (module.moduleNumber === parseInt(moduleNumber.split(' ')[1])) {
            setCourseDetails({
              ...courseDetails,
              courseModules: [...courseDetails.courseModules, module],
            });
            setModuleDetails(module);
          }
          return null;
        });
      })
      .catch((error) => {
        // handle error response
        console.log(error);
      });
  };

  useEffect(() => {
    const getData = async () => {
      await fetch(
        `http://127.0.0.1:5000/course/${CourseId}/module/${parseInt(
          moduleNumber.split(' ')[1]
        )}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: String(localStorage.getItem('token')),
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          // handle successful response
          if (!data.status) {
            throw new Error(data.message);
          }
          if (data.status) {
            setModuleDetails(data.module);
          }
        })
        .catch((error) => {
          // handle error response
          setModuleDetails({
            moduleTitle: '',
            moduleBrief: '',
            moduleFee: 0,
            noOfChapters: 0,
          });
          console.log(error);
        });
    };
    getData();
  }, [moduleNumber]);

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
        <h1 className='text-2xl font-bold mx-3 mt-1 mb-3 mr-4'>Enter Details Of Module {parseInt(moduleNumber.split(' ')[1])}</h1>
          <TextField
            id='outlined-multiline-flexible'
            label='Module Title'
            multiline
            maxRows={3}
            value={moduleDetails.moduleTitle}
            onChange={(e) =>
              setModuleDetails({
                ...moduleDetails,
                moduleTitle: e.target.value,
              })
            }
          />

          <TextField
            id='outlined-multiline-flexible'
            label='Module Description'
            multiline
            maxRows={3}
            value={moduleDetails.moduleBrief}
            onChange={(e) =>
              setModuleDetails({
                ...moduleDetails,
                moduleBrief: e.target.value,
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Module Price'
            multiline
            maxRows={3}
            value={moduleDetails.moduleFee}
            onChange={(e) =>
              setModuleDetails({
                ...moduleDetails,
                moduleFee: parseInt(e.target.value),
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Number Of Chapters'
            multiline
            maxRows={3}
            value={moduleDetails.noOfChapters}
            onChange={(e) =>
              setModuleDetails({
                ...moduleDetails,
                noOfChapters: parseInt(e.target.value),
              })
            }
          />
        </div>
        <button
          className='mx-4 my-4 px-4 py-2 border border-2 rounded border-orange-400 hover:bg-gray-100'
          onClick={(e) => handleModuleSubmit(e)}
        >
          Submit Details
        </button>
      </Box>
    </>
  );
}

export default ModuleInfoComponent;
