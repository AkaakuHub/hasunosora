import type React from "react";

const About: React.FC = () => {
	return (
		<div className="p-4 rounded-b-lg mb-24 flex flex-col gap-4 mx-auto max-w-[1000px]">
			<div className="flex flex-col items-start gap-2.5 md:mt-8">
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-300 rounded-[10px] opacity-0 animate-fade-in text-[2.4em] md:text-[2.1em] my-4 max-w-[80%]">
					蓮の花咲く湖の傍に建つ
				</p>
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-300 rounded-[10px] opacity-0 animate-fade-in-delay-1 text-[2.4em] md:text-[2.1em] my-4 max-w-[80%] self-end">
					創立から100年以上の伝統が続く
				</p>
			</div>
			<div className="text-center">
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-300 rounded-[10px] opacity-0 animate-fade-in-delay-2 text-[2.4em] md:text-[2.1em] my-4 max-w-full">
					私立蓮ノ空女学院
				</p>
			</div>
		</div>
	);
};

export default About;
