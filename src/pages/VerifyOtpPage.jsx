import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../api/userService";
import { motion } from "framer-motion";
import OtpInput from "../components/OtpInput";


const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await verifyOtp({ email, otp });
      setMessage("Compte vérifié avec succès !");
      setTimeout(() => navigate("/login"), 2000); 
    } catch (err) {
      setError(err.message || "OTP invalide");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-40 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-xl rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-green-400">
          Vérifiez votre e-mail
        </h2>

        {message && <p className="text-green-400 text-center mb-2">{message}</p>}
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
        <OtpInput length={6} onChange={setOtp} />

          <input
            type="text"
            placeholder="Entrez le code OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-700 transition duration-200"
          >
            Vérifier
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default VerifyOtpPage;
