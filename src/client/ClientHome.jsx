import SliderHero from "../components/SliderHero";
import LanguageDropdown from "../components/LanguageDropdown";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaServicestack,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconHover = {
  scale: 1.2,
  rotate: 10,
  transition: { duration: 0.3 },
};

const ClientHome = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <motion.nav
        className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#A9E0C9]/90 to-[#2FB18B]/90
               px-10 py-4 flex justify-between items-center shadow-md backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="text-white text-xl font-semibold flex items-center gap-2">
            <FaHome /> GROUP NNC
          </h1>
        </motion.div>

        <ul className="flex gap-8 text-white font-medium text-lg">
          {[
            { icon: <FaHome />, label: "Accueil" },
            { icon: <FaServicestack />, label: "Services" },
            { icon: <FaPhone />, label: "Contact" },
            { icon: <FaUserTie />, label: "Devenir Franchisé" },
            { icon: null, label: "Devenir Hôte" },
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="cursor-pointer flex items-center gap-1"
              whileHover={{
                scale: 1.15,
                rotate: [0, 5, -5, 0],
                color: "#d1f5e1",
              }}
            >
              {item.icon} {item.label}
            </motion.li>
          ))}
        </ul>

        <motion.div className="flex items-center gap-6">
          <LanguageDropdown />
          <motion.p
            className="text-white text-lg cursor-pointer"
            whileHover={{ scale: 1.1, color: "#d1f5e1" }}
          >
            S’inscrire <span className="mx-1 text-gray-200">/</span> Connexion
          </motion.p>
        </motion.div>
      </motion.nav>

      <header className="relative w-full h-[90vh] overflow-hidden">
        <SliderHero />

        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 text-center text-white z-20"
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold drop-shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Trouvez votre maison de rêve
          </motion.h2>

          <motion.p
            className="mt-4 text-xl md:text-2xl drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Louez facilement avec notre plateforme
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px #2FB18B",
              rotate: [0, 2, -2, 0],
            }}
            className="mt-6 px-8 py-3 bg-[#2FB18B]/90 backdrop-blur-md rounded-full
                   text-white font-semibold shadow-lg"
          >
            Explorer
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-7xl
                 bg-white/30 backdrop-blur-lg shadow-xl rounded-full p-6
                 flex flex-wrap items-center justify-between gap-4 z-20"
        >
          {[
            {
              label: "Destination",
              type: "text",
              placeholder: "Rechercher une destination",
            },
            { label: "Arrivée", type: "date" },
            { label: "Départ", type: "date" },
          ].map((field, idx) => (
            <div key={idx} className="flex flex-col flex-1 min-w-[180px] mb-2">
              <span className="font-semibold text-white">{field.label}</span>

              <motion.input
                type={field.type}
                placeholder={field.placeholder}
                whileFocus={{ scale: 1.02, borderColor: "#2FB18B" }}
                className="text-gray-700 outline-none px-2 py-1 rounded-lg border border-gray-300
                       focus:ring-2 focus:ring-[#2FB18B] transition-all"
              />
            </div>
          ))}

          <div className="flex flex-col flex-1 min-w-[120px] mb-2">
            <span className="font-semibold text-white">Voyageurs</span>

            <motion.select
              whileFocus={{ scale: 1.02, borderColor: "#2FB18B" }}
              className="text-gray-700 outline-none px-2 py-1 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-[#2FB18B] transition-all"
            >
              <option>Invités</option>
            </motion.select>
          </div>

          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="bg-[#2FB18B] text-white p-4 rounded-full text-2xl shadow-lg mb-2"
          >
            🔍
          </motion.button>
        </motion.div>
      </header>

      <footer className="w-full bg-[#2FB18B]/95 text-white py-16 px-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaPhone /> Contactez-nous
            </h2>

            {[
              { icon: <FaEnvelope />, text: "aminechouaya2@gmail.com" },
              { icon: <FaEnvelope />, text: "bilelyaich16@gmail.com" },
              { icon: <FaPhone />, text: "+216 24246333" },
              { icon: <FaPhone />, text: "+216 21761750" },
              { icon: <FaMapMarkerAlt />, text: "Sfax" },
            ].map((item, idx) => (
              <motion.p
                key={idx}
                whileHover={{ scale: 1.05, color: "#d1f5e1" }}
                className="flex items-center gap-2 cursor-pointer"
              >
                {item.icon} {item.text}
              </motion.p>
            ))}
          </motion.div>

          {/* LIENS */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaHome /> Liens utiles
            </h2>

            <ul className="space-y-2">
              {[
                { icon: <FaHome />, text: "Accueil" },
                { icon: <FaServicestack />, text: "Services" },
                { icon: <FaPhone />, text: "Contact" },
                { icon: <FaUserTie />, text: "Devenir Franchisé" },
                { icon: null, text: "Devenir Hôte" },
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={iconHover}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {link.icon} {link.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* RESEAUX */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-4">Suivez-nous</h2>

            <div className="flex gap-4 text-2xl">
              {["📘", "🐦", "📸", "🔗"].map((icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.4, rotate: [0, 10, -10, 0] }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>© 2025 – GROUP NNC. Tous droits réservés.</p>
          <a href="#" className="underline hover:text-white">
            Conditions générales d’utilisation
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

export default ClientHome;
