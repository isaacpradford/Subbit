import { useState } from "react";

export default function UserRegistration()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        password: ''        
    })

    const [errorMessage, setErrorMessage] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value})
        console.log(formData);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5500/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // User registered successfully
                console.log(data.message);
                setRegistrationSuccess(true);
                setErrorMessage('');
            } else {
                // Registration failed
                setErrorMessage(data.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return ( 
        <div className="w-full max-w-xs h-screen flex items-center justify-center m-auto">
            {registrationSuccess ? (
                <div className="bg-subitt shadow-md rounded px-8 pt-6 pb-8 mb-4 scale-110">
                    <h1 className="font-bold text-2xl text-white rounded">Thank you for registering!</h1>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 scale-110">
                    <div className="text-subitt mb-10 rounded">
                        <h1 className="font-bold text-2xl">Welcome to Subitt!</h1>
                        <h4>Please register an account:</h4>
                    </div>

                    <div className="full-name pb-5">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4 pb-2" htmlFor="full-name">Full Name:</label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-subitt" id="inline-full-name" type="text" name="name" required placeholder="Full Name" onChange={handleChange}></input>
                    </div>

                    <div className="email pb-5">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4 pb-2" htmlFor="email">Email:</label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-subitt" type="email" name="email" required placeholder="Email" onChange={handleChange}></input>
                    </div>

                    <div className="password pb-5">
                        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4 pb-2" htmlFor="password">Password:</label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-subitt" type="password" name="password" required placeholder="Password" onChange={handleChange}></input>
                    </div>

                    <button className="transition shadow bg-subitt hover:bg-orange-500 hover:scale-105 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" >Submit</button>

                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                </form>
            )}
        </div>
    );
}
