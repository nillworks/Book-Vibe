import { Outlet } from 'react-router';
import NavBar from './Components/Shared/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
