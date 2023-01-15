import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const microphone = new SpeechRecognition();

microphone.continuous = true;
microphone.interimResults = true;
microphone.lang = "en-US";

function Askserc() {
  const [open, setOpen] = useState(false);

  const [isRecording, setisRecording] = useState(false);
  const [note, setNote] = useState(null);
  const [notesStore, setnotesStore] = useState([]);

  // const startRecordControllers = () => {};

  const storeNote = () => {
    setnotesStore([...notesStore, note]);
    setNote("");
  };
  useEffect(() => {
    startRecordController();
  }, [isRecording]);

  const startRecordController = () => {
    if (isRecording) {
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className='flex justify-between'>
            <img
              src={require("assets/image/Bayleyimage.png")}
              className='h-24 ml-8'
              alt=''
            />
            <h3 className='text-3xl font-bold mr-6 mt-5'>Bayley Al</h3>
          </div>
        </Grid>
      </Grid>
      <hr className='border-t-1 border-black ' />

      <Grid container spacing={0}>
        <Grid item lg={2} xs={4}>
          <div className=' bayl-col-styl bg-gradiant h-screen'>
            <div className='flex'>
              <button className='flex btn-bal-styles mt-4 ml-4 border-2 bg-white text-purple-500 py-2 px-8 rounded-md'>
                <i class='fal fa-plus mr-4'></i>
                <p className='text-wrap-styling'>New Chat</p>
              </button>
            </div>
            <button className='flex btn-bal-styl mt-4 ml-4 border-2 bg-white text-purple-500 px-4 py-2 rounded-md'>
              <i class='fas fa-comment-dots mt-1 mr-2'></i>
              <p className='text-wrap-styl'>How Do I Repl</p>
            </button>
          </div>
        </Grid>
        <Grid item lg={10} xs={8}>
          <div className=''>
            <div className='flex justify-center mt-3'>
              <img
                src='https://img.freepik.com/free-photo/robot-doing-peace-sign_1048-3527.jpg?w=360&t=st=1673020949~exp=1673021549~hmac=9a3857a5c3d1877e0acedab50f95c5d0e2b100904f45ec51ea753f51dd0c7bc4'
                className='bal-imag-styl h-36'
              />
              <h3 className='text-6xl font-bold mt-7 bal-text-styl'>
                Ask Bayley
              </h3>
            </div>
            <div className=' wrap-bal-txt'>
              <div className=' styl-bal-desc'>
                <p className='resp-text-styl italic flex justify-center'>
                  **Disclaimer - All responses are generated by Al data sets and
                  not always exact answers
                </p>
              </div>
            </div>

            <div className=' chatInput-wrapper h-20 w-full flex justify-center items-end  '>
              <div className='chatInputfield-item   w-8/12 h-fit flex items-center'>
                <div className='flex items-center border-2 shadow-md rounded w-full '>
                  <input
                    type='text'
                    className=' w-full py-3 px-2 focus:outline-none text-center'
                  />
                  <p>{note}</p>

                  {isRecording ? (
                    <span>Recording... </span>
                  ) : (
                    <span>Stopped </span>
                  )}
                  <span className='flex text-purple-500'>
                    <i
                      onClick={() => setisRecording((prevState) => !prevState)}
                      class='fas fa-microphone-slash mr-4'
                    ></i>

                    <i
                      onClick={storeNote}
                      disabled={!note}
                      class='fas fa-paper-plane mr-4'
                    ></i>
                  </span>
                </div>
              </div>
            </div>
            <h3 className='flex justify-center mt-6 text-4xl bal-ask-wrap'>
              Ask Bayley anything automotive related
            </h3>
            <p className='bal-exm-styl mt-2 flex justify-center'>
              Example: How Do I Replace The Break Pads On A 2020 Honda Accord EX
              V6
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
export default Askserc;