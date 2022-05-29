const movie1 = {
    movieName: "Iron Man",
    hallCode: "H01",
    booking: [],
    book(bookingNum, name) {
        console.log(`${name} has booked a movie for ${this.movieName} at hall ${this.hallCode}. Boooking ID is ${bookingNum}.`);
        this.booking.push({bookedMovie: `${this.hallCode} ${bookingNum} ${name}`});
    }
};
movie1.book(2988, "Shobhit");
movie1.book(2932, "Sahoo");
console.log(movie1);

const movie2 = {
    movieName: "Iron Man2",
    hallCode: "H02",
    booking: [],
};

const book = movie1.book;

// Here we want the same book method for different movie object.
// book(1223, "David"); This will throw error, since this keyword isn't pointing to any object.
// So if we use the call method we will be able to book movie2.

book.call(movie2, 2311, "David");
console.log(movie2);

// call method allows us to point the this keyword to a specific object. Here in this example to movie2 object.

book.call(movie1, 5455, "Jonas");
console.log(movie1);

const movie3 = {
    movieName: "Iron Man3",
    hallCode: "H03",
    booking: [],
};

book.call(movie3, 1325, "Smith");


// Apply method
book.apply(movie3, [2314, "Tony"]);
console.log(movie3);

// Apply method basically takes an array as args other than that it's the same as call method


// Bind method
const bookM2 = book.bind(movie2);
const bookM3 = book.bind(movie3);

bookM2(1224, "Stark");
console.log(movie2);

bookM3(3212, "Happy");


