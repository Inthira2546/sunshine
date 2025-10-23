"use client";
import BookingImg from "./assets/booking.png";
import H2OImg from "./assets/h2o.png";
import { Link2 } from 'lucide-react';
import './style/animation.css';

export default function Figmas() {
    return (
        <div id="figma" className="bg-gradient-to-b from-black to-[#0b0336] min-h-screen text-white py-8 px-4">
            <div className="flex flex-col gap-8">
                <div className=" w-full shadow-lg overflow-hidden flex flex-col md:flex-row delay">
                    <div className="md:w-1/2">
                        <img src={BookingImg.src} alt="ภาพเว็บจองที่พัก" className="w-full h-full object-cover" />
                    </div>

                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#00b4d8] uppercase tracking-wide">
                            เว็บจองที่พัก
                        </h2>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            เว็บไซต์สำหรับการจองที่พักที่ออกแบบในรายวิชา Human Science
                            Computer มีฟังก์ชันเลือกวันเช็คอิน เช็คเอาท์ และดูรายละเอียดของที่พัก
                            พร้อมระบบจัดการข้อมูลผู้จองอย่างครบถ้วน
                        </p>

                        <div className="self-start px-4 py-2 bg-transparent border border-[#00b4d8] text-[#00b4d8] rounded-md hover:bg-[#00b4d8] hover:text-white transition-all duration-300">
                            <a href="https://www.figma.com/proto/7rfqftlyl42pFjKKvEBVkQ/Untitled?node-id=1-2&t=YPhGUvoF6eQv4vZD-1" className="flex"> <Link2 className="mr-2" />ดูรายละเอียด</a>
                        </div>
                    </div>
                </div>
                <div className=" w-full shadow-lg overflow-hidden flex flex-col-reverse md:flex-row delay">
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#00b4d8] uppercase tracking-wide">
                            แอปพลิเคชันขายของมือสอง
                        </h2>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            แอปพลิเคชันที่ออกแบบในรายวิชา Human Science
                            Computer มีฟังก์ชันการซื้อขาย และชำระเงินอย่างครบถ้วน
                            ในการออกแบบ ชื่อแอปพลิเคชัน <span className="font-semibold">Shopto2</span> <br />
                            ในการออกแบบต้องทำการสอบถามปัญหาจากผู้ใช้งาน เนื่องจากผู้จัดทำเล็งเห็นว่า ในปัจจุบันสิ่งของมือสองที่สามารถใช้ประโยชน์ได้ แต่ไม่ได้ใช้ประโยชน์ ซึ่งเราสามารถนำมาเทรด หรือแลกเปลี่ยนกันได้ รวมทั้งสามารถลงขายสินค้ามือสอง จึงเกิดเป็นแอปพลิเคชันนี้<br /> 
                        </p>

                        <div className="self-start px-4 py-2 bg-transparent border border-[#00b4d8] text-[#00b4d8] rounded-md hover:bg-[#00b4d8] hover:text-white transition-all duration-300">
                            <a href="https://www.figma.com/proto/02aiBeepARN4XgMxIt0Tx8/PRO_J_HCI?node-id=1-2&starting-point-node-id=1%3A2&t=CM9oNLSXnKc1nZir-1" className="flex"> <Link2 className="mr-2" />ดูรายละเอียด</a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={H2OImg.src} alt="ภาพแอปพลิเคชัน" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}
