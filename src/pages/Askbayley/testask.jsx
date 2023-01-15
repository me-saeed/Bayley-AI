// import React, { useState, useEffect } from "react";

// function Testask() {
//   const TextViewer = () => {
//     // The text to be paginated
//     const [text, setText] = useState("");

//     // The current page number
//     const [pageNumber, setPageNumber] = useState(1);

//     // The size of each page
//     // const PAGE_SIZE = 100;

//     // Fetch the text from the API
//     useEffect(() => {
//       fetch("https://your-api-endpoint.com/text?page=" + pageNumber)
//         .then((res) => res.json())
//         .then((data) => {
//           setText(data.text);
//           setPageNumber(data.page_number);
//         });
//     }, [pageNumber]);
//   };

//   return (
//     <>
//       <div>
//         <div>{text}</div>
//         <div>
//           <button
//             onClick={() => {
//               setPageNumber(pageNumber - 1);
//             }}
//             disabled={pageNumber === 1}
//           >
//             Previous Page
//           </button>
//           <button
//             onClick={() => {
//               setPageNumber(pageNumber + 1);
//             }}
//           >
//             Next Page
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Testask;
