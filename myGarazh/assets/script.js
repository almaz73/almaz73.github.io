// Навигация между страницами
/*document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault()

		// Убираем активный класс у всех ссылок
		document
			.querySelectorAll('.nav-link')
			.forEach(l => l.classList.remove('active'))
		// Добавляем активный класс текущей ссылке
		this.classList.add('active')

		// Скрываем все страницы
		document
			.querySelectorAll('.page')
			.forEach(page => page.classList.remove('active'))

		// Показываем нужную страницу
		const pageId = this.getAttribute('href').substring(1) + '-page'
    console.log('pageId', pageId)
		document.getElementById(pageId).classList.add('active')
	})
})*/

// Service Worker регистрация
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker
			.register('sw.js')
			.then(function (registration) {
				console.log('ServiceWorker зарегистрирован успешно:', registration)
			})
			.catch(function (error) {
				console.log('Ошибка регистрации ServiceWorker:', error)
			})
	})
}

// Обработка кнопки установки
let deferredPrompt
const installBtn = document.getElementById('installBtn')

window.addEventListener('beforeinstallprompt', e => {
	e.preventDefault()
	deferredPrompt = e
	installBtn.style.display = 'block'

	installBtn.addEventListener('click', () => {
		installBtn.style.display = 'none'
		deferredPrompt.prompt()
		deferredPrompt.userChoice.then(choiceResult => {
			if (choiceResult.outcome === 'accepted') {
				console.log('Пользователь принял предложение установки')
			} else {
				console.log('Пользователь отклонил предложение установки')
			}
			deferredPrompt = null
		})
	})
})
