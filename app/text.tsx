"use client";
import { useEffect, useRef, useState } from "react";
import trigoImg from "./assets/trigo.png";
import { MapPinHouse } from "lucide-react";

export default function TextContent() {
  return (
    <div
      id="projects"
      className="bg-black text-white py-10 px-4 text-left border border-gray-800 flex "
    >
      <MapPinHouse className="w-12 h-12" />
      <span className="ml-4">มีความรับผิดชอบต่อหน้าที่และสามารถทำงานให้สำเร็จตรงตามเป้าหมายที่กำหนด
      สามารถเรียนรู้งานได้รวดเร็วและทำงานร่วมกับทีมได้อย่างมีประสิทธิภาพ
      ทั้งในบทบาทผู้นำและสมาชิกทีม เปิดรับคำติชมเพื่อพัฒนาตัวเองอย่างต่อเนื่อง
      มีความคิดสร้างสรรค์ในการแก้ปัญหา และมุ่งมั่นสร้างผลงานที่มีคุณภาพ</span>
    </div>
  );
}
