import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // 1. Import BrowserRouter
// import App from './App.tsx';
// import './index.css';

// // Get the root element
// const rootElement = document.getElementById('root');

// // Ensure the root element exists before calling createRoot
// if (rootElement) {
//   createRoot(rootElement).render(
//     <StrictMode>
//       {/* 2. Wrap App with BrowserRouter and set the basename */}
//       {/* The basename MUST match your GitHub repository name: /Portfolio */}
//       <BrowserRouter basename="/Portfolio">
//         <App />
//       </BrowserRouter>
//     </StrictMode>
//   );
// } else {
//   // Optional: Add a log or throw an error if the root element is missing
//   console.error("Root element 'root' not found in the document.");
// }