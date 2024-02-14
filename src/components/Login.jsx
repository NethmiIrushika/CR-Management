import { useRef, useState } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";



export default function LogIn({ onLogin, onRegister }) {
    const modal = useRef();
    const username = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    function handleLogin(event) {
        event.preventDefault();

        // Validate the form fields
        if (username.current.value.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, username: 'This field is required.' }));
        } else {
            delete errors.username;
        }

        if (password.current.value.trim() === '') {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'This field is required.' }));
        }  

        

        const enteredUserName = username.current.value;
        const enteredPassword = password.current.value;

        // Check if the user and password exist in the database
        // Replace this with an actual API call and handle the response accordingly
        const existingUser = users.find(
            (user) => user.username === enteredUserName && user.password === enteredPassword
        );

        if (!existingUser) {
            // Display the error message without using the modal
            alert("Your username or password is incorrect. Please enter the correct values.");
            return;
        }

        // If everything checks out, display the success message and redirect to the dashboard
        alert("You are successfully logged in!");

        setTimeout(() => {
            window.location.href = "/dashboard";
        });

        onLogin({
            username: enteredUserName,
            password: enteredPassword,
        });
    }

    return (
        <form>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input </h2>
                <p className='text-stone-600 mb-4'>Oops ... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                    <Input
                        ref={username}
                        label="User Name"
                        error={errors.username}
                        onChange={(event) => {
                            handleChange('username', event);
                            setErrors((prevErrors) => ({ ...prevErrors, username: undefined }));
                        }}
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        ref={password}
                        label="Password"
                        error={errors.password}
                        password
                        onChange={(event) => {
                            handleChange('password', event);
                            setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
                        }}
                    />
                    <button onClick={() => setShowPassword(!showPassword)}>Show Password</button>

                    <menu className="flex justfy-center justify-end gap-4 my-4">
                        <li>
                            <button
                                className="text-stone-800 hover:text-stone-950"
                                onClick={onRegister}
                                type="button"
                            >
                                Register</button>
                        </li>
                        <li>
                            <button
                                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
                                onClick={handleLogin}>
                                LogIn
                            </button>
                        </li>

                    </menu>
                </div>

            </div>
        </form>
    );
}