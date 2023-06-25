import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Notifiction = () => {
    return (
        <>
<ToastContainer
position="bottom-right"
autoClose={5000}
// to limmit the number of Toast that appers
limit={2}
/>
     </>
    );
}

export default Notifiction;
