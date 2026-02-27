"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthPage() {
  const router = useRouter();

  const [register, setRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    router.push("/");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // New user must register first -> then move to Login tab automatically
    alert("Account Created! Now login with your Email & Password");
    setName("");
    setRegister(false); // Switch to Login panel automatically
  };

  return (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-400">

    <AnimatePresence mode="wait">

      {/* LOGIN PAGE */}
      {!register && (
        <motion.div
          key="loginPage"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-[500px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Login</h2>

          <form onSubmit={handleLogin}>
            <input
              className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full p-3 mb-6 rounded-lg bg-white/20 placeholder-white outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <motion.button whileHover={{ scale: 1.05 }} className="w-full bg-white text-pink-500 p-3 rounded-lg font-semibold">
              Login
            </motion.button>
          </form>

          <p className="mt-6 text-center cursor-pointer" onClick={() => setRegister(true)}>
            New User? Create Account
          </p>
        </motion.div>
      )}

      {/* REGISTER PAGE */}
      {register && (
        <motion.div
          key="registerPage"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[650px] backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-12 text-white"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white outline-none"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full p-3 mb-4 rounded-lg bg-white/20 placeholder-white outline-none"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full p-3 mb-6 rounded-lg bg-white/20 placeholder-white outline-none"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <motion.button whileHover={{ scale: 1.05 }} className="w-full bg-white text-pink-500 p-3 rounded-lg font-semibold">
              Register
            </motion.button>
          </form>

          <p className="mt-6 text-center cursor-pointer" onClick={() => setRegister(false)}>
            Already have an account? Sign In
          </p>
        </motion.div>
      )}

    </AnimatePresence>

  </div>
);
}
