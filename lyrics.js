
let serverUrl = "https://dc3b-169-234-9-128.ngrok.io/"
function load() {
    const urlParams = new URLSearchParams(window.location.search);
    const artist = urlParams.get('artist');
    console.log(artist);
    const song = urlParams.get('song');
    console.log(song);
    console.log("hello its working");
    fetch(serverUrl + '?artist=' +artist + '&song=' + song, {method:'get', headers: new Headers({ "ngrok-skip-browser-warning":"1"})})
        .then(res => res.json())
        .then(data => {
            // console.log(data.emptyLyrics);
            let str_index = 0;
            var emptyLyricsString = data.emptyLyrics;
            while(str_index < emptyLyricsString.length) {
                if(emptyLyricsString[str_index] == "\n") {
                    emptyLyricsString[str_index] = "<br>";
                }
                str_index++;
            }
            var emptyLyricsArray = emptyLyricsString.split("___");
            document.getElementById('display').innerHTML = '';
            document.getElementById('display').innerHTML += emptyLyricsArray[0];
            let index = 1;
            // var userInputs = [];
            while(index < emptyLyricsArray.length) {
                document.getElementById('display').innerHTML += `<input type="text" class="" id="${index}" />`;
                // userInputs[index] = document.getElementById(index).value;
                document.getElementById('display').innerHTML += emptyLyricsArray[index];
                index++;
            }
            

            // document.getElementById('display').innerHTML += `<button onclick="done(${JSON.stringify(data.answers)}, ${emptyLyricsArray.length - 1})">Submit</button>`
            let btn = document.createElement('button');
            btn.innerHTML = "Submit";
            btn.onclick = function() {
                done(data.answers, emptyLyricsArray.length - 1);
            }

            document.getElementById('display').appendChild(btn);
            // let answers_index = 0;
            // let numCorrect = 0;
            // while(answers_index < data.answers.length) {
            //     if(data.answers[answers_index] == userInputs[answers_index]) {
            //         numCorrect++;
            //     }
            //     answers_index++;
            // }
            // total = answers_index + 1;
            // correct = numCorrect;
            // done(correct, total);

            /*document.getElementById('display').innerHTML = data.emptyLyrics*/
        })
}



function done(correct, total){
    // let parsedAnswers = JSON.parse(answers);
    let count = 0;
    console.log(correct, total);
    for(let i = 0; i< total; i++) {
        let userInput = document.getElementById(i+1).value;
        if(userInput == correct[i]) {
            count++;
        }
    }
    window.location = './submitted.html?count=' + count + '&total=' + total;
}
