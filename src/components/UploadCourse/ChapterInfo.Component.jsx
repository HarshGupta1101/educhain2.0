import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MuiFileInput } from 'mui-file-input';
import ipfs from '../../utils/ipfs';
import { Slide, ToastContainer, toast } from 'react-toastify';

function ChapterInfoComponent({
  courseDetails,
  setCourseDetails,
  moduleNumber,
  chapterNumber,
  CourseId,
}) {
  const [videoUpload, setVideoUpload] = useState(false);
  const [file, setFile] = React.useState(null);
  // console.log(CourseId, moduleNumber, chapterNumber);
  
  const [chapterDetails, setChapterDetails] = useState({
    chapterName: '',
    chapterBrief: '',
    chapterVideoUrl: '',
  });

  const handleChange = (newFile) => {
    setFile(newFile);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const response = await ipfs.add(file);
      const videoHash = `https://ipfs.io/ipfs/${response.path}`;
      toast.success('Uploaded Successfully !', {
        position: "top-center",
        autoClose: 4000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(videoHash);
      setChapterDetails({
        ...chapterDetails,
        chapterVideoUrl: videoHash,
      });
      setVideoUpload(true);
    } catch (error) {
      toast.error('Upload Failed !', {
        position: "top-center",
        autoClose: 4000,
        transition: Slide,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const handleChapterSubmit = async (e) => {
    e.preventDefault();
    const data = chapterDetails;
    data['CourseId'] = CourseId;
    data['moduleNumber'] = moduleNumber;
    data['chapterSequence'] = chapterNumber;
    console.log(data);
    await fetch('http://127.0.0.1:5000/course/addchapter', {
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
        toast.success('Module Added Successfully !', {
          position: "top-center",
          autoClose: 4000,
          transition: Slide,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
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
        `http://127.0.0.1:5000/course/${CourseId}/module/${moduleNumber}/chapter/${chapterNumber}`,
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
            setChapterDetails(data.chapter);
          }
        })
        .catch((error) => {
          // handle error response
          setChapterDetails({
            chapterName: '',
            chapterBrief: '',
            chapterVideoUrl: '',
          });
          console.log(error);
        });
    };
    getData();
  }, [chapterNumber]);

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
          <h1>
            Module {moduleNumber} ---{`>`} Chapter {chapterNumber}
          </h1>
          <TextField
            id='outlined-multiline-flexible'
            label='Module Title'
            multiline
            maxRows={3}
            value={chapterDetails.chapterName}
            onChange={(e) =>
              setChapterDetails({
                ...chapterDetails,
                chapterName: e.target.value,
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
          <div className='flex items-center gap-4 w-4/5'>
            <MuiFileInput
              value={file}
              placeholder='Upload Video'
              onChange={handleChange}
              disabled={videoUpload}
            />
            <button
              className='bg-orange-400 text-white text-lg px-4 py-2 rounded hover:bg-orange-500'
              onClick={(e) => handleUpload(e)}
            >
              Upload
            </button>
          </div>
        </div>
        <button
          className='mx-4 bg-orange-400 text-white text-lg px-4 py-2 text-sm rounded hover:bg-orange-500 mt-4'
          onClick={(e) => handleChapterSubmit(e)}
        >
          Submit Details
        </button>
      </Box>
    </>
  );
}

export default ChapterInfoComponent;
