// import React, { useEffect, useState } from "react";
// import Loader from "../../Components/Loader/index";
// import Result from "../../Components/Result/index";
// import LoadingBar from "react-top-loading-bar";

// const Quiz = () => {
//   const [question, allQuestion] = useState([]);
//   let [index, setIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedValue, setSelectedValue] = useState(null);
//   // const [isCorrect, toggleIsCorrect] = useState(false);
//   // const [isWrong_1, toggleIsWrong_1] = useState(false);
//   // const [isWrong_2, toggleIsWrong_2] = useState(false);
//   // const [isWrong_3, toggleIsWrong_3] = useState(false);
//   const [timer, setTimer] = useState(10);
//   const [isLoading, toggleIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [quizStart, quizEnd] = useState(true);
//   let interval;

//   const resetAll = () => {
//     setSelectedValue(null);
//     // toggleIsCorrect(false);
//     // toggleIsWrong_1(false);
//     // toggleIsWrong_2(false);
//     // toggleIsWrong_3(false);
//     setIndex(0);
//     setScore(0);
//     setTimer(10);
//     toggleIsLoading(false);
//     setProgress(0);
//     quizEnd(true);
//   };
//   const scoreUpdate = () => {
//     setScore(score + 1);
//   };

//   // Progress Update Effect:
//   useEffect(() => {
//     setProgress((index / question.length) * 100);
//   }, [index, question]);
//   let jsonData ;
//   // Data Fetch Effect:
//   useEffect(() => {
//     console.log("start");

//     const fetchData = async () => {
//       try {
//         toggleIsLoading(true);
//         const response = await fetch(
//           "https://the-trivia-api.com/v2/questions/"
//         );
//         jsonData = await response.json();
//         console.log(jsonData)

//         toggleIsLoading(false);
//         allQuestion(jsonData);
//       } catch (error) {
//         toggleIsLoading(true);
//         console.log(error.message);
//         console.log(error.code);
//       }
//     };
//     fetchData();
//   }, []);

//   // Selected Value Effect:
//   useEffect(() => {
//     // const radioButtons = document.getElementsByName("list-radio");
//     // radioButtons.forEach((ele) => {
//     //   if(ele.checked){
//     //     ele.classList.add('tick')
//     //   }
//     // })

//     setSelectedValue(selectedValue);
//     console.log(selectedValue);
//   }, [selectedValue]);

//   // Timer Update Effect:
//   useEffect(() => {
//     if(!isLoading){
//       setTimer(10);
//       interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval); // Clear interval using the returned ID
//     }


   
//   }, [index]);

//   // Time Up Effect:
//   useEffect(() => {
//     // Check if time is up and move to the next question
//     if (timer === 0) {
//       handleButtonClick();
//     }
//   }, [timer]);

//   const handleChange = (e, ans) => {
//     setSelectedValue(e.target.value);
//   };

//   const nextQuestion = (ans) => {
//     // toggleIsCorrect(false);
//     // toggleIsWrong_1(false);
//     // toggleIsWrong_2(false);
//     // toggleIsWrong_3(false);
//     setSelectedValue(null);
//     const radioButtons = document.getElementsByName("list-radio");

//     if (selectedValue === ans) {
//       scoreUpdate();
//       // setScore(score + 1);

//       console.log("You chose:", selectedValue, "Correct:", ans);
//     } else {
//       console.log("You chose:", selectedValue, "Correct:", ans);
//     }

//     if (index + 1 >= question.length) {
//       setTimer(0);
//       clearInterval(interval);
//       quizEnd(false);
//       if (question.length === score) {
//         console.log("SOCRE");
//         setScore(score);
//       }
//     } else {
//       for (let i = 0; i < radioButtons.length; i++) {
//         radioButtons[i].checked = false;
//       }
//       setIndex((prevIndex) => prevIndex + 1);
//       setTimer(10);
//     }
//   };

//   const handleButtonClick = () => {
//     nextQuestion(question[index].correctAnswer);
//   };

//   return (
//     <>
//       <div>
//         {quizStart ? (
//           <div className={`${quizStart ? "border container" : "abc "}`}>
//             <div className="timerContainer bg-white rounded-lg shadow dark:bg-gray-700 w-96 border border-red-800">
//               <span>Time Left: {timer}</span>
//             </div>

//             <LoadingBar
//               color="#E63830"
//               height="7px"
//               border-Radius="2rem"
//               className="loaderProgressBar"
//               progress={progress}
//               onLoaderFinished={() => setProgress(0)}
//             />

//             <div className="grid  sm:grid-cols-12 gap-4 h-200 containerSub">
//               {isLoading ? (
//                 <Loader />
//               ) : (
//                 question.length > 0 && (
//                   <div className="card">
//                     <p className=" questions mt-10 py-10 w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//                       Q#{index + 1}: {question[index].question.text}
//                     </p>

//                     <ul className="ul mt-10 w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//                       <li className="li w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//                         {/* <div className={`flex items-center ps-3 ${isCorrect ? "correct" : ""}`}
//                           onClick={() => {
//                             toggleIsCorrect(true);
//                             toggleIsWrong_1(false);
//                             toggleIsWrong_2(false);
//                             toggleIsWrong_3(false);
//                           }}
//                         > */}
//                         <div className={'flex items-center ps-3'}>
//                           <input
//                             id="list-radio-license"
//                             type="radio"
//                             value={question[index].correctAnswer}
//                             name="list-radio"
//                             className="correctTarget w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                             onChange={(e) =>
//                               handleChange(e, question[index].correctAnswer)
//                             }
//                           />
//                           <label
//                             htmlFor="list-radio-license"
//                             className="options w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                           >
//                             {question[index].correctAnswer}
//                           </label>
//                         </div>

//                       </li>

//                       <li className="li w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//                         {/* <div className={`flex items-center ps-3 ${isWrong_1 ? "wrong_1" : ""}`}
//                           onClick={() => {
//                             toggleIsCorrect(false);
//                             toggleIsWrong_1(true);
//                             toggleIsWrong_2(false);
//                             toggleIsWrong_3(false);
//                           }}
//                         > */}

//                         <div className={'flex items-center ps-3 a'}>
//                           <input
//                             option="option_2"
//                             id="list-radio-id"
//                             type="radio"
//                             value={question[index].incorrectAnswers[0]}
//                             name="list-radio"
//                             onChange={(e) =>
//                               handleChange(e, question[index].correctAnswer)
//                             }
//                             className="correctTarget w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                           />
//                           <label
//                             htmlFor="list-radio-id"
//                             className="options w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                           >
//                             {question[index].incorrectAnswers[0]}
//                           </label>
//                         </div>
//                       </li>

//                       <li className="li w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//                         {/* <div className={`flex items-center ps-3 ${isWrong_2 ? "wrong_2" : ""}`}
//                           onClick={() => {
//                             toggleIsCorrect(false);
//                             toggleIsWrong_2(true);
//                             toggleIsWrong_1(false);
//                             toggleIsWrong_3(false);
//                           }}
//                         > */}
//                         <div className={'flex items-center ps-3'}>
//                           <input
//                             option="option_3"
//                             id="list-radio-military"
//                             type="radio"
//                             value={question[index].incorrectAnswers[1]}
//                             name="list-radio"
//                             onChange={(e) =>
//                               handleChange(e, question[index].correctAnswer)
//                             }
//                             className="correctTarget w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                           />
//                           <label
//                             htmlFor="list-radio-military"
//                             className="options w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                           >
//                             {question[index].incorrectAnswers[1]}
//                           </label>
//                         </div>
//                       </li>
//                       <li className="li w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//                         {/* <div className={`flex items-center ps-3 ${isWrong_3 ? "wrong_3" : ""}`}
//                           onClick={() => {
//                             toggleIsCorrect(false);
//                             toggleIsWrong_3(true);
//                             toggleIsWrong_1(false);
//                             toggleIsWrong_2(false);
//                           }}
//                         > */}
//                         <div className={'flex items-center ps-3'}>
//                           <input
//                             option="option_4"
//                             id="list-radio-passport"
//                             type="radio"
//                             value={question[index].incorrectAnswers[2]}
//                             name="list-radio"
//                             onChange={(e) =>
//                               handleChange(e, question[index].correctAnswer)
//                             }
//                             className="correctTarget w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                           />
//                           <label
//                             htmlFor="list-radio-passport"
//                             className="options w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                           >
//                             {question[index].incorrectAnswers[2]}
//                           </label>
//                         </div>
//                       </li>
//                     </ul>
        
//                       <div className="btnContainer">
//                         {selectedValue ? 
//                           <button
//                           type="button"
//                           className={`text-white bg-gradient-to-r from-blue-900 via-blue-900 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 nextBtn '}`}
//                           onClick={() => handleButtonClick()}
//                         >
//                         Next
//                           </button>
//                           : 
//                           <button
//                             disabled
//                             type="button"
//                             className={'text-white bg-gradient-to-r from-blue-900 via-blue-900 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 nextBtn button disabled'}
//                             // onClick={() => handleButtonClick()}
//                           >
//                           Next
//                           </button>
//                         }
                      
//                     </div> 

                    

//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         ) : (
//           <Result
//             totalQuestions={question.length}
//             score={score}
//             resetAll={resetAll}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default Quiz;
import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader/index";
import Result from "../../Components/Result/index";
import LoadingBar from "react-top-loading-bar";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const [timer, setTimer] = useState(10);
  const [isLoading, toggleIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quizStart, setQuizStart] = useState(true);

  const resetAll = () => {
    setSelectedValue(null);
    setIndex(0);
    setScore(0);
    setTimer(10);
    toggleIsLoading(false);
    setProgress(0);
    setQuizStart(true);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const scoreUpdate = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    setProgress((index / questions.length) * 100);
  }, [index, questions]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        toggleIsLoading(true);
        const response = await fetch(
          "https://the-trivia-api.com/v2/questions/"
        );
        const jsonData = await response.json();

        // Shuffle questions and options
        const shuffledQuestions = shuffleArray(jsonData);
        const shuffledOptions = shuffledQuestions.map((question) => {
          const options = [...question.incorrectAnswers, question.correctAnswer];
          return {
            ...question,
            incorrectAnswers: shuffleArray(options),
          };
        });

        setQuestions(shuffledOptions);
        toggleIsLoading(false);
      } catch (error) {
        toggleIsLoading(false);
        console.log(error.message);
        console.log(error.code);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimer(10);
      const interval = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [index]);

  useEffect(() => {
    if (timer === 0) {
      handleButtonClick();
    }
  }, [timer]);

  const handleChange = (e, ans) => {
    setSelectedValue(e.target.value);
  };

  const nextQuestion = (ans) => {
    const radioButtons = document.getElementsByName("list-radio");

    setSelectedValue(null);

    if (selectedValue === ans) {
      scoreUpdate();
      console.log("You chose:", selectedValue, "Correct:", ans);
    } else {
      console.log("You chose:", selectedValue, "Correct:", ans);
    }

    if (index + 1 >= questions.length) {
      setTimer(0);
      setQuizStart(false);
      if (questions.length === score) {
        console.log("SCORE");
        setScore(score);
      }
    } else {
      setIndex((prevIndex) => prevIndex + 1);
      setTimer(10);
      for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
      }
    }
  };

  const handleButtonClick = () => {
    nextQuestion(questions[index].correctAnswer);
  };

  return (
    <>
      <div>
        {quizStart ? (
          <div className={`${quizStart ? "border container" : "abc "}`}>
            <div className="timerContainer bg-white rounded-lg shadow dark:bg-gray-700 w-96 border border-red-800">
              <span>Time Left: {timer}</span>
            </div>

            <LoadingBar
              color="#E63830"
              height="7px"
              border-Radius="2rem"
              className="loaderProgressBar"
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />

            <div className="grid  sm:grid-cols-12 gap-4 h-200 containerSub">
              {isLoading ? (
                <Loader />
              ) : (
                questions.length > 0 && (
                  <div className="card">
                    <p className="questions mt-10 py-10 w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      Q#{index + 1}: {questions[index].question.text}
                    </p>

                    <ul className="ul mt-10 w-70 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      {questions[index].incorrectAnswers.map((option, i) => (
                        <li key={i} className="li w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                          <div className={'flex items-center ps-3'}>
                            <input
                              id={`list-radio-${i}`}
                              type="radio"
                              value={option}
                              name="list-radio"
                              className="correctTarget w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              onChange={(e) => handleChange(e, questions[index].correctAnswer)}
                            />
                            <label
                              htmlFor={`list-radio-${i}`}
                              className="options w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              {option}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="btnContainer">
                      {selectedValue ? 
                        <button
                          type="button"
                          className={`text-white bg-gradient-to-r from-blue-900 via-blue-900 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 nextBtn '}`}
                          onClick={() => handleButtonClick()}
                        >
                          Next
                        </button>
                        : 
                        <button
                          disabled
                          type="button"
                          className={'text-white bg-gradient-to-r from-blue-900 via-blue-900 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 nextBtn button disabled'}
                        >
                          Next
                        </button>
                      }
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        ) : (
          <Result
            totalQuestions={questions.length}
            score={score}
            resetAll={resetAll}
          />
        )}
      </div>
    </>
  );
};

export default Quiz;
