

let band1 = "DrummerLora";
let band2 = "Trump Kid";
let band3 = "Wind instrument Kids";
let band4 = "Los 4 Mexicanos";
let band5 = "Dancing Guy";
let band6 = "India Color Party";
let band7 = "Lonely Guitarre Man";
let band8 = "Waterman";
let band9 = "Guitarre Hero Players";

console.log("On the first day of the festival, I was lucky to watch the bands"+band1+", "+band4+" and "+band7+".")

let band1Price = 90;
let band2Price = 50;
let band3Price = 40;
let band4Price = 60;
let band5Price = 15;
let band6Price = 100;
let band7Price = 20;
let band8Price = 120;
let band9Price = 10;

let fest_day1 = band1Price + band4Price + band7Price;
let fest_day2 = band2Price + band5Price + band8Price;
let fest_day3 = band3Price + band6Price + band9Price;

console.log("Then I watched the bands "+band2+", "+band5+" and "+band8+" on the second day and it cost me "+fest_day2+"€ in total that day.")

let fullPrice = fest_day1 + fest_day2 + fest_day3;

console.log("I was a bit tired on the third day but it was so much worth it to watch the bands "+band3+ ", "+band6+", "+band9+" and I spent "+fullPrice+" € for the three days of the festival.")

let moneyDiscount = fullPrice * 0.3;
let discountPrice = fullPrice - moneyDiscount;

console.log("If I had booked the concert with enough time in advance, it would have cost me a total of "+discountPrice+"€ and I would have saved "+moneyDiscount+"€.")
