import React, { useContext } from "react";
import { softwareList } from "../assets/software";
import close from "../assets/icons/close.svg";
import { DialogContext } from "../context/dialog.context";
import { AnimatePresence, motion } from "framer-motion";
import { containerAnimate, containerExit, containerInitial, contentAnimate, contentInitial } from "../animation/animate.dialog";
function Dialog() {
	const { toggle, software, methods } = useContext(DialogContext);
	const value = softwareList[software];

	return (
		<div>
			<AnimatePresence>
				{toggle && (
					<motion.div
						initial={containerInitial}
						animate={containerAnimate}
						exit={containerExit}
						className="absolute flex justify-center items-center top-0 left-0 w-screen h-screen z-20">
						<div className=" px-6 pt-6 pb-12 max-w-[588px] w-full  rounded-lg bg-white shadow">
							<motion.div initial={contentInitial} animate={contentAnimate}>
								<div className="flex justify-end">
									<div className="cursor-pointer px-2 pb-4" onClick={() => methods.unMountDialog()}>
										<img src={close} alt="An X shape close button to hide the dialog" />
									</div>
								</div>
								<div className="flex gap-6">
									<img className=" w-16 h-16" src={value.image} alt={`Software logo for ${value.name}`} />
									<div>
										<h1 className="font-extrabold text-3xl mb-2">{value.headline}</h1>
										<h3 className=" text-base leading-6 text-zinc-500">{value.body}</h3>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
export default Dialog;
