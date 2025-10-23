"use client"
import Navbar from "./navbar";
import { SiLine } from "react-icons/si";
import { Phone, Mail, Facebook, Github, Instagram, X } from 'lucide-react';
import imageInthi from './assets/inthi.png';
import sunshine from './assets/sunshine.jpg';
import bg from './assets/bg.png';
import { useState } from "react";
import './style/animation.css';
import Projects from "./projects";
import Figmas from "./figma";

export default function Home() {
  const [bar, setBar] = useState(false);

  return (
    <div>
      <Navbar />
      <section id="home" className="mt-20">
        <div className="flex gap-4 flex-col-reverse items-center md:flex-row">

          <div className="bg-black w-full md:w-1/3 h-[100vh] flex items-center justify-center shadow-sm text-gray-900 py-4 slide-left-delay bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="flex flex-col items-center justify-center text-white">
              <img src={imageInthi.src} alt="รูปโปรไฟล์" className="w-32 h-32 rounded-full" />
              <div className="py-2 text-center leading-loose">
                <p className="font-semibold">อินทิรา  ฤทธิพรม (บีม)</p>
                <div className="text-sm">
                  นักศึกษาชั้นปีที่ 4 มหาวิทยาลัยขอนแก่น <br />
                  วิทยาลัยการคอมพิวเตอร์ สาขา เทคโนโลยีสารสนเทศ <br />
                  เกรดเฉลี่ยสะสม 3.00
                </div>
                <ul className="mt-2 flex items-center justify-center gap-4 py-2">
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1"><a href="https://www.facebook.com/inthi.ritt"><Facebook size={15} className="text-gray-700" /></a></li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1"><a href="https://line.me/ti/p/0936404330"><SiLine size={15} className="text-gray-700" /></a></li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1"><a href="https://www.instagram.com/xnxhi_xitt/"><Instagram size={15} className="text-gray-700" /></a></li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1"><a href="https://github.com/Inthira2546"><Github size={15} className="text-gray-700" /></a></li>
                </ul>
                <hr className="text-gray-200" />
                <ul className="text-sm border p-4 text-center m-4 rounded">
                  <li className="flex gap-2 items-center"><Phone size={16} className="text-gray-600" /> 065-3710277</li>
                  <li className="flex gap-2 items-center"><Mail size={16} className="text-gray-600" /> Inthira.r@kkumail.com</li>
                </ul>
              </div>
              <div>
                <span className="flex items-center justify-center gap-1">Skill</span>
                <hr className="text-gray-200 py-1" />
                <ul className="list-disc text-white text-sm leading-loose">
                  <li>HTML, CSS, Tailwind</li>
                  <li>Responsive Design</li>
                  <li>Ux/Ui Design</li>
                  <li>Figma</li>
                  <li>Android: Kotlin, Flutter (Beginner)</li>
                  <li>MySQL, Firebase</li>
                  <li>Microsoft Office</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 h-[100vh] flex items-center justify-center bg-[#2b3b2b] relative">
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black"></div>
            <h1 className="absolute top-15 md:top-8 left-25 text-[95px] md:text-[120px] font-bold text-white z-10 text-shadow-gray-600 slide-left">
              PORTFOLIO
            </h1>

            <div className="absolute top-38 left-48 text-[80px] font-extrabold text-transparent opacity-20 select-none z-0 slide-left-delay" style={{ WebkitTextStroke: '2px #c8b668' }}>
              PORTFOLIO<br /> ...TROP <br /> TRFOLIO
            </div>

            <div className="absolute top-36 left-16 bg-[#d46b36]/85 w-80 h-96 flex items-center justify-center overflow-hidden">
              <img src={sunshine.src} alt="รูปโปรไฟล์" className="opacity-85 object-cover w-full h-full" />
            </div>
            <p className="absolute bottom-8 2xl:bottom-48 left-20 max-w-xl text-sm text-gray-200 bg-[#d46b36]/95 px-3 py-2 font-semibold leading-loose">มีความเชี่ยวชาญในรายวิชาเลือกด้านการพัฒนาแอปพลิเคชันบนมือถือและเว็บ มีทักษะในการพัฒนาโปรแกรมโดยใช้เทคโนโลยีสมัยใหม่ พร้อมทั้งมีความสามารถในการทำงานร่วมกับผู้อื่นอย่างมีประสิทธิภาพ สามารถทำหน้าที่ทั้งในฐานะผู้นำหรือสมาชิกทีมตามความจำเป็น เปิดรับคำติชมอย่างต่อเนื่อง และสามารถทำงานได้อย่างมีประสิทธิผลภายใต้แรงกดดัน</p>
          </div>

        </div>
      </section>
      <Projects />
      <Figmas />
      <footer className="bg-black text-gray-400 py-6 mt-2">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© 2025 Inthira Ritthiprom</p>
          <div className="flex gap-2 mt-2 md:mt-0">
            <div className="w-7 h-7 bg-gray-600 flex items-center justify-center rounded-full"><a href="mailto:inthira@kkumail.com" className="hover:text-white"><Mail size={16}/></a></div>
            <div className="w-7 h-7 bg-gray-600 flex items-center justify-center rounded-full"><a href="https://github.com/Inthira2546" className="hover:text-white"><Github size={16}/></a></div>
          </div>
        </div>
      </footer>

    </div>
  );
}
