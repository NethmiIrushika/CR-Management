import React, { useState } from 'react';


export default function Register(onStartLogin) {
    const [enteredValues, setEnteredValues] = useState({
        name: "",
        dep: "",
        email: "",
        uname: "",
        password: "",
        utype: ""
    });



    function handleRegister(event) {
        event.preventDefault();
        console.log(enteredValues);


        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);

    }

    function handleInputChange(identifier, value) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: value
        }))
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <div>
                    <h1 className='text-xl font-bold text-stone-500 my-4'>Change Request Management System</h1>
                    <p className='text-stone-400 mb-4'>Register here to create an account</p>
                </div>
                <div>
                    <form onSubmit={handleRegister}>
                        <div className="control-row">
                            <div className="control no-margin">
                                <label htmlFor="name" className="text-sm font-bold uppercase text-stone-500" > Name </label>
                                <input type="text" id="name" name="name" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('name', event.target.value)}
                                    value={enteredValues.name} />
                            </div>
                            <div className="control no-margin">
                                <label htmlFor="department" className="text-sm font-bold uppercase text-stone-500">Department </label>
                                <input type="text" id="dep" name="department" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('dep', event.target.value)}
                                    value={enteredValues.dep} />
                            </div>
                            <div className="control no-margin">
                                <label htmlFor="email" className="text-sm font-bold uppercase text-stone-500">Email </label>
                                <input type="email" id="email" name="email" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('email', event.target.value)}
                                    value={enteredValues.email} />
                            </div>
                            <div className="control no-margin">
                                <label htmlFor="uname" className="text-sm font-bold uppercase text-stone-500">User Name  </label>
                                <input type="text" id="uname" name="userName" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('uname', event.target.value)}
                                    value={enteredValues.uname} />
                            </div>
                            <div className="control no-margin">
                                <label htmlFor="password" className="text-sm font-bold uppercase text-stone-500">Password  </label>
                                <input type="password" id="password" name="password" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('password', event.target.value)}
                                    value={enteredValues.password} />
                            </div>
                            <div className="control no-margin">
                                <label htmlFor="utype" className="text-sm font-bold uppercase text-stone-500">User Type </label>
                                <input type="text" id="utype" name="utype" className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" required
                                    onChange={(event) => handleInputChange('utype', event.target.value)}
                                    value={enteredValues.utype} />
                            </div>
                            <br /> <br />
                            <div className="flex justify-between">
                                <button
                                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                                    type='submit'>
                                    Register
                                </button>

                                {/* Login button */}
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                                    onClick={onStartLogin}>
                                     Login
                                </button>
                            </div>


                        </div>
                    </form>
                </div>

            </div>
        </div>

    );
}