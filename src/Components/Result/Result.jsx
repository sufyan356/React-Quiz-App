
// import React, { useState } from "react";
// const Result = ({ totalQuestions, score, resetAll }) => {
//   const [result, toggleResult] = useState(true);
//   const percentage = (((score - 1) / totalQuestions) * 100).toFixed(2);
//   console.log(score)
//   return (
//     <>
     
//         <div
//           id="popup-modal"

//           tabIndex={-1}
//           className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-2rem)] max-h-full"
//         >
//           <div className="relative p-4 w-full max-w-md max-h-full resultContent">
//             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 result">
//               <div className="p-4 md:p-5 text-center">
//                 <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
//                   Result Summary
//                 </h3>
//                 <p className="mb-3 text-lg font-semibold text-green-600">
//                   Total Questions: {totalQuestions}
//                 </p>
//                 <p className="mb-3 text-lg font-semibold text-blue-600">
//                   Correct Answers: {score}
//                 </p>
//                 <p className="mb-3 text-lg font-semibold text-red-600">
//                   Wrong Answers: {totalQuestions - score}
//                 </p>
//                 <p className="mb-5 text-lg font-semibold">
//                   Percentage: {percentage}%
//                 </p>

//                 <button
//                 onClick={() => {
//                     resetAll(); // Call the resetAll function
//                     toggleResult(false); // Close the result modal
//                 }}
//                 data-modal-hide="popup-modal"
//                 type="button"
//                 className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                 >
//                 Restart Quiz
//                 </button>


//               </div>
//             </div>
//           </div>
//         </div>
      
//     </>
//   );
// };

// export default Result;
import React, { useState } from "react";

const Result = ({ totalQuestions, score, resetAll }) => {
  const [showResult, setShowResult] = useState(true);
  const percentage = (((score) / totalQuestions) * 100).toFixed(2);
    console.log(score)
  const handleRestart = () => {
    resetAll();
    setShowResult(false);
  };

  return (
    <>
      {showResult && (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center">
          <div className="p-4 max-w-md bg-white rounded-lg shadow">
            <div className="text-center">
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Result Summary
              </h3>
              <p className="mb-3 text-lg font-semibold text-green-600">
                Total Questions: {totalQuestions}
              </p>
              <p className="mb-3 text-lg font-semibold text-blue-600">
                Correct Answers: {score}
              </p>
              <p className="mb-3 text-lg font-semibold text-red-600">
                Wrong Answers: {totalQuestions - score}
              </p>
              <p className="mb-5 text-lg font-semibold">
                Percentage: {percentage}%
              </p>

              <button
                onClick={handleRestart}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
