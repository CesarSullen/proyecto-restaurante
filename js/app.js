const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("#nav");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {
	this.classList.toggle("open");
	nav.classList.toggle("active");
});

navLinks.forEach((link) => {
	link.addEventListener("click", function () {
		hamburger.classList.remove("open");
		nav.classList.remove("active");
	});
});

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		const header = document.getElementById("header");
		if (window.scrollY > 100) {
			header.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
		}
	});

	const animateOnScroll = function () {
		const elements = document.querySelectorAll(
			".section-title, .about-text, .about-image, .menu-item, .gallery-item, .special-card, .contact-info, .contact-form, .footer-col, .footer-bottom"
		);

		elements.forEach((element) => {
			const elementPosition = element.getBoundingClientRect().top;
			const screenPosition = window.innerHeight / 1.2;

			if (elementPosition < screenPosition) {
				element.classList.add("animated");
			}
		});
	};

	window.addEventListener("load", animateOnScroll);
	window.addEventListener("scroll", animateOnScroll);

	const menuItems = document.querySelectorAll(".menu-item");
	menuItems.forEach((item, index) => {
		item.style.transitionDelay = `${index * 0.1}s`;
	});

	const galleryItems = document.querySelectorAll(".gallery-item");
	galleryItems.forEach((item, index) => {
		item.style.transitionDelay = `${index * 0.1}s`;
	});

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
			}
		});
	});
});
