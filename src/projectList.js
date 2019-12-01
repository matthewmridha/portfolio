//import { url } from "inspector";



const projectList = [{
        id: 1,
        name: "Pomodoro Timer",
        image: "pomodoro.jpg",
        githubLink: "https://github.com/matthewmridha/pomodoro",
        description: `Project built using React. the Pomodoro method is a way of increasing productivity by means
        of managing work focus in intervals of 25minutes of intense focus followed by a 5 minute break. This app 
        has a default of 25 minutes workt time and 5 minutes break time pre-set but allows for the user to adjust 
        the times as per their own needs upto 60 minutes per session. Once the timer is set, and the play button is 
        clicked, the timer starts counting down. Once the timer goes to 00:00, an alarm is sounded and it changes session
        over to the break session if on work session or to work session if currently on break session. The timer can be paused
        manually using the play/pause button. Switching to a different tab or scrolling does not disrupt the timer`,
        liveLink: "https://matthewmridha.github.io/pomodoro/"
    },
    {
        id: 2,
        name: "Space-Invader Tribute",
        image: "space-invader.jpg",
        githubLink: "https://github.com/matthewmridha/space-invaders",
        description: `A tribute to the classic spase invaders game built on pure HTML, CSS, JS, the mission is to 
        shoot down as many alien ships as possible. arrow keys move the hero ship along the x-axis and the y-axis while
        spacebar shoots missiles. Alien ships slowly descend down the y-axis while zig-zagging  on the x-axis. As levels
        progress, the number of alien ships increas and so does their speed. On level 10, the mothership(BOSS) appears
        along with multiple regular enemy vessels. The mother ship shoots back. destroying the mothership wins the game.
        score increase by 20 for the destruction of eacr alien ship and by 50 for each hit on th emothership which requires 
        multiple hits to be destroyed. score and level info is displayed on the top right of the screen. the hero is destroyed
        by a single hit from any alien ship or missile and must start all over again from the beginning.`,
        liveLink: "https://matthewmridha.github.io/space-invaders/"
    },
    {
        id: 3,
        name: "Weather forecast",
        image: "weather.jpg",
        githubLink: "https://github.com/matthewmridha/weather-react",
        description: `Made with React, this app gets the current location from the browser and makes an API call to openweather.com
        to get weather data at curerent  location. If location sharing is disabled, the user is prompted, to input the
        name of the city and country code which is the used to get the weather data. the page displays location, current
        temparature, current humidity, weather condition including a weather icon, the times for sunrise  and sunset and 
        a clock. There is a separate section that displays the forecasted average temparatre, weather icon and description
        for the following 24 hours at 3 hour intervals. The app has a toggle button that can switch temparature display 
        between farenheit and celcius.`,
        liveLink: "https://matthewmridha.github.io/weather-react/"
    },
    {
        id: 4,
        name: "Drum-Machine",
        image: "drum-machine.jpg",
        githubLink: "https://github.com/matthewmridha/drum-machine",
        description: `Made with React, this app, has a power button that is off by default. Once it is turned on, 
        the 9 keys on keypad play different beats of a drumpad. The corresponding name of the beat is displayed on the
        display. The display also shows volume. Volume can be adjust via a volume slider bar in the controls section`,
        liveLink: "https://matthewmridha.github.io/drum-machine/"
    },
    {
        id: 5,
        name: "JS Calculator",
        image: "calculator.jpg",
        githubLink: "https://github.com/matthewmridha/calculator",
        description: `A basic calculator with JS and React.`,
        liveLink: "https://matthewmridha.github.io/calculator/"
    },
    {
        id: 6,
        name: "Markdown-Previwer",
        image: "markdown-previewer.jpg",
        githubLink: "https://github.com/matthewmridha/Markdown",
        description: `Built with React, this previewer allows the user to input plain text which is parsed, converted to markdown
         and displayed in the preview section in realtime. Marked.js is the provider of the markdown function. 
         the input and preview sections of the display can be maximized one at a time. Thre is aclear buttn that clears th screen
         and a reset button that brings back the default text. `,
        liveLink: "https://matthewmridha.github.io/Markdown/"
    },
    {
        id: 7,
        name: "Random Quotes",
        image: "random-quotes.jpg",
        githubLink: "https://github.com/matthewmridha/random-quote-machine",
        description: `Built with React, this app, on load, pulls a famous quote storred in app, and displays ot along with the 
        name of the author. Clicking on the next quote will collect a new quote and display it and change the theme color. 
        the color picker and quote picker is randomized. The slider arrows allow the user to go back one quote and return to current 
        quote. Clickin on the twitter button opens a new window to twitter and copies the quote and autor name into the
        text input area ready  to tweet.`,
        liveLink: "https://matthewmridha.github.io/random-quote-machine/"
    },
    {
        id: 11,
        name: "Books",
        image: "books.png",
        githubLink: "https://github.com/matthewmridha/books1",
        description: `Books is projecct build using Python FLask with PostgreSQL for database and standard HTML, CSS, JS on the front end with some help
        from bootstrap for styling. Functionaly, it requires the user to have an account. On start, it will give the options to either log in or register.
        There is no password type checks in place. only username uniqueness is required. If a new user registers, they are automatically logged in. Once a
        user logs in, he/she can search for a book by ISBN, Author or Book Name. partialy typed querries are also matched. Ex- searching for 120 in ISBN will
        return all books that contain 120 in thier 13 digit ISBN. Searches return the list of results from the 1000's of pre-loaded books in the database 
        and display all the available information on a table. once the desired book row is clicked on from the table, the user is redirected to another page 
        where detailed information about book is displayed along with rating details acquired from an API call to goodreads.com and local ratings details and 
        comments. The user can then leave a rating out of 5 and leave a comment about the book. The comment and the rating will be storred in the database
        and will effect the local rating of the book. Both the comment and the rating info will be made avaialble for all future users to view. One user can only
        review or rate a book only once. An API call can alsp be made to get the local rating details of a book using ISBN.`,
        liveLink: "https://booksproject1cs50.herokuapp.com/"
    },
    {
        id: 10,
        name: "Flask-SocketIO-Chat-App",
        image: "js-flask-chat.png",
        githubLink: "https://github.com/matthewmridha/flask-chat",
        description: `An annonymous chat app using flask and socket.io. 

        When started, app will check for an username and name of chatroom saved in the localstorage. 
        
        If previously stored username is not found, the user will be prompted for an username until the user inputs one. 
        
        No type check for username is in place. Only string length > 0 must be satisfied. 

        App being annonymous in nature, does not save usernames in the server or check for duplicates, 
        hence makes it possible for multiple users to select the same username.

        Once an username has been selected, it will be stored in localstorage.

        If a room name is not found, the user will be joined in to the default "main" room.
        
        The user can create chat rooms. User is automatically moved to the new chat room created by him/her.
        
        Names of chat rooms are compiled as a list and users can click on the name of any room to switch in to that room.
        
        Messages sent in chat rooms are time stamped and storred in the server upto a 100 msgs per room including the senders username and timestamp and are visible by anyone who enters said room.
        When an user joins or leaves a room, everyone in said room is notified.
        
        Messages are styled according to outgoing and incomming on the front end.
        
        When a user logs in, the username is entered in to a list of online users and a list of users online are displayed for all.
        A global <username> has joined <room> is displyed.
        
        Clicking on the name of an user will allow another user to send a private message to the said user via prompt.
        The recpient of the message will see an alert box appear with the sender's name and message. 
        Privte messages are not saved anywhere and are not a two way conversation. They are of read and discard nature. No reply option is available.
        
        When an user disconnects, user name is removed from the list of users and a global user has disconnectd message is broadcasted to all rooms.
        
        When users enter or leaves or joins a room, the room in question gets a user has joined and user has left message with timestamp.`,

        liveLink: "https://flask-socketio-chat-app.herokuapp.com/"
    },
    {
        id: 8,
        name: "Survey-Form",
        image: "survey-form.jpg",
        githubLink: "https://github.com/matthewmridha/survey-form",
        description: `Survey Form built with just HTML and CSS without any libraries to practice the basics.`,
        liveLink: "https://matthewmridha.github.io/survey-form/"
    },
    {
        id: 9,
        name: "Tribute-Page",
        image: "tribute.jpg",
        githubLink: "https://codepen.io/matthewmridha/pen/qJdPgE?editors=1100",
        description: `Tribute page for AYRTON SENNA built with just HTML and CSS without any libraries to practice the basics.`,
        liveLink: "https://codepen.io/matthewmridha/full/qJdPgE"
    },
    {
        id: 12,
        name: "Technical-Documentation",
        image: "technial-documentation.jpg",
        githubLink: "https://codepen.io/matthewmridha/pen/bQWxgW?editors=1100",
        description: `Texhnical Documentation page documenting CSS GRIDs with just HTML and CSS without any libraries
        to practice the basics.`,
        liveLink: "https://codepen.io/matthewmridha/full/bQWxgW"
    },
    {
        id: 13,
        name: "Product Landing",
        image: "product-landing.jpg",
        githubLink: "https://codepen.io/matthewmridha/pen/wYLjMO?editors=1100",
        description: `Product Landing page using IWC as inspiration with just HTML and CSS without any libraries
        to practice the basics.`,
        liveLink: "https://codepen.io/matthewmridha/full/wYLjMO"
    },


];


export default projectList;