import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cybersecurity from './Components/Cybersecurity';
import AppShellDemo from './Components/appshell';
import Coursed from './Components/course';
import AppShell2 from './Components/trial';
import { useState } from 'react';

//  function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<AppShellDemo />} />
//           <Route path='/datascience' element={<Cybersecurity />}/>
//           <Route path='/courses' element={<Coursed />}/>
//         </Routes>
//       </BrowserRouter> 
//     </div>
//   );
// }
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <AppShell2 onSearch={setSearchQuery}/> }/>
        <Route path="/coursed" element={<Coursed searchQuery={searchQuery}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
