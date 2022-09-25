import { AnimatePresence } from "framer-motion";

import Dialog from "./components/Dialog";
import PillList from "./components/PillList";
import DialogProvider from "./context/dialog.context";

function App() {
	return (
		<div className="flex items-center justify-center w-screen h-screen bg-[#f8f8f8]">
			<AnimatePresence>
				<DialogProvider>
					<Dialog />
					<div className=" relative max-w-[800px] max-h-[286px] w-full h-full overflow-hidden">
						<div className="absolute top-0 left-0 max-w-[800px] max-h-[286px] w-full h-full gradient z-10" />
						<PillList duration={30} />
						<PillList duration={60} />
						<PillList duration={27} />
						<PillList duration={30} />
						<PillList duration={26} />
					</div>
				</DialogProvider>
			</AnimatePresence>
		</div>
	);
}

export default App;
