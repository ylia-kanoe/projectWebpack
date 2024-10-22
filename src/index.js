import "./scss/style.scss";


// Показать ЕЩЕ в галерее

let gallery = document.querySelector('.gallery__images')
let galleryImages = document.querySelectorAll('.gallery__images img')
let clickGalleryMore = document.querySelector('.gallery__button')

let mass = []

galleryImages.forEach(elem => {
	mass.push(elem.src)
	mass.push(elem.alt)
})

clickGalleryMore.addEventListener('click', () => {
	for (let i = 0; i < mass.length; i++) {
		if (i % 2 == 0) {
			let newItem = document.createElement('img')
			newItem.alt = mass[i + 1]
			newItem.src = mass[i]
			gallery.append(newItem)
		}
	}
})

// Переключить фото галерее

let gallerySwitch = document.querySelectorAll('.gallery__item')

gallerySwitch.forEach(elem => {
	elem.addEventListener('click', () => {
		galleryImages = document.querySelectorAll('.gallery__images img')
		galleryImages.forEach(elem2 => {
			if (elem.textContent == 'ВСЕ') {
				elem2.style.display = 'block'
			}
			else if (elem.textContent == elem2.alt) {
				elem2.style.display = 'block'
			} else {
				elem2.style.display = 'none'
			}
		})
	})
})

// Слайдер со статьями

let sliderToggle = document.querySelectorAll('.slider__toggle div')
let sliderImage = document.querySelectorAll('.slider__image img')

sliderToggle.forEach((elem, i) => {
	elem.addEventListener('click', () => {
		sliderImage.forEach(elem2 => {
			elem2.classList.remove('active')
		})
		sliderToggle.forEach(elem2 => {
			elem2.classList.remove('active')
		})
		sliderImage[i].classList.add('active')
		elem.classList.add('active')
	})
})


/* Анимации */

const callback = (entries, observer, className) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add(className);
			return;
		}
		entry.target.classList.remove(className);
	})
}

const options = {}
const observerTop = new IntersectionObserver((entries, observer) => callback(entries, observer, "watch-top"), options)
const observerBottom = new IntersectionObserver((entries, observer) => callback(entries, observer, "watch-bottom"), options)
const observerLeft = new IntersectionObserver((entries, observer) => callback(entries, observer, "watch-left"), options)
const observerRight = new IntersectionObserver((entries, observer) => callback(entries, observer, "watch-right"), options)


let bannerInfoTitle = document.querySelector('.banner__info--title')
observerTop.observe(bannerInfoTitle);

let bannerInfoText = document.querySelector('.banner__info--text')
observerBottom.observe(bannerInfoText);

let titleH2 = document.querySelectorAll('.title-h2')
titleH2.forEach(elem => {
	observerTop.observe(elem);
})
let getAtItem = document.querySelectorAll('.get-at__item')
getAtItem.forEach(elem => {
	observerBottom.observe(elem);
})

let getAtListTwo = document.querySelector('.get-at__list-two')
observerBottom.observe(getAtListTwo);

let conqueringTitleText = document.querySelectorAll('.conquering__title .main-text-300')
conqueringTitleText.forEach(elem => {
	observerTop.observe(elem);
})

let galleryItems = document.querySelector('.gallery__items')
observerBottom.observe(galleryItems);
{
let galleryImages = document.querySelector('.gallery__images')
observerBottom.observe(galleryImages);
}
let sliderText = document.querySelector('.slider__text .text-large')
observerRight.observe(sliderText);

let sliderTextMin = document.querySelector('.slider__text .main-text-300')
observerRight.observe(sliderTextMin);

let teamItemImg = document.querySelectorAll('.team__item img')
teamItemImg.forEach(elem => {
	observerBottom.observe(elem);
})

let teamItemText = document.querySelectorAll('.team__item .text-min')
teamItemText.forEach(elem => {
	observerBottom.observe(elem);
})

let teamItemTextMin = document.querySelectorAll('.team__item .main-text-400')
teamItemTextMin.forEach(elem => {
	observerBottom.observe(elem);
})

let servicesItem = document.querySelectorAll('.services__item')
servicesItem.forEach(elem => {
	observerBottom.observe(elem);
})

let requestText = document.querySelector('.request__text')
observerRight.observe(requestText);

let requestForm = document.querySelector('.request__form')
observerLeft.observe(requestForm);

let socialList = document.querySelector('.social__list')
observerTop.observe(socialList);

let conqueringImage = document.querySelector('.conquering__image')
observerRight.observe(conqueringImage);

let aboutUsInfo = document.querySelectorAll('.about-us__info .main-text-300')
aboutUsInfo.forEach(elem => {
	observerBottom.observe(elem);
})




// блок Total

{
	let count = 0;
	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting && count < 1) {
				totalNum()
				count = 1
				return;
			}
		})
	}

	const options = {}
	const observer = new IntersectionObserver((entries, observer) => callback(entries, observer), options)

	let totalItem = document.querySelectorAll('.total__item')
	totalItem.forEach(elem => {
		observer.observe(elem);
	})

	function totalNum() {
		let totalNumbers = document.querySelectorAll('.total__item .text-very-large')

		totalNumbers.forEach((elem, i) => {
			let item = elem.textContent
			elem.textContent = 0
			let time = 5
			if (i === 2) {
				time = 200
			}

			let timer = setInterval(() => {
				if (i === 1) {
					elem.textContent = +elem.textContent + 10;
				} else {
					elem.textContent = +elem.textContent + 1;
				}
				if (elem.textContent == item) {
					clearInterval(timer);
				}
			}, time)
		})
	}
}