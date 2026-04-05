"use client";
import Navbar from "./navbar";
import { SiLine } from "react-icons/si";
import { Phone, Mail, Facebook, Github, Instagram, X } from "lucide-react";
import imageInthi from "./assets/profile.jpg";
import sunshine from "./assets/sunshine.jpg";
import bg from "./assets/bg.png";
import { useState } from "react";
import "./style/animation.css";
import Projects from "./projects";
import Figmas from "./figma";
import FinalProjects from "./final";
import TextContent from "./text";

export default function Home() {
  const [bar, setBar] = useState(false);

  return (
    <div>
      <Navbar />
      <section id="home" className="mt-20">
        <div className="flex gap-4 flex-col-reverse items-center md:flex-row">
          <div
            className="bg-black w-full md:w-1/3 h-[100vh] flex items-center justify-center shadow-sm text-gray-900 py-4 slide-left-delay bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="flex flex-col items-center justify-center text-white">
              <img
                src={imageInthi.src}
                alt="รูปโปรไฟล์"
                className="w-40 h-40 rounded-full object-cover"
              />
              <div className="py-2 text-center leading-loose">
                <p className="font-semibold">อินทิรา ฤทธิพรม (อิน)</p>
                <div className="text-sm">
                  นักศึกษาชั้นปีที่ 4 มหาวิทยาลัยขอนแก่น <br />
                  วิทยาลัยการคอมพิวเตอร์ สาขา เทคโนโลยีสารสนเทศ <br />
                  เกรดเฉลี่ยสะสม 2.98
                </div>
                <ul className="mt-2 flex items-center justify-center gap-4 py-2">
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1">
                    <a href="https://www.facebook.com/inthi.ritt">
                      <Facebook size={15} className="text-gray-700" />
                    </a>
                  </li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1">
                    <a href="https://line.me/ti/p/0936404330">
                      <SiLine size={15} className="text-gray-700" />
                    </a>
                  </li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1">
                    <a href="https://www.instagram.com/xnxhi_xitt/">
                      <Instagram size={15} className="text-gray-700" />
                    </a>
                  </li>
                  <li className="bg-amber-300 h-7 w-7 flex items-center justify-center rounded-full hover:bg-amber-400 transition-tranform duration-200 ease-in-out hover:translate-y-1">
                    <a href="https://github.com/Inthira2546">
                      <Github size={15} className="text-gray-700" />
                    </a>
                  </li>
                </ul>
                <hr className="text-gray-200" />
                <ul className="text-sm border p-4 text-center m-4 rounded">
                  <li className="flex gap-2 items-center">
                    <Phone size={16} className="text-gray-600" /> 065-3710277
                  </li>
                  <li className="flex gap-2 items-center">
                    <Mail size={16} className="text-gray-600" />{" "}
                    inthi.ritthi@gmail.com
                  </li>
                </ul>
              </div>
              <div>
                <span className="flex items-center justify-center gap-1">
                  Skill
                </span>
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

          <div className="w-full md:w-2/3 min-h-screen flex items-center justify-center bg-[#2b3b2b] relative overflow-hidden px-4 sm:px-8">
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-black"></div>

            <h1 className="absolute top-10 sm:top-12 md:top-8 left-4 sm:left-10 md:left-20  text-[62px] sm:text-[70px] md:text-[120px]  font-bold text-white z-10 slide-left">
              PORTFOLIO
            </h1>

            <div
              className="absolute top-32 sm:top-36 md:top-38 left-15 sm:left-20 md:left-48   text-[60px] sm:text-[60px] md:text-[80px]  font-extrabold text-transparent opacity-20 select-none z-0 slide-left-delay"
              style={{ WebkitTextStroke: "2px #c8b668" }}
            >
              PORTFOLIO
              <br /> ...TROP <br /> TRFOLIO
            </div>

            <div className="absolute top-32 sm:top-36 md:top-36 left-4 sm:left-10 md:left-16  bg-[#d46b36]/85 w-52 sm:w-64 md:w-80  h-64 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
              <img
                src={sunshine.src}
                alt="รูปโปรไฟล์"
                className="opacity-85 object-cover w-full h-full"
              />
            </div>

            <p className="absolute  bottom-6 sm:bottom-10 md:bottom-0  left-6 sm:left-10 md:left-50  max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-xs sm:text-sm md:text-sm text-gray-200   bg-[#d46b36]/95    px-3 sm:px-4 py-2 sm:py-3  font-semibold leading-relaxed sm:leading-loose  rounded-md shadow-lg  md:overflow-visible">
              มีความเชี่ยวชาญด้านการพัฒนาเว็บแอปพลิเคชันทั้งฝั่ง Front-end และ
              Back-end โดยถนัดการออกแบบและพัฒนา Front-end เป็นพิเศษ
              สามารถสร้างอินเทอร์เฟซที่ใช้งานง่ายและตอบสนองได้ดี
              พร้อมทักษะในการเชื่อมต่อกับระบบ Back-end และฐานข้อมูลต่าง ๆ
              นอกจากนี้มีประสบการณ์ในการทดสอบระบบเว็บแอปพลิเคชัน
              ตรวจสอบข้อผิดพลาด และปรับปรุงประสิทธิภาพของโปรเจกต์
              ทำให้ระบบมีความเสถียรและตอบสนองผู้ใช้ได้ดี
              สามารถปรับตัวและเรียนรู้เทคโนโลยีใหม่ ๆ เช่น React, Vite,
              Tailwind, และ Node.js
              เพื่อนำไปประยุกต์ใช้ในการพัฒนาเว็บที่ทันสมัยและมีประสิทธิภาพ
              มีความสามารถในการออกแบบ UI/UX ให้สวยงามและใช้งานง่าย เข้าใจหลักการ
              Responsive Design
              และสามารถพัฒนาเว็บให้ใช้งานได้บนอุปกรณ์หลายชนิดอย่างราบรื่น
              มีความสนใจในการเรียนรู้เทคโนโลยีล่าสุดและแนวทางปฏิบัติที่ดีที่สุด
              เพื่อสร้างผลงานที่มีคุณภาพสูงและตอบสนองต่อความต้องการของผู้ใช้ได้อย่างเต็มที่
            </p>
          </div>
        </div>
      </section>
      <TextContent/>
      <Projects />
      <Figmas />
      <FinalProjects/>
      <footer className="bg-black text-gray-400 py-6 mt-2">
        <div className="mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>© 2025 Inthira Ritthiprom</p>
          <div className="flex gap-2 mt-2 md:mt-0">
            <div className="w-7 h-7 bg-gray-600 flex items-center justify-center rounded-full">
              <a href="mailto:inthira@kkumail.com" className="hover:text-white">
                <Mail size={16} />
              </a>
            </div>
            <div className="w-7 h-7 bg-gray-600 flex items-center justify-center rounded-full">
              <a
                href="https://github.com/Inthira2546"
                className="hover:text-white"
              >
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
