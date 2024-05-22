import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared-pages/Header/Header';
import Home from './Pages/Single-pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/Shared-pages/LeashPages/PagesRouter/LinkedPages';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}

      <RouterProvider router={router}></RouterProvider>

      {/* <Home></Home> */}

      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <script src="https://kit.fontawesome.com/fc18c0a387.js" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;