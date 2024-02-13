import { useRef, useState } from "react";

import Input from "./Input.jsx";
import Modal from "./Modal.jsx";


export default function LogIn({onLogin, onRegister}){
    const modal = useRef();
    const username = useRef();
    const password = useRef();
    const [showPassword, setShowPassword]=useState(false);

    function handleLogin(event){
        const enteredUserName= username.current.value;
        const enteredPassword = password.current.value;

        
       

        if(enteredUserName.trim() === '' || enteredPassword.trim() === ''){
            // modal
            modal.current.open();
            return;
        }

        event.preventDefault();
        alert ("Login Successed!");

        setTimeout(() => {
            window.location.href = "/crCreate";
        });

        onLogin({
            username:enteredUserName,
            password: enteredPassword
        });

    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input </h2>
            <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
            <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950" onClick={onRegister}>Register</button>
            </li>
            <li>
                <button 
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                onClick={handleLogin}>
                    LogIn
                </button>
            </li>

            </menu>
            <div>
               <Input ref={username} label="User Name"/>
               
               <Input
                type={showPassword ? "text":"password"}
                ref={password}
                label="Password" password/>
                <button onClick={()=> setShowPassword(!showPassword)}>Show Password </button>
            </div>
        </div>
        </>
    );
}