//DEFINE ARRAY OF ASTROSIGN
function zodiac() {

    let zodiacSign = [

        {
            sign: 'Capricorn',
            char: 'Wario',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['12', '22'],
            dateEnd: ['1', '19']
        },

        {
            sign: 'Sagittarius',
            char: 'Donkey Kong',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['11', '22'],
            dateEnd: ['12', '21']
        },

        {
            sign: 'Scorpio',
            char: 'Rosalina',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['10', '24'],
            dateEnd: ['11', '21']
        },

        {
            sign: 'Libra',
            char: 'Luigi',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['9', '23'],
            dateEnd: ['10', '23']
        },

        {
            sign: 'Virgo',
            char: 'Toad',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['8', '23'],
            dateEnd: ['9', '22']
        },

        {
            sign: 'Leo',
            char: 'Waluigi',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['7', '23'],
            dateEnd: ['8', '22']
        },

        {
            sign: 'Cancer',
            char: 'Peach',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['6', '22'],
            dateEnd: ['7', '22']
        },

        {
            sign: 'Gemini',
            char: 'Goomba',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['5', '21'],
            dateEnd: ['6', '21']
        },

        {
            sign: 'Taurus',
            char: 'Yoshi',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['4', '20'],
            dateEnd: ['5', '20']
        },

        {
            sign: 'Aries',
            char: 'Mario',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['3', '21'],
            dateEnd: ['4', '19']
        },

        {
            sign: 'Pisces',
            char: 'Daisy',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['2', '19'],
            dateEnd: ['3', '20']
        },

        {
            sign: 'Aquarius',
            char: 'Bowser',
            image: '#',
            text: 'Lorem Ipsum',
            dateStart: ['1', '20'],
            dateEnd: ['2', '18']
        }

    ];

    // VARIABLES FOR TEXT

    let sign = document.getElementById("sign");
    let image = document.getElementById("image");
    let text = document.getElementById("text");
    let char = document.getElementById("char");

    // VARIABLES FOR INPUT

    let whichMonth = document.getElementById("month").value;
    let whichDayOfMonth = document.getElementById("day").value;

    console.log('Month ' + whichMonth + ', ' + 'Day ' + whichDayOfMonth);

    //ZODIAC ALGORITHM BUT FOR-LOOP AND SOOOO FLY

    for (let i = 0; i < zodiacSign.length; i++) {
        if (((whichMonth == zodiacSign[i].dateStart[0]) && (whichDayOfMonth >= zodiacSign[i].dateStart[1])) || ((whichMonth == zodiacSign[i].dateEnd[0]) && (whichDayOfMonth <= zodiacSign[i].dateEnd[1]))) {
            console.log(zodiacSign[i].sign);
            sign.innerHTML = zodiacSign[i].sign;
            image.innerHTML = zodiacSign[i].image;
            text.innerHTML = zodiacSign[i].text;
            char.innerHTML = zodiacSign[i].char;
        }
    }


    // ZODIAC ALGORITHM FROM NOTES //

    // if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    //     AstroSign = "Cap";
    //     console.log('You are Capricorn');
    // } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    //     AstroSign = "Sag";
    //     console.log('You are Sagittarius');
    //     sign.textContent = zodiacSign[1].sign;
    // } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    //     AstroSign = "Sco";
    //     console.log('You are Scorpio');
    //     sign.textContent = zodiacSign[2].sign;
    // } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    //     AstroSign = "Lib";
    //     console.log('You are Libra');
    //     sign.textContent = zodiacSign[3].sign;
    // } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    //     AstroSign = "Vir";
    //     console.log('You are Virgo');
    //     sign.textContent = zodiacSign[4].sign;
    // } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    //     AstroSign = "Leo";
    //     console.log('You are Leo');
    //     sign.textContent = zodiacSign[5].sign;
    // } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    //     AstroSign = "Can";
    //     console.log('You are Cancer');
    //     sign.textContent = zodiacSign[6].sign;
    // } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    //     AstroSign = "Gem";
    //     console.log('You are Gemini');
    //     sign.textContent = zodiacSign[7].sign;
    // } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    //     AstroSign = "Tau";
    //     console.log('You are Taurus');
    //     sign.textContent = zodiacSign[8].sign;
    // } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    //     AstroSign = "Ari";
    //     console.log('You are Aries');
    //     sign.textContent = zodiacSign[9].sign;
    // } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    //     AstroSign = "Pis";
    //     console.log('You are Pisces');
    //     sign.textContent = zodiacSign[10].sign;
    // } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    //     AstroSign = "Aqu";
    //     console.log('You are Aquarius');
    //     sign.textContent = zodiacSign[11].sign;
    // }

}
