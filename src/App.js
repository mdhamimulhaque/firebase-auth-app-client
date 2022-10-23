import './App.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
