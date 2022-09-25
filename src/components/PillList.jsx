import { motion } from "framer-motion";
import React from "react";
import { softwareList } from "../assets/software";
import { randomOrder } from "../helpers";
import SoftwarePills from "./SoftwarePills";

function PillList({ duration }) {
	const shuffledIcons = randomOrder(Object.keys(softwareList));

	const initial = { transform: "translateX(-50%)" };
	const animate = {
		transform: "translateX(0%)",
		transition: {
			duration: duration,
			repeat: Infinity,
			ease: "linear",
		},
	};

	return (
		<div className="flex gap-6  my-3">
			<motion.div custom={duration} initial={initial} animate={animate} className="flex gap-5">
				{shuffledIcons.map((value, index) => {
					const { name, image } = softwareList[value];
					return (
						<div className="flex gap-6" key={Math.random()}>
							<SoftwarePills image={image} name={name} software={value} key={`${index}-${name}`} />
						</div>
					);
				})}
				{shuffledIcons.map((value, index) => {
					const { name, image } = softwareList[value];
					return (
						<div className="flex gap-6" key={Math.random()}>
							<SoftwarePills image={image} name={name} software={value} key={`${index}-${name}`} />
						</div>
					);
				})}
			</motion.div>
		</div>
	);
}

export default PillList;
