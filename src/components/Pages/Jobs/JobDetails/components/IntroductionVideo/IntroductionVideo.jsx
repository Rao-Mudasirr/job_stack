import { useState } from "react";

const  IntroductionVideo =()=> {
  const [isRecording, setIsRecording] = useState(false);

  const handleStartRecording = () => {
    setIsRecording(true);
    // TODO: Implement logic to start recording
  };

  const handleCancelRecording = () => {
    setIsRecording(false);
    // TODO: Implement logic to cancel recording
  };

  return (
    <div className="flex flex-col ">
      <h2 className="text-2xl font-bold mb-4">Introduction Video Section</h2>
      <p className="text-gray-600 mb-4">
        Please give a short introduction of yourself .
      </p>
      {isRecording ? (
        <div className="flex flex-col items-center">
          {/* TODO: Add video recording component */}
          <div className="mt-4 flex">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleCancelRecording}
            >
              Cancel
            </button>
            {/* TODO: Implement save functionality */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            onClick={handleStartRecording}
          >
            Start Recording
          </button>
          {/* <button className="text-blue-500 hover:text-blue-700 font-bold">
            Cancel
          </button> */}
        </div>
      )}
    </div>
  );
}

export default IntroductionVideo;
