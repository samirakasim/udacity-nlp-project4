
// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ]

//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!")
//     }
// }

// export { checkForName }


function checkURL(inputText) {
    
    const urlChecker = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    console.log(urlChecker)
    if (urlChecker == null) {
        return alert('Please enter a valid URL!!!');
    } else {
        return true;
    }
    
};

export { checkURL }