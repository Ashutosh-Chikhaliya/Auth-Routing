import React, { useState } from "react";

function Login({ setAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "123") {
            setAuth(true);
            alert("Login successful!");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-zinc-900">


            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg w-full max-w-sm ">
                <h1 className="text-2xl font-bold mb-6 text-center text-white">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">

                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg outline-none"
                            placeholder="Username"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg outline-none"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
                    >
                        Login
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Login;
