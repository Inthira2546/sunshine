"use client";
import { useEffect, useRef, useState } from "react";
import examImg from "../assets/exam.png";
import { MapPinHouse } from "lucide-react";
import { Joyride } from "react-joyride";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import gemini from "../assets/gemini.png";
import certificate from "@/app/assets/cer.png";
import geogebra from "../assets/geogebra.png";
import { ChevronLeft, BookOpen, Link2 } from "lucide-react";

export default function DetailFinals() {
  const [run, setRun] = useState(true);
  const [open, setOpen] = useState(false);
  const tech = [
    { name: "React" },
    { name: "Tailwind" },
    { name: "PHP" },
    { name: "MySQL" },
  ];

  const steps = [
    {
      target: "#feature-1",
      content: (
        <div>
          <img
            src={img3.src}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p>เรียนผ่านวิดีโอ (ไม่สามารถข้ามได้)</p>
        </div>
      ),
    },
    {
      target: "#feature-2",
      content: (
        <div>
          <img
            src={img1.src}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p>มีคำถามโต้ตอบระหว่างเรียน</p>
        </div>
      ),
    },
    {
      target: "#feature-3",
      content: (
        <div>
          <img
            src={img2.src}
            className="w-full h-32 object-cover rounded mb-2"
          />
          <p>ต้องเรียนตามลำดับก่อนทำแบบทดสอบ</p>
        </div>
      ),
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-[#0b0336] to-[#1e075f] min-h-screen flex flex-col  text-white py-10 px-4"
    >
      <Joyride
        steps={steps}
        run={true}
        continuous={true}
      />
      <h1 className="text-4xl font-bold text-center text-[#d46b36] mb-4">
        เว็บแอปพลิเคชัน "Trigo"
      </h1>
      <p>เนื้อหาของเว็บแอปพลิเคชันจะแบ่งผู้ใช้ออกเป็น 2 ส่วน ได้แก่</p>
      <ul className="list-disc px-4">
        <li>ครู</li>
        <li>นักเรียน</li>
      </ul>

      <div>
        <p className="underline py-2 text-orange-500">
          ตัวอย่างการแสดงเนื้อหา (ส่วนของนักเรียน)
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 p-4">
            <img src={examImg.src} alt="" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-center text-sm md:text-[20px]">
              แบบทดสอบของนักเรียน ในหัวข้อตรีโกณมิติ
            </p>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm bg-[#d46b36]/10 text-[#d46b36] px-3 py-1 rounded-full"
                >
                  {t.name}
                </span>
              ))}
            </div>
            flow งานเบื้องต้น
            <ul className="list-disc ml-4">
              <li>
                มีการทำแบบทดสอบก่อนเรียน - หลังเรียน
                (พร้อมเก็บคะแนนเพื่อแสดงเป็นกราฟพัฒนาการ)
              </li>
              <li id="feature-1">
                หลังจากเรียนจะมีให้เรียนตามคลิปวิดิโอ (นักเรียนกดข้ามไม่ได้)
              </li>
              <li id="feature-2">ระบบประเมินผลการเรียนรู้ผ่านคำถามแบบโต้ตอบ</li>
              <li id="feature-3">
                มีการเปิดให้เรียนตามลำดับหากเรียนไม่จบ
                (ไม่สามรถทำแบบทดสอบหลังเรียนได้)
              </li>
            </ul>
            <p className="text-sm bg-[#d46b36]/10 text-[#d46b36] px-3 my-2 rounded-full inline-block">
              เพิ่มเติม
            </p>
            <p>
              การแสดงผลในรูปแบบของสมการคณิตศาสตร์ นำไลบรารี Mathfield
              ในการเพิ่มประสิทธิภาพเพื่อให้ครูสามารถกรอสมการได้ง่ายขึ้น
              ส่วนของนักเรียนแก้ไขด้วยการดึงสมการจากฐานข้อมูลและลบอักขระพิเศษออก
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center text-orange-500 text-[25px] pt-4">
          การเรียกใช้ API
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="p-4 flex flex-col">
            <img src={gemini.src} alt="" className="w-full h-auto" />
            <p className="text-[18px] bg-[#d46b36]/10 text-[#d46b36] px-3 my-4 rounded text-center p-2 flex-1">
              สร้างโจทย์ตรีโกณมิติสถานการณ์จริงผ่าน Modal Gemini
            </p>
          </div>

          <div className="p-4 flex flex-col">
            <img src={geogebra.src} alt="" className="w-full h-auto" />
            <p className="text-[18px] bg-[#d46b36]/10 text-[#d46b36] px-3 my-4 rounded text-center p-2 flex-1">
              ใช้เครื่องมือ Geogebra ในการแสดงผลฟังก์ชันตรีโกณมิติ
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="self-start px-4 py-2 bg-transparent border border-[#00b4d8] text-[#00b4d8] rounded-md hover:bg-[#00b4d8] hover:text-white transition-all duration-300 inline-block mt-2">
          <button onClick={() => setOpen(true)} className="flex items-center">
            <BookOpen className="mr-2" />
            certificate
          </button>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative">
              <img
                src={certificate.src}
                alt="certificate"
                className="max-h-[90vh] rounded-lg shadow-lg"
              />

              <button
                onClick={() => setOpen(false)}
                className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
