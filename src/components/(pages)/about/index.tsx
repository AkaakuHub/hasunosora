import type React from "react";

const About: React.FC = () => {
	return (
		<div className="p-4 rounded-b-lg mb-48">
			<div className="flex flex-col items-start gap-2.5 md:mt-8">
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-250 rounded-[10px] opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards] text-[3em] md:text-[2.1em] my-4 max-w-[80%] animation-delay-[0ms]">
					蓮の花咲く湖の傍に建つ
				</p>
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-250 rounded-[10px] opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards] text-[3em] md:text-[2.1em] my-4 max-w-[80%] animation-delay-[1000ms] self-end">
					創立から100年以上の伝統が続く
				</p>
			</div>
			<div className="text-center">
				<p className="font-['Yuji_Syuku'] font-normal inline-block bg-gradient-to-br from-white/60 to-transparent bg-no-repeat bg-[length:100%_2em] bg-[position:0_100%] transition-[background-size] duration-250 rounded-[10px] opacity-0 animate-[fadeIn_0.4s_ease-in-out_forwards] text-[3em] md:text-[2.1em] my-4 max-w-full animation-delay-[2000ms]">
					私立蓮ノ空女学院
				</p>
			</div>
		</div>
	);
};

export default About;
