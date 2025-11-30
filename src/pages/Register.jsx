import { motion } from "framer-motion";
import { useState } from "react";
import { User, Mail, Lock, Calendar, Loader } from "lucide-react";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { registerUser } from "../api/userService";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const res = await registerUser(formData);
      setMessage(res.message);

      navigate("/verify-otp", { state: { email: formData.email } });
    } catch (err) {
      setError(err.message || "Erreur serveur");
    }

    setLoading(false);
  };

  const renderInput = (Icon, type, name, placeholder, value) => (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className="w-full pl-10 px-4 py-2 rounded-lg bg-[#0b1e18] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: "linear-gradient(135deg, #002b23, #014422, #00532d)",
        overflow: "hidden",
      }}
    >
      {/* Bulles lumineuses */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className={`bubble bubble-${i}`}></div>
      ))}

      {/* Carte Register */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0f2c24] bg-opacity-70 backdrop-blur-xl rounded-2xl shadow-2xl p-10 relative z-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        {message && (
          <div className="text-green-400 text-center mb-3">{message}</div>
        )}
        {error && <div className="text-red-500 text-center mb-3">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {renderInput(
            User,
            "text",
            "firstName",
            "First Name",
            formData.firstName
          )}
          {renderInput(
            User,
            "text",
            "lastName",
            "Last Name",
            formData.lastName
          )}
          {renderInput(Mail, "email", "email", "Email", formData.email)}
          {renderInput(
            Lock,
            "password",
            "password",
            "Password",
            formData.password
          )}

          <PasswordStrengthMeter password={formData.password} />

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-green-300" />
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 pl-10 rounded-lg bg-[#0b1e18] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit */}
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
              "Register"
            )}
          </motion.button>
        </form>

        <p className="text-sm text-gray-400 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:underline">
            Login
          </Link>
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

export default RegisterPage;
