import React from 'react'

const Home = () => {
    return (
        <div className='flex justify-center pt-10 min-h-screen bg-zinc-800 text-white'>
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to My React App</h1>
                <p className="text-lg">
                    This app demonstrates protected routes using authentication.
                </p>

                <div className="mt-6 border p-4 rounded-lg text-left">
                    <h2 className="text-xl font-semibold mb-2">Public Pages:</h2>
                    <ul className="list-disc list-inside">
                        <li><strong>Home</strong> - This page is publicly accessible.</li>
                        <li><strong>Login</strong> - The login page allows users to authenticate.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-4 mb-2">Protected Pages (Require Login):</h2>
                    <ul className="list-disc list-inside">
                        <li className='text-red-500' ><strong>Products</strong> - This page is protected and can only be accessed after logging in.</li>
                        <li className='text-red-500' ><strong>About</strong> - This page is protected and can only be accessed after logging in.</li>
                        <li className='text-red-500' ><strong>Dashboard</strong> - This page is protected and can only be accessed after logging in.</li>
                    </ul>

                    <p className="mt-6">
                        Please use the following credentials to log in and access the protected pages:
                    </p>
                    <div className="bg-zinc-600 p-4 rounded-lg inline-block mt-5">
                        <p><strong>Username:</strong> user</p>
                        <p><strong>Password:</strong> 123</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home