import { scoreTagConverter } from './scoreTagConverter'
import { checkURL } from './nameChecker'

let apiKey = process.env.API_KEY;
let baseURL = `https://api.meaningcloud.com/sentiment-2.1?&key=${apiKey}&lang=en`;

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputText = document.getElementById('name').value
    console.log(inputText)

    //if the imputText is not URL throw an error on the screen and don't make the api call else make the fetch call
  
    // console.log(checkURL(inputText))
    if (checkURL(inputText) !== 'null') {    
    console.log("::: Form Submitted :::")
    fetch(baseURL + `&url=${inputText}`)
     .then(res => res.json())
     .then(function(res) {
        console.log("res: ", res)
        document.getElementById("subjectivity").textContent += res.subjectivity;
        document.getElementById("tone").textContent += scoreTagConverter(res.score_tag);
        document.getElementById("text").textContent += res.sentence_list[0].text;
    })
} else {
    alert('Please enter a valid URL!');
}
    
}

export { handleSubmit }