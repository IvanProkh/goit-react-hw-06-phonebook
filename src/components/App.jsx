import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <div>Hello</div>
      <ToastContainer autoClose={3000} />
    </>
  );
};
