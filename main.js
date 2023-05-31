const switchButton = document.querySelector('.header__theme-switch')
const body = document.querySelector('.body')

switchButton.addEventListener('click', () => {
    if(switchButton.classList.contains('light')) {
        switchButton.classList.remove('light')
        switchButton.classList.add('dark')

        body.classList.add('dark')
        body.classList.remove('light')
    } else {
        switchButton.classList.remove('dark')
        switchButton.classList.add('light')

        body.classList.add('light')
        body.classList.remove('dark')
    }
})

const shareButton = document.querySelector('.header__social-share')
const socialWrapper = document.querySelector('.header__social')

shareButton.addEventListener('click', () => {
    if (socialWrapper.classList.contains('hidden')) {
        socialWrapper.classList.remove('hidden')
        socialWrapper.classList.add('show')
    } else {
        socialWrapper.classList.add('hidden')
        socialWrapper.classList.remove('show')
    }
})