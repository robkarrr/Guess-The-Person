/* 

Inlämnigsuppgift 1

GUESS THE PERSON

Robin Karlsson
FED21M

*/

const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

const missing_students = [
	{
		"name": "Andjela Saponjic",
		"image": null,
	},
	{
		"name": "Cazpian Levén",
		"image": null,
	},
	{
		"name": "Frida Lam",
		"image": null,
	},
	{
		"name": "Maxim Khnykin",
		"image": null,
	},
	{
		"name": "Philip Le",
		"image": null,
	},
];


const choosenStudentImgEl = document.querySelector("#choosenStudentImg");
const buttonsWrapperEl = document.querySelector("#buttonsWrapper");
const resultsEl = document.querySelector("#result");


// Create and sets the amounts of correct guesses and guesse to zero.
let guesses = 0;
let correctGuesses = 0;


//Creating some variables that will be used
let choosenStudent;
let answerOptions;
let choosenStudentName;


// Greeting message when you first open up the game
alert("Hello and welcome to my Guess The Classmate game! In this game you will see a picture and four names displayed on screen. Your job is to guess the right name out of the four options")


// function to shuffle array (fisher yates method)

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Create a copy of the students array so the original one stays unedited
let copyOfStudents =[... students] 

// gets a new array of all the students names.
let studentNames = copyOfStudents.map(student => student.name)




const gameStart = () => {

    // sets the correct student to the amount of guesses so the game will 
    // loop over the whole list of students
    choosenStudent = copyOfStudents[guesses];    

    choosenStudentImgEl.src = choosenStudent.image;
    choosenStudentName = choosenStudent.name;

	// Use filter to filter out the correct name from the student names array
	// I do this so the correct name wont show twice in the same picture.

	studentNames.filter(names => names !== choosenStudentName)

    //shuffle all the names
    shuffleArray(studentNames)

    // get 3 random stundents from the array
	answerOptions = studentNames.slice(0, 3);
    

    // put all four of the options in one array.
    answerOptions.push(choosenStudent.name);

    //shuffle the names so it wont appear in the same button all the time
    shuffleArray(answerOptions);


    // Clear the buttons before loading in the new names for next guess.
    buttonsWrapperEl.innerHTML = "";

    // Adds a button for each name in my "fourNames".
    answerOptions.forEach( (answer) => {
        if(answer === choosenStudentName){
            buttonsWrapperEl.innerHTML += `<button id="correct" class="col-12 col-lg-4 btn bg-dark text-white m-2 border">${answer}</button>`
        }

        else{
            buttonsWrapperEl.innerHTML += `<button class="col-12 col-lg-4 btn bg-dark text-white m-2 border">${answer}</button>`
        } 
    })

    console.log(guesses)
}
gameStart();


// Adds a eventlistner to my buttons wrapper
buttonsWrapperEl.addEventListener('click', e => {

    // Check if the click was actually on a button or not
    // and checks if it was the right answer or not
    if(e.target.tagName === 'BUTTON'){
        guesses++;

        if(e.target.id === "correct"){
            correctGuesses++;
            gameStart();
        }


        else{
            gameStart();
        }

        
    }

    
})

