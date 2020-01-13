let quotes = [
    {
        text: "When we measure something we are forcing an undetermined, undefined world to assume an experimental value. We are not measuring the world, we are creating it.",
        by: "Niels Bohr"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        by: "Albert Einstein"
    },
    {
        text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        by: "Issac Asimov"
    },
    {
        text: "Never memorize something that you can look up.",
        by: "Albert Einstein"
    },
    {
        text: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.",
        by: "Stephen Hawking"
    },
    {
        text: "Somewhere, something incredible is waiting to be known.",
        by: "Carl Sagan"
    },
    {
        text: "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
        by: "Douglas Adams"
    },
    {
        text: "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
        by: "Stephen Hawking"
    },
    {
        text: "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
        by: "Author C. Clarke"
    },
    {
        text: "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
        by: "Niels Bohr"
    },
    {
        text: "A man who dares to waste one hour of time has not discovered the value of life.",
        by: "Charles Darwin"
    },
    {
        text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        by: "Marie Curie"
    },
    {
        text: "Science is not only compatible with spirituality; it is a profound source of spirituality.",
        by: "Carl Sagan"
    },
    {
        text: "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
        by: "Douglas Adams"
    },
    {
        text: "If you wish to make an apple pie from scratch, you must first invent the universe.",
        by: "Carl Sagan"
    },
    {
        text: "If I have seen further it is by standing on the shoulders of Giants.",
        by: "Issac Newton"
    }
];

function printQuoteAndAuthor(){
    var index = Math.floor(Math.random()*quotes.length);
    // console.log(index);
    let quote = [];
    quote[0] = quotes[index].text;
    quote[1] = quotes[index].by;
    return quote;
}

console.log(printQuoteAndAuthor()[0]);