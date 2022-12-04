// Projekt Sveriges Radio 
// Maamoun Okla , maamoun.okla@icloud.com
// 2022-09-30

"use strict";

/*Variables*/
let ChannelsUrl = 'https://api.sr.se/api/v2/channels/?format=json&indent=true&pagination=false';//format=json ger json format och pagination=false ger alla kanaler i channels. 
let ChannelsListEl = document.getElementById("mainnavlist");
let rightDiv = document.getElementsByClassName("right");
let infoEl = document.getElementById("info");
let numrowsEl = document.getElementById("numrows");
let playerEl = document.getElementById("player");
let playchannelEl = document.getElementById('playchannel');
let playBtnEl = document.getElementById('playbutton');
let mainheader = document.getElementById('mainheader');
let mainnavEl = document.getElementById('mainnav');

//onload anropa getchannels() och channelPlayer().
window.onload = init;
function init() {
    console.log("initierar...");
    console.log("Hämtar data från Svergies Radio öppet API...");
    getChannels();
    channelPlayer();
}

// functionen getChannels() fetchar länken för Sveriges Radio API från ChannelsUrl. 
function getChannels() {

    //ta in värdet från användaren för att använda det för kanaler. 
    let numrowsElValue = numrowsEl.value;

    //Fetch API för alla kanaler
    fetch(ChannelsUrl)
        .then(response => response.json('ChannelsUrl'))
        .then((data => {
            console.log(data);
            let channels = data.channels;

            //längden på channels, alltså antal kanaler, är lika med det val som användare gör i "numrows". 
            channels.length = numrowsElValue;

            //en function som behandlar ändring av antal kanaler. 
            numrowsEl.onchange = function () {

                //Rensa kanallistan så att det inte byggs på varandra. 
                ChannelsListEl.innerHTML = '';

                //Sedan anropa funktionen på nytt med det angivna antalet.  
                getChannels();
            };
            //Skriv ut kanaler och passera variabeln channels till funktionen.
            printChannels(channels);
        }))
        //skriv ut till DOM om kanalen inte hittas. 
        .catch(error => { console.error(error); infoEl.innerHTML = "Server funkar ej för tillfället"; })
}



//function printChannels för att skriva ut kanaler till dom. 
function printChannels(channels) {

    //en for-in loop för att loopa genom objektet 'channels'. 
    for (let key in channels) {

        //skapa ny list-element. 
        let newLiEl = document.createElement("li");

        //skapa style för list-element. 
        newLiEl.setAttribute("style", "font-size:1rem;display:flex;algin-items:center;border-radius:3px;margin:1px;list-style:none;padding:5px;background-color:#333;color:lightblue;");

        //skapa anchor-tag-element. 
        let a = document.createElement("a");

        // anchor-tag-elementet text får värdet från channels.name. 
        a.text = channels[key].name;
        // anchor-tag-elementet title får värdet från channels.tagline för mus-hover-funktionaliteten. 
        a.title = channels[key].tagline;


        //skapa ett img-element för icons till anchortags med värdet från channels.image.
        let icon = document.createElement("img");
        icon.src = channels[key].image;
        icon.setAttribute("style", "border-radius:3px;margin:4px;width:20px");

        //bifoga img-element och anchortag-element i listelement. 
        newLiEl.appendChild(icon);
        newLiEl.appendChild(a);

        //bifoga listelement i ul-listan. 
        ChannelsListEl.appendChild(newLiEl);

        //Skapa en event listner för listelement (kanal) vid klick.  
        newLiEl.addEventListener('click', function () {

            //difienra färg för varje kanal med hjälp av hexatalet som man för från channels.color. # innan för att CSS ska känna igen färgen. 
            let channelColor = '#' + channels[key].color;

            //Skapa en källa för varje kanals bild från channels.image.
            let imgSrc = channels[key].image;

            //skapa en variabel för varje kanals scheduleurl som sedan kan användas för att få program för varje kanal. 
            let scheduleUrl = channels[key].scheduleurl + '&format=json&indent=true&pagination=false';

            // anropa en function getPrograms och passera länken till program och färjen för denna kanal. 
            getPrograms(scheduleUrl, channelColor);

            // anropa en funtion getImage och passera källan till bilden och färgen till kanalen till den. 
            getImg(imgSrc, channelColor);
        });
    }
}

//functionen getPrograms skriver ut program till DOM efter click på en kanal på listan till vänster. 
function getPrograms(scheduleUrl, channelColor) {

    //Rensa DOM för vid början av en ny anrop så att det inte byggs på varandra. 
    infoEl.innerHTML = '';
    infoEl.style.color = 'black';

    //fetcha länken som man fick från newLiEl event-listner.
    fetch(scheduleUrl)
        .then(response => response.json(scheduleUrl))
        .then((data => {

            //skapa en variabel för program
            let programs = data.schedule;

            //loopa genom programmen för att få ut info. 
            for (let key2 in programs) {

                //skapa två tidsvariabler som får tidsinfo från program-objektet och som kommer senare att användas i tidsfunktioner (startTimeF och endTimeF) för att skriva ut tiden i rätt format. 
                //använd replace för att ta bort onödiga info och få ut rena siffror för tiden i epoch-format från json. 
                let startTime = programs[key2].starttimeutc.replace('/Date(', '').replace(')/', '');
                let endTime = programs[key2].endtimeutc.replace('/Date(', '').replace(')/', '');


                //skapa en article-element för varje program. 
                let articleEl = document.createElement("article");

                //ge bakgrunden till hela body-elementet samma färg som kanalen som man tryckt på. 
                document.body.style.background = 'linear-gradient(to bottom , #f66060,' + channelColor + ', #f66060)';
                console.log(channelColor);
                //ge stil till article-elementet. 
                articleEl.style.backgroundColor = 'lightblue';
                articleEl.style.borderRadius = '6px';
                articleEl.style.border = '3px solid ' + channelColor;
                articleEl.style.boxShadow = '2px 5px 10px ' + channelColor;
                articleEl.style.padding = '1.3rem ';

                //skapa en <h3> element och ge den title som text. 
                let h3El = document.createElement("h3");
                let h3TextNode = document.createTextNode(programs[key2].title);
                h3El.appendChild(h3TextNode);

                //skapa en <h4> element och ge den subtitle som text endast om den finns. 
                let h4El = document.createElement("h4");
                let h4TextNode = document.createTextNode(programs[key2].subtitle);

                //kontrollera att programmet faktiskt har subtitle så att användaren inte får en undefined. 
                if (programs[key2].subtitle !== undefined) {
                    h4El.appendChild(h4TextNode);
                }

                //skapa en <h5> element och ge den start och sluttider för varje program efter kontroll. 
                let h5El = document.createElement("h5");
                let h5TextNode = document.createTextNode(startTimeF(startTime) + endTimeF(endTime));

                /*kontroll om programmet redan har sänts ut.*/
                //skapa en tidsfunktion för nuvarande tid och jämför den med den tid som kommer från API. Skriv ut till DOM endast dom program inte har varit. 
                let dateNow = Date.now();

                //jämför nuvarande tiden och programmets tid i epoch-format. 
                if (startTime >= dateNow) {

                    //om starttiden för programmet är större än tiden nu, skriv ut till DOM.
                    h5El.appendChild(h5TextNode);
                }
                else {

                    //annars dölj de artikel-elementen med program som redan har sänts ut m.h.a. en display: none; 
                    articleEl.style.display = 'none';
                }


                //skapa en <p> element för description och lägg den i article-elementet. 
                let pEl = document.createElement("p");
                let pTextNode = document.createTextNode(programs[key2].description);
                pEl.appendChild(pTextNode);
                articleEl.append(h3El, h4El, h5El, pEl);

                //bifoga allting i infoEl elementet. 
                infoEl.appendChild(articleEl);
            }
        }))
        //skriv ut till DOM om kanalen program-schema inte hittas. 
        .catch(error => { console.error(error); infoEl.innerHTML = "<h1>Server error: 404!</h1> Kanalen funkar ej för tillfället</h1>"; infoEl.style.color = 'red'; })
}

//functionen getImage() tar in källan till bilden från imgSrc från eventListner vid klick och färgen för kanalen och skriver ut till dom 
function getImg(imgSrc, channelColor) {
    //skapa ny img element
    let imgEl = document.createElement("img");
    imgEl.src = imgSrc;
    imgEl.style = "width:150px;";
    infoEl.appendChild(imgEl);
    imgEl.style.boxShadow = '2px 5px 10px ' + channelColor;
    //ett försök att centrera bilden med lite stil.
    imgEl.style.marginLeft = '33%';
}


//funktionen startTime tar in variablen startTime för varje program från getPrograms() och konverterar detta till en hh:mm format.  
function startTimeF(startTime) {

    //skapa ny datum variabel d
    let d = new Date(+startTime);
    //OBS! startTime kommer i string format och funktionen Date kommer inte känna igen den och blir invalid.
    //Använd därför + innan, kallas för  'Unary (+) operator' det enda + gör är konvertera string till number.

    // hours från d
    let hours = d.getHours();

    //kontroll med (ternary operator) för att kontrollera om man ska lägga till 0 bakom siffran för att få t.ex tiden 08:30 och inte 8:30
    hours = hours <= 9 ? '0' + hours : hours;

    // minutes från d
    let minutes = d.getMinutes();

    //kontroll med (ternary operator) för att kontrollera om man ska lägga till 0 bakom siffran för att få t.ex tiden 08:04 och inte 08:4
    minutes = minutes <= 9 ? '0' + minutes : minutes;

    //functionen returnerar hours:minutes och används längre upp i getPrograms().
    return (hours + ":" + minutes);
}

//funktionen endtTimeF tar in variablen endTime för varje program från getPrograms() och konverterar detta till en hh:mm format.  

function endTimeF(endTime) {

    //trots scope anävnd en annan variabel (t) för säkerhetskull och seperation.
    //skapa ny datum variabel t
    let t = new Date(+endTime);
    //OBS! startTime kommer i string format och funktionen Date kommer inte känna igen den och blir invalid.
    //Använd därför + innan, kallas för  'Unary (+) operator' det enda den gör är konvertera string till number.


    // hours från t
    let hours = t.getHours();

    //kontroll med (ternary operator) för att kontrollera om man ska lägga till 0 bakom siffran för att få t.ex tiden 08:30 och inte 8:30
    hours = hours <= 9 ? '0' + hours : hours;

    // minutes från t
    let minutes = t.getMinutes();

    //kontroll med (ternary operator) för att kontrollera om man ska lägga till 0 bakom siffran för att få t.ex tiden 08:04 och inte 08:4
    minutes = minutes <= 9 ? '0' + minutes : minutes;

    //functionen returnerar —hours:minutes och används längre upp i getPrograms().
    return (
        ' — ' + hours +
        ":" +
        minutes);
}

//funktionen channelPlayer() fetchar på nytt för kanaler och lägger de i en select-lista. 
function channelPlayer() {

    //visa första select-val synligt för användaren.
    //efter val försvinner den "selected disabled hidden".
    playchannelEl.innerHTML = '<option value="" selected disabled hidden>Välj kanal att lyssna på</option>';

    //fetcha den globala variablen för kanalers API-länk
    fetch(ChannelsUrl)
        .then(response => response.json(ChannelsUrl))
        .then((data => {

            //skapa ny variabel för returdata. 
            let channels = data.channels;

            //loopa genom objektet channels med en for-in loop. 
            for (let key2 in channels) {

                //skapa ny variabel för kanalnamn i select listan. 
                let liveaudioName = channels[key2].name;

                //skapa en ny element option för att lägga den under select elementet
                let optionEl = document.createElement('option');

                //option för texten från channels[key2].liveaudio.url
                let optionElText = document.createTextNode(liveaudioName);
                optionEl.value = optionEl.value = channels[key2].liveaudio.url;

                //ge texten till optionEl
                optionEl.appendChild(optionElText);

                //ge optionEl till playchannelEl.
                playchannelEl.appendChild(optionEl);
            }
            //OBS! viktigt att stänga loopen här annars får man flera audioplayers vid varje klick sedan.

            //skapa ny element för audio utanför loopen. 
            let audioEl = document.createElement("AUDIO");

            //audio elementet bör ha 'controls' för att det ska fungera bra. attributen tar två argument. 
            audioEl.setAttribute('controls', '');

            //lite stil
            audioEl.style.height = '30px';
            audioEl.style.margin = '15px';

            //ge audioEl till playerEl
            playerEl.appendChild(audioEl);

            //lite stil
            playerEl.style.padding = '2px';
            //ange flex-warp för mindre skärmar(mobiler).
            playerEl.style.display = 'flex';
            playerEl.style.alignItems = 'center';
            playerEl.style.flexWrap = 'wrap';
            playBtnEl.style.margin = '0px 5px 0px 5px';

            //skapa en eventlyssnare för change på värdet på select-listan playchannelEl
            //skapa en anonymfunktion som anropar printAudio().
            playchannelEl.addEventListener('change', function (event) {

                //lagra event i en variabel Event1
                let Event1 = event.target.value;

                //ange Event1 som källa till audioEl så den spelar rätt kanal.
                audioEl.src = Event1;

                //skapa en ny event lyssnare för click på playbtn inuti  playchannelEl event lyssnare så att det endast spelar den valda kanalen. 
                //skapa en annonymfunktion som spelar ljudet med den inbygdda funktionen .play(). 
                playBtnEl.addEventListener('click', function () {
                    audioEl.play();
                });
            });

        }))
        .catch(error => console.error(error))
}