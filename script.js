const inputs = document.querySelectorAll('.input')

inputs[0].focus()

inputs.forEach((el, idx) => {

    el.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            setTimeout(() => el.previousElementSibling.focus(), 0)
        }
        else {
            inputs[idx].value = ''
            setTimeout(() => inputs[idx+1].focus(), 0)
        }
    })})