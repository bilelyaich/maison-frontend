import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userService";
import { motion } from "framer-motion";
import { Mail, Lock, Loader,  } from "lucide-react";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await loginUser(formData);
      localStorage.setItem("token", res.token);
      navigate("/client-home");
    } catch (err) {
      setError(err.message || "Erreur de connexion");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(135deg, #002b23, #014422, #00532d)",
        overflow: "hidden",
      }}
    >
      {/* Bulles lumineuses floues */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className={`bubble bubble-${i}`}></div>
      ))}

      {/* Carte Login */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0f2c24] bg-opacity-70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 relative z-10"
      >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Welcome Back
        </h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-2 rounded-lg bg-[#0b1e18] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Input Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full pl-10 px-4 py-2 rounded-lg bg-[#0b1e18] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

           <div className="flex items-center mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-green-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

          {/* Bouton Login */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition duration-200"
          >
            {loading ? (
              <Loader className="animate-spin mx-auto" size={24} />
            ) : (
              "Login"
            )}
          </motion.button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-green-400 hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>

      {/* Style interne pour bulles */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(0, 255, 90, 0.15);
          filter: blur(40px);
          animation: float 12s infinite ease-in-out;
        }

        ${Array.from({ length: 7 })
          .map((_, i) => {
            const size = [200, 250, 300, 180, 230][i % 5];
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const duration = 10 + Math.random() * 10;

            return `
              .bubble-${i} {
                width: ${size}px;
                height: ${size}px;
                top: ${y}%;
                left: ${x}%;
                animation-duration: ${duration}s;
              }
            `;
          })
          .join("")}

        @keyframes float {
          0%   { transform: scale(1) translateY(0); }
          50%  { transform: scale(1.15) translateY(-40px); }
          100% { transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
