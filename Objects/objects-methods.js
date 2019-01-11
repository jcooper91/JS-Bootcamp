// method = object property whose value is a function
let restaurant = {
    name: 'Golden Place',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}


restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(4);
console.log(restaurant.checkAvailability(4));