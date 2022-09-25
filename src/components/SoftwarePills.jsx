import { motion } from "framer-motion";
import React, { useContext } from "react";
import { DialogContext } from "../context/dialog.context";

function SoftwarePills({ image, name, software }) {
	const { methods } = useContext(DialogContext);
	return (
		<motion.div className="pillContainer block">
			<motion.div
				whileHover={{
					y: -5,
					transition: {
						duration: 0.3,
						ease: "easeOut",
					},
				}}
				onClick={() => methods.mountDialog(software)}
				className="pill flex gap-2 w-max items-center bg-white rounded-md py-2 px-4 drop-shadow-custom shadow-custom transition-all duration-300">
				<div className="w-8">
					<img src={image} alt={`${name}'s software icon`} />
				</div>
				<h3 className="text-neutral-600 text-base transition-all duration-300 w-full"> {name} </h3>
			</motion.div>
		</motion.div>
	);
}

export default SoftwarePills;
