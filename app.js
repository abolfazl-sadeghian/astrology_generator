// Present user with choices
// Get user input
// Make API Call
// Present the API result to the user.
// Fix Ascii Art Logo

// Required libraries = prompt-sync

const prompt = require('prompt-sync')({sigint: true});
// const request = require('request');
const axios = require('axios');
const { lstat } = require('fs');

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

const sign_array = []


const welcome_and_choices = ()=>{
    console.log()
    console.log('Welcome to Astrology Generator')
    console.log("Please choose your Astrology sign to recieve today's astrology : ")
    console.log()

    
    let counter = 1
    for (const sign in astrology_signs ){
        sign_array.push(sign)
        console.log(counter +"."+ astrology_signs[sign].icon +" :\t"+ sign.charAt(0).toUpperCase()+ sign.slice(1) +":\t" + astrology_signs[sign].description) 
        console.log("-".repeat(70))
        counter++

    }
    
    const user_choice = get_user_choice_and_validate()
    make_api_call(user_choice)
//   present_results(result)


}

const get_user_choice_and_validate = () => {
    while(true){
        let user_choice = parseInt(prompt('Please enter a number to make your choice : '))
        if(isNaN(user_choice)){
            user_choice = 0
        }
        if (user_choice > 0 && user_choice < 13){
            return user_choice    
        }
        console.log(user_choice)
        console.log('\x1b[31m%s\x1b[0m','Invalid input please choose a number between 1 - 12 ')
            
    }

}

const make_api_call = (user_choice) => {

let sign_to_check = sign_array[user_choice - 1]
let url_line = `https://aztro.sameerkumar.website/?sign=${sign_to_check}&day=today`

axios.post(url_line).then((result)=>{
    console.log(result.data.description)
})



// let options = {
// url: `https://aztro.sameerkumar.website/?sign=${sign_to_check}&day=today`,
// method: 'POST'
// };

//     function callback(error, response, body) {
//         if (!error && response.statusCode == 200) {
//         recieved_data = body
//         return recieved_data
//         }
//     }

// console.log(request(options, callback));
// console.log(recieved_data)
// console.log(recieved_data)
// return dataPromise
}

const present_results = (json) => {
    //console.log("((((",json)
   // console.log(json.data,"lllllll")
}

welcome_and_choices()
