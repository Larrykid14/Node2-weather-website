// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(6))

const event = {
    name: 'birthday party',
    guestList: ['dave', 'jesus', 'mike'],
    printGuestList() {
        console.log('Guest List for ' +this.name)

        this.guestList.forEach((Guest) => {
            console.log(Guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()