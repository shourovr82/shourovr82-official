import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';

function App({ chidlren }) {
  return (
    <div>
      <RouterProvider router={router}>
        {chidlren}
      </RouterProvider>
    </div>
  );
}

export default App;
