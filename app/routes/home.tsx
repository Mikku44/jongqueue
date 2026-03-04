import { FaFacebook } from "react-icons/fa";
import type { Route } from "./+types/home";
import { HiOutlinePhone } from "react-icons/hi2";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "จองQueue | แพลตฟอร์มจองคิวออนไลน์สำหรับธุรกิจบริการ" },
		{
			name: "description",
			content:
				"จองQueue แพลตฟอร์มโปรโมทร้านและรับจองคิวออนไลน์ในที่เดียว สำหรับสปา คลินิก และธุรกิจบริการ ช่วยเพิ่มลูกค้าใหม่และจัดการตารางเวลาอย่างมืออาชีพ",
		},
		{
			property: "og:title",
			content: "จองQueue | เปิดรับคิวลูกค้าได้แล้ววันนี้",
		},
		{
			property: "og:description",
			content:
				"เพิ่มลูกค้าใหม่ โปรโมทร้าน และรับจองคิวออนไลน์ในที่เดียว กับจองQueue",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:url", content: "https://www.jongqueue.com" },
		{
			property: "og:image",
			content: "https://www.jongqueue.com/banner.png",
		},
	];
}

export default function Home() {
	return (
		<div className="relative max-w-screen overflow-hidden">

			{/* <img
				src="/flower.svg"
				className="absolute left-[-100px] bottom-[-400px] opacity-25 grayscale brightness-50"
				style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(100deg) brightness(118%) contrast(119%)' }}
				alt=""
			/> */}
			{/* <img
				src="/flower.svg"
				className="absolute right-[-100px] top-0 opacity-25 grayscale brightness-50"
				style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(100deg) brightness(118%) contrast(119%)' }}
				alt=""
			/> */}
			<main className="min-h-screen relative z-10 flex flex-col items-center justify-center px-6">
				{/* Hero Text */}
				<div className="text-center mt-10 mb-8">
					<h1 className="text-3xl md:text-5xl font-bold tracking-tight">
						เปิดรับคิวลูกค้าได้แล้ววันนี้
					</h1>
					<p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
						แพลตฟอร์มสำหรับธุรกิจบริการที่ช่วยให้ร้านคุณ
						ถูกค้นพบ และถูกจอง ในที่เดียว
					</p>
				</div>
				{/* Banner */}
				<a
					href="https://forms.gle/oX2YJqvYGTP6VF9h7"
					target="_blank"
					rel="noopener noreferrer"
					className="w-full md:max-w-3xl"
				>
					<img
						src="/banner.png"
						className="w-full object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
						alt="จองQueue Service Booking Platform"
					/>
				</a>
				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
					{/* Facebook */}
					<a
						href="https://www.facebook.com/people/JongQueue-%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2-%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%84%E0%B8%B4%E0%B8%A7%E0%B8%8A%E0%B8%B1%E0%B8%A7%E0%B8%A3%E0%B9%8C/61587611469514/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#166fe5] text-white px-6 py-3 rounded-2xl shadow-lg transition-all hover:-translate-y-1 active:scale-95"
					>
						<FaFacebook className="text-2xl" />
						<span className="font-bold">ติดตามเราบน Facebook</span>
					</a>
					{/* Phone */}
					<a
						href="tel:0620503184"
						className="flex items-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-6 py-3 rounded-2xl shadow-sm hover:border-blue-500 hover:text-blue-600 transition-all hover:-translate-y-1 active:scale-95"
					>
						<HiOutlinePhone className="text-2xl" />
						<span className="font-bold font-mono">062-050-3184</span>
					</a>
				</div>
				{/* Footer */}
				<div className="mt-10 text-center text-slate-400 text-xs tracking-widest">
					© 2026 จองQueue. All rights reserved.
				</div>


				{/* flow */}
			</main>
		</div>
	);
}