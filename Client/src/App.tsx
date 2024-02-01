import { type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SplashScreen from './pages/Onboarding/SplashScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SplashScreen />
  }
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
