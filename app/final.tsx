"use client";
import { useEffect, useRef, useState } from "react";
import trigoImg from "./assets/trigo.png";
import "./style/animation.css";
import { Link2 } from "lucide-react";
import Link from "next/link";

export default function FinalProjects() {
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-[#0b0336] to-[#1e075f] min-h-screen flex flex-col items-center justify-center text-white py-10 px-4"
    >
      <h1 className="text-4xl font-bold text-center text-[#d46b36] mb-12">
        FinalProject
      </h1>
      <div className=" w-full shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={trigoImg.src}
            alt="ภาพเว็บจองที่พัก"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#00b4d8] uppercase tracking-wide">
            การพัฒนาเว็บแอปพลิเคชัน "Trigo"
          </h2>
          การพัฒนาเว็บแอปพลิเคชัน <span className="font-bold">"Trigo" </span>
          เป็นโครงงานที่มุ่งเน้นให้ผู้เรียนได้ศึกษาเนื้อหาตรีโกณมิติผ่านการใช้งานเว็บแอปพลิเคชัน
          โดยถูกออกแบบมาเพื่อเป็นเครื่องมือสนับสนุนการเรียนรู้สำหรับนักเรียนมัธยมศึกษาตอนปลาย
          การพัฒนาใช้เทคโนโลยีสมัยใหม่ในการสร้างอินเตอร์เฟซที่ใช้งานง่าย
          รวมถึงการออกแบบระบบฟังก์ชันต่างๆที่ช่วยเสริมการเรียนรู้ เช่น
          การนำเสนอเนื้อหาในรูปแบบบทเรียนแบบโต้ตอบ
          การสร้างแบบทดสอบและตอบคำถามระหว่างบทเรียน ติดตามพัฒนาการของผู้เรียน
          รวมถึงการเชื่อมต่อกับ API ภายนอก
          เพื่อเปิดโอกาสให้ผู้เรียนได้ทดลองทำโจทย์ตามสถานะการณ์จริงและฝึกทักษะเพิ่มเติมในการเรียนรู้
          <p className="indent-6">
            จุดเด่นของเว็บแอปพลิเคชันคือการนำเสนอเนื้อหาตรีโกณมิติผ่านเว็บแอปพลิเคชันที่ให้ผู้เรียนได้เข้าถึงบทเรียน
            วีดีโอ คำถามระหว่างบทเรียน และแบบทดสอบได้อย่างง่าย
          </p>
          <div className="self-start px-4 py-2 bg-transparent border border-[#00b4d8] text-[#00b4d8] rounded-md hover:bg-[#00b4d8] hover:text-white transition-all duration-300 inline-block mt-2">
            {/* <a
              href="https://www.figma.com/proto/7rfqftlyl42pFjKKvEBVkQ/Untitled?node-id=1-2&t=YPhGUvoF6eQv4vZD-1"
              className="flex"
            > */}
            <Link href="/final" className="flex items-center">
              <Link2 className="mr-2" />
              ดูรายละเอียด
            </Link>
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
