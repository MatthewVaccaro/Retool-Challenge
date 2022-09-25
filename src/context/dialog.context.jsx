import React, { useState, createContext } from "react";

export const DialogContext = createContext();

function DialogProvider(props) {
	const [state, setState] = useState({
		toggle: false,
		software: "",
		headline: "",
		body: "",
		methods: { mountDialog: mountDialog, unMountDialog: unMountDialog },
	});

	function mountDialog(software) {
		return setState((prev) => {
			return {
				...prev,
				toggle: true,
				software: software,
			};
		});
	}

	function unMountDialog() {
		setState((prev) => {
			return { ...prev, toggle: false, software: "" };
		});
	}

	return <DialogContext.Provider value={state}>{props.children}</DialogContext.Provider>;
}

export default DialogProvider;
