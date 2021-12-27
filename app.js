// Present user with choices
// Get user input
// Make API Call
// Present the API result to the user.
// Fix Ascii Art Logo
let astrology_signs = { aries :     { icon :'♈', description : '(Ram): March 21–April 19' },
                        taurus :    { icon :'♉', description : '(Bull): April 20–May 20' },
                        gemini :    { icon :'♊', description : '(Twins): May 21–June 21'},
                        cancer :    { icon :'♋', description : '(Crab): June 22–July 22'},
                        leo :       { icon :'♌', description : '(Lion): July 23–August 22'},
                        virgo :     { icon :'♍', description : '(Virgin): August 23–September 22'},
                        libra :     { icon :'♎', description : '(Balance): September 23–October 23'},
                        scorpius :  { icon :'♏', description : '(Scorpion): October 24–November 21'},
                        sagittarius : { icon : '♐', description : '(Archer): November 22–December 21'},
                        capricornus : { icon : '♑', description : '(Goat): December 22–January 19'},
                        aquarius    : { icon : '♒', description : '(Water Bearer): January 20–February 18'},
                        pisces      : { icon :'♓',  description : '(Fish): February 19–March 20'},

}



const welcome_and_choices = ()=>{
    console.log()
    console.log('Welcome to Astrology Generator')
    console.log("Please choose your Astrology sign to recieve today's astrology : ")
    console.log()

    let counter = 1
    for (const sign in astrology_signs ){
        console.log(counter +"."+ astrology_signs[sign].icon +" :\t"+ sign.charAt(0).toUpperCase()+ sign.slice(1) +":\t" + astrology_signs[sign].description) 
        console.log("-".repeat(70))
        counter++

    }




}

welcome_and_choices()
