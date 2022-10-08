import React from 'react';

const Modal = ({ close }) => {
    return (
        <>
            <div className="modal">
                <form  className="products-form">

                    <div className="input-container">
                        <label htmlFor="first_name">Name</label>
                        <input 
                            type="text" 
                            id="first_name" 
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="last_name">Lastname</label>
                        <input 
                            type="text" 
                            id="Last_name" 
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input 
                            type="email" 
                            id="email" 
                        />
                    </div>

                    <div className="input-container">
                        <label htmlFor="birthday">Birthday</label>
                        <br />
                        <input 
                            type="date" 
                            id="birthday" 
                        />
                    </div>

                    <button>Submit</button>



                </form>
            </div>
            <div className='overlay' onClick={close}></div>
        </>
    );
};

export default Modal;
