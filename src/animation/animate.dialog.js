// Container
export const containerInitial = {
	opacity: 0,
	y: 30,
};

export const containerAnimate = {
	opacity: 1,
	y: 0,
	height: "100%",
	transition: {
		type: "spring",
		duration: 0.6,
		ease: "easeIn",
	},
};

export const containerExit = {
	opacity: 0,
	y: 60,
	transition: {
		duration: 0.3,
		ease: "easeOut",
	},
};

//Content

export const contentInitial = {
	opacity: 0,
};

export const contentAnimate = {
	opacity: 1,
	transition: {
		duration: 0.7,
		ease: "easeInOut",
		delay: 0.2,
	},
};
