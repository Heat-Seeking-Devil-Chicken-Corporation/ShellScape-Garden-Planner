// import React from 'react';
// import { forwardRef, useEffect, useRef } from 'react';

// export default function TextInput(
//   {
//     type = 'text',
//     name,
//     id,
//     value,
//     className,
//     autoComplete,
//     handleChange,
//   },
// ) {

//   return (
//     <div className='flex flex-col items-start'>
//       <input
//         type={type}
//         name={name}
//         id={id}
//         value={value}
//         className={
//           `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
//           className
//         }
//         autoComplete={autoComplete}
//         onChange={(e) => handleChange(e)}
//       />
//     </div>
//   );
// };

// export default function TextInput(
//   {
//     type = 'text',
//     name,
//     id,
//     value,
//     className,
//     autoComplete,
//     // required,
//     // isFocused,
//     handleChange,
//   },
//   ref
// ) {
//   // const input = ref ? ref : useRef();

//   // useEffect(() => {
//   //   if (isFocused) {
//   //     input.current.focus();
//   //   }
//   // }, []);

//   return (
//     <div className='flex flex-col items-start'>
//       <input
//         type={type}
//         name={name}
//         id={id}
//         value={value}
//         className={
//           `border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ` +
//           className
//         }
//         // ref={input}
//         autoComplete={autoComplete}
//         // required={required}
//         onChange={(e) => handleChange(e)}
//       />
//     </div>
//   );
// };


