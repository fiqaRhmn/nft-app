'use client';
import { signIn } from "next-auth/react";
import Web3 from 'web3';
import React, { useState } from 'react';

function Login() {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Failed to connect to MetaMask:", error);
            }
        } else {
            console.log("MetaMask is not installed. Please consider installing it!");
        }
    };

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='text-xl font-bold'>Welcome to MintableLite</h1>

            <div className='my-3 border-2 px-5 py-3 rounded-full outline-black bg-purple-700 
            text-white font-bold cursor-pointer shadow-md hover:scale-105 hover:shadow-lg 
            transition-transform transition-200'>
                <button className='flex items- justify-center' onClick={() => signIn("google")}>Login with Google</button>
            </div>

            {account ? (
                <p>Connected to: {account}</p>
            ) : (
                <div className='my-3 border-2 px-5 py-3 rounded-full outline-black bg-blue-600 
                text-white font-bold cursor-pointer shadow-md hover:scale-105 hover:shadow-lg 
                transition-transform transition-200'>
                    <button className='flex items- justify-center' onClick={connectWallet}>Connect Wallet</button>
                </div>
            )}
        </div>
    )
}

export default Login;
