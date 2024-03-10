const squareInput = document.querySelector('#square-input')
const squareRange = document.querySelector('#square-range')
const inputs = document.querySelectorAll('input')

const radioType = document.querySelectorAll('input[name="type"]')
const radioBuilding = document.querySelectorAll('input[name="building"]')
const radioRooms = document.querySelectorAll('input[name="rooms"]')

const ceiling = document.querySelector('input[name="ceiling"]')
const walls = document.querySelector('input[name="walls"]')
const floor = document.querySelector('input[name="floor"]')



const basePrise = 6000
const totalPriceElement = document.querySelector('#total-price')

squareInput.addEventListener('input', function () {
    squareRange.value = squareInput.value
})

squareRange.addEventListener('input', function () {
    squareInput.value = squareRange.value
})

function calculate() {

    let totalPrice = basePrise * parseInt(squareInput.value)

    for (let radio of radioType) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (let radio of radioBuilding) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }

    for (let radio of radioRooms) {
        if (radio.checked) {
            totalPrice = totalPrice * parseFloat(radio.value)
        }
    }


    if(ceiling.checked) {
        totalPrice = totalPrice * parseFloat(ceiling.value)
    }

    if(walls.checked) {
        totalPrice = totalPrice * parseFloat(walls.value)
    }

    if(floor.checked) {
        totalPrice = totalPrice * parseFloat(floor.value)
    }

    const formatter = new Intl.NumberFormat('ru')
    totalPriceElement.innerText = formatter.format(totalPrice)
}

calculate()

for (let input of inputs) {
    input.addEventListener('input', function () {
        calculate()
    })
}
