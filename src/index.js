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
	for(let i = 0; i < mass.length; i++){
		if(i % 2 == 0 ){
			let newItem = document.createElement('img')
			newItem.alt = mass[i+1]
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
			if(elem.textContent == 'ВСЕ'){
				elem2.style.display = 'block'
			}
			else if(elem.textContent == elem2.alt){
				elem2.style.display = 'block'
			} else{
				elem2.style.display = 'none'
			}
		})
 	})
})

// Слайдер со статьями

let sliderToggle = document.querySelectorAll('.slider__toggle div')
let sliderImage = document.querySelectorAll('.slider__image img')

sliderToggle.forEach((elem, i)  =>{
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
