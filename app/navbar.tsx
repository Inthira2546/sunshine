"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home'); 

  const links = [
    { name: 'หน้าหลัก', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'Figma', href: 'figma' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; 

      links.forEach(link => {
        const section = document.getElementById(link.href);
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-black shadow-gray-500 z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-white text-[25px]">Portfolio</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
        <ul className="hidden md:flex gap-6 text-white font-semibold">
          {links.map(link => (
            <li key={link.href}>
              <a href={`#${link.href}`} className={`hover:border-b-2 hover:text-yellow-500 ${active === link.href ? 'text-yellow-500 border-b-2' : ''}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white font-semibold">
            {links.map(link => (
              <li key={link.href}>
                <a href={`#${link.href}`} onClick={() => setIsOpen(false)} className={`hover:text-yellow-500 hover:border-b-2 ${active === link.href ? 'text-yellow-500 border-b-2' : ''}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
