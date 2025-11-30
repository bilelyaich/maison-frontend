import  { useState } from "react";

const LanguageDropdown = () => {
const [open, setOpen] = useState(false);
const [selected, setSelected] = useState({ code: "TND", flag: "🇫🇷", label: "Français" });

const languages = [
{ code: "EN", flag: "🇬🇧", label: "Anglais" },
{ code: "FR", flag: "🇫🇷", label: "Français" },
{ code: "AR", flag: "🇹🇳", label: "Arabe" },
{ code: "DE", flag: "🇩🇪", label: "Allemand" },
];

const handleSelect = (lang) => {
setSelected(lang);
setOpen(false);
};

return ( <div className="relative">
<button
onClick={() => setOpen(!open)}
className="bg-white text-black px-3 py-1 rounded-lg flex items-center gap-2"
> <span>{selected.flag}</span> <span>{selected.code}</span> <span>▼</span> </button>

  {open && (
    <ul className="absolute top-full right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50">
      {languages.map((lang) => (
        <li
          key={lang.code}
          onClick={() => handleSelect(lang)}
          className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
        >
          <span>{lang.flag}</span>
          <span>{lang.label}</span>
        </li>
      ))}
    </ul>
  )}
</div>


);
};

export default LanguageDropdown;
