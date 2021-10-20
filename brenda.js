const brenda = function(maxNumber, numberIn, adult) {
    const guests = maxNumber;
    const newbee = numberIn;
    const age = adult;

    if (age >= 18) {
        if (maxNumber > numberIn) {
            return "Come in";
        } else {
            return "It's too busy now, come back later"
        };
    } else {
        return "This is a club for adults"
    };
};

const club = brenda(100, 90, 17);
console.log(club);