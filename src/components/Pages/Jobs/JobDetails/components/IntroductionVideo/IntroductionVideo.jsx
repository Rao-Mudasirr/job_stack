import axios from 'axios';
import React, { useState, useRef } from 'react';

function IntroductionVideo({ data, setData, setJobApplicationMsg }) {
  const { REACT_APP_SITE_URL } = process.env;
  const authToken = localStorage.getItem("token");
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(stream);
      videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorder.start();

      setIsRecording(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDataAvailable(event) {
    if (event.data.size > 0) {
      setRecordedChunks(prevRecordedChunks => [...prevRecordedChunks, event.data]);
    }
  }

  function pauseRecording() {
    mediaRecorderRef.current.pause();
    setIsPaused(true);
  }

  function resumeRecording() {
    mediaRecorderRef.current.resume();
    setIsPaused(false);
  }

  function stopRecording() {
    mediaRecorderRef.current.stop();
    stream.getTracks().forEach(track => track.stop());

    setIsRecording(false);
    setIsPaused(false);
  }

  function cancelRecording() {
    setRecordedChunks([]);
    setIsRecording(false);
    setIsPaused(false);
  }

  function downloadRecording() {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    console.log(blob);
    const formData = new FormData();
    formData.append('intro_video', blob);
    updateIntroVideo(formData);
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // document.body.appendChild(a);
    // a.style = 'display: none';
    // a.href = url;
    // a.download = 'introduction-video.webm';
    // a.click();
    // URL.revokeObjectURL(url);
  }
  const updateIntroVideo = async (video) => {
    try {
      const response = await axios.post(
        `${REACT_APP_SITE_URL}/api/update-intro-video`,
        video,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.status === 200) {
        if (response?.data?.status){
          setData({ ...data, user: response?.data?.data?.user })
        }
        // localStorage.setItem("user", JSON.stringify(response?.data?.data?.user));
        setJobApplicationMsg({
          title: response?.data?.msg,
          isToggle: true,
          type: response?.data?.status ? "success" : "error",
        })
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center py-10 bg-white rounded-lg shadow-lg">
      <div className="relative mb-10">
        <video ref={videoRef} className="w-full rounded-lg shadow-lg" autoPlay muted />
        {isRecording && (
          <div className="absolute top-0  left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className='mt-50'>
              {isPaused ? (
                <button className="px-8 py-2 text-xl font-bold text-white rounded-full bg-red-500" onClick={resumeRecording}>
                  Resume
                </button>
              ) : (
                <button className="px-8 py-2 text-xl font-bold text-white rounded-full bg-red-500" onClick={pauseRecording}>
                  Pause
                </button>
              )}
              <button className="px-8 py-2 text-xl font-bold text-white ml-4 rounded-full bg-blue-500" onClick={stopRecording}>
                Stop
              </button>
            </div>
          </div>

        )}
      </div>
      {!isRecording && !recordedChunks.length && (
        <button className="px-8 py-2 text-xl font-bold text-white rounded-full bg-blue-500 hover:bg-blue-600" onClick={startRecording}>
          Record
        </button>
      )}
      {!!recordedChunks.length && (
        <div className="flex items-center justify-center w-full space-x-4">
          <button className="px-8 py-2 text-xl font-bold text-white rounded-full bg-green-500 hover:bg-green-600" onClick={downloadRecording}>
            save
          </button>
          <button className="px-8 py-2 text-xl font-bold text-white rounded-full bg-red-500 hover:bg-red-600" onClick={cancelRecording}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default IntroductionVideo;
