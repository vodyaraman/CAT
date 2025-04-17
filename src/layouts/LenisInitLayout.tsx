import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisInit() {
	useEffect(() => {
		if (typeof window === "undefined") return;

		window.scrollTo(0, 0);
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;

		if (window.lenis && typeof window.lenis.destroy === "function") {
			window.lenis.destroy();
		}

		const lenis = new Lenis();
		window.lenis = lenis;

		// 👇 Принудительно сбрасываем виртуальный scroll сразу
		lenis.scrollTo(0, { immediate: true });

		if (Array.isArray(window.__onLenisReady)) {
			window.__onLenisReady.forEach((cb) => cb(lenis));
			window.__onLenisReady = [];
		}

		console.log("Lenis initialised");

		let isDestroyed = false;

		const raf = (time: number) => {
			if (!isDestroyed) {
				lenis.raf(time);
				requestAnimationFrame(raf);
			}
		};

		requestAnimationFrame(raf);

		return () => {
			isDestroyed = true;
			lenis.destroy();
		};
	}, []);

	return null;
}
