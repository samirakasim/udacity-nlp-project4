function scoreTagConverter(scoreTag) {
    console.log("SCORE TAG: ", scoreTag)
    switch(scoreTag){
        case "N":
            return "Negative";
            break;
        case "NEU":
            return "Neutral";
            break;
        case "P":
            return "Positive";
            break;
        case "P+":
            return "Strong Positive";
            break;
        case "N+":
            return "Strong Negative";
            break;
        case "NONE":
            return "Without polarity";
            break;
    }
}

export { scoreTagConverter }
