import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function ChapterInfoComponent({
  courseDetails,
  setCourseDetails,
  moduleNumber,
  chapterNumber,
  CourseId,
}) {
  // console.log(moduleNumber.split(' ')[1], CourseId);

  const [chapterDetails, setChapterDetails] = useState({
    chapterTitle: '',
    chapterBrief: '',
    video: '',
  });

  // const handleModuleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = chapterDetails;
  //   data['CourseId'] = CourseId;
  //   data['moduleNumber'] = parseInt(moduleNumber.split(' ')[1]);
  //   console.log(data);
  //   await fetch('http://127.0.0.1:5000/course/addmodule', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: String(localStorage.getItem('token')),
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // handle successful response
  //       if (!data.status) {
  //         throw new Error(data.message);
  //       }

  //       data.courseData.courseModules.map((module) => {
  //         if (module.moduleNumber === parseInt(moduleNumber.split(' ')[1])) {
  //           setCourseDetails({
  //             ...courseDetails,
  //             courseModules: [...courseDetails.courseModules, module],
  //           });
  //           setChapterDetails(module);
  //         }
  //         return null;
  //       });
  //     })
  //     .catch((error) => {
  //       // handle error response
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     await fetch(
  //       `http://127.0.0.1:5000/course/${CourseId}/module/${parseInt(
  //         moduleNumber.split(' ')[1]
  //       )}`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: String(localStorage.getItem('token')),
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // handle successful response
  //         if (!data.status) {
  //           throw new Error(data.message);
  //         }
  //         if (data.status) {
  //           setChapterDetails(data.module);
  //         }
  //       })
  //       .catch((error) => {
  //         // handle error response
  //         setChapterDetails({
  //           chapterTitle: '',
  //           chapterBrief: '',
  //           moduleFee: 0,
  //           noOfChapters: 0,
  //         });
  //         console.log(error);
  //       });
  //   };
  //   getData();
  // }, [moduleNumber]);

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
          <h1>Module {moduleNumber} ---{`>`} Chapter {chapterNumber}</h1>
          <TextField
            id='outlined-multiline-flexible'
            label='Module Title'
            multiline
            maxRows={3}
            value={chapterDetails.chapterTitle}
            onChange={(e) =>
              setChapterDetails({
                ...chapterDetails,
                chapterTitle: e.target.value,
              })
            }
          />

          <TextField
            id='outlined-multiline-flexible'
            label='Module Description'
            multiline
            maxRows={3}
            value={chapterDetails.chapterBrief}
            onChange={(e) =>
              setChapterDetails({
                ...chapterDetails,
                chapterBrief: e.target.value,
              })
            }
          />
          <TextField
            id='outlined-multiline-flexible'
            label='Upload Video'
            multiline
            maxRows={3}
            value={chapterDetails.video}
            onChange={(e) =>
              setChapterDetails({
                ...chapterDetails,
                video: e.target.value,
              })
            }
          />
        </div>
        <button
          className='mx-4 bg-orange-400 text-white text-lg px-4 py-2 text-sm rounded hover:bg-orange-500 mt-4'
          // onClick={(e) => handleModuleSubmit(e)}
        >
          Submit Details
        </button>
      </Box>
    </>
  );
}

export default ChapterInfoComponent;
