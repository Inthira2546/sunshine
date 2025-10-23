"use client";
import { useEffect, useRef, useState } from "react";
import trigoImg from './assets/trigo.png';
import movieImg from './assets/movieapps.png';
import checkmeImg from './assets/checkme.png';
import healthImg from './assets/health.png';
import './style/animation.css';
import { ChevronLeft, ChevronRight ,Link2} from 'lucide-react';
import { link } from "fs";

export default function Projects() {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const projects = [
        { title: 'เว็บแอปพลิเคชัน "Trigo"', description: "นักเรียนสามารถดูวิดีโอ แบบทดสอบ ตอบคำถาม รับ feedback จาก AI", image: trigoImg, tech: ["React", "Tailwind", "PHP", "MySQL"] , link:'https://itweb0867.cpkku.com/'},
        { title: "แอปพลิเคชันจองตั๋วหนัง", description: "Mini project สำหรับจองตั๋วภาพยนตร์ในโรงหนัง สามารถเลือกที่นั่งและเวลาฉายได้", image: movieImg, tech: ["Kotlin", "MySQL"] , link:''},
        { title: 'เว็บไซต์เช็คชื่อ "Check Me"', description: "เช็คชื่อนักเรียนแต่ละห้องเรียน โดยล็อกอินและเช็คชื่อลงเวลาเรียนตาม classroom", image: checkmeImg, tech: ["React", "Firebase"],link:'https://inthira2546.github.io/Checkname-final/#' },
        { title: 'เว็บไซต์เช็คชื่อ "Health YOU"', description: "เว็บให้คำแนะนำเกี่ยวกับการออกกำลังกาย และการรับประทานอาหารเพื่อสุขภาพ", image: healthImg, tech: ["HTML", "CSS"] ,link:'https://inthira2546.github.io/website/' },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('animate');
                });
            },
            { threshold: 0.2 }
        );
        cardRefs.current.forEach(card => { if (card) observer.observe(card); });
        return () => observer.disconnect();
    }, []);

    const prev = () => setStartIndex(prev => (prev - visibleCount + projects.length) % projects.length);
    const next = () => setStartIndex(prev => (prev + visibleCount) % projects.length);

    const slides = [...projects, ...projects];

    return (
        <div id="projects" className="bg-gradient-to-b from-[#0b0336] to-[#1e075f] min-h-screen flex flex-col items-center justify-center text-white py-10">
            <h1 className="text-4xl font-bold text-center text-[#d46b36] mb-12">ผลงานโปรเจ็กต์</h1>

            <div className="relative w-full max-w-6xl">
                <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#d46b36]/80 p-2 rounded-full z-10 hover:bg-[#d46b36]/100">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#d46b36]/80 p-2 rounded-full z-10 hover:bg-[#d46b36]/100">
                    <ChevronRight size={24} />
                </button>

                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}>
                        {slides.map((project, index) => (
                            <div key={index} className={`flex-none p-2`} style={{ flexBasis: `${100 / visibleCount}%` }}>
                                <div ref={el => { cardRefs.current[index] = el }} className="relative bg-white rounded-md shadow-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[4px] after:bg-[#d46b36] after:transition-all after:duration-300 hover:after:w-full project-card" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <img src={project.image.src || "/placeholder.png"} alt={project.title} className="w-full h-56 object-cover bg-[#f7f7f7]" />
                                    <div className="p-6 flex flex-col h-full">
                                        <h2 className="text-xl font-semibold text-[#d46b36] mb-2">{project.title}</h2>
                                        <p className="text-gray-700 mb-4 leading-relaxed flex-grow text-justify">{project.description}</p>
                                        <div className="mb-2 flex justify-end"><a href={project.link} className="text-black h-7 w-7 bg-amber-300 flex items-center justify-center rounded-full shadow-lg hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1"><Link2 size={16}/></a></div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-sm bg-[#d46b36]/10 text-[#d46b36] px-3 py-1 rounded-full">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
