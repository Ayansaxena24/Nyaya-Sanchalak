

// Civil case functions

const assignScoreCivil = (caseItem) => {

}


const getTrackScore = (track) => {
    switch (track) {
        case 1:
            return 1;
        case 2:
            return 3;
        case 3:
            return 5;
        default:
            return 0;
    }
}

// TODO --------------------------------------

const getFinalArgumentScore = () => {
    return 0;
}

const getEvidenceScore = () => {
    return 0;
}

const getInjuctionScore = () => {
    return 0;
}

const getValuation = () => {

}

const getAmendemantScore = () => {
    return 0;
}

const getFamilyDisputeScore = () => {
    return 0;
}



// -----------------------------------------------------------------------------------------------

// Criminal case functions

const assignScoreCriminal = () => {
    
}






// -----------------------------------------------------------------------------------------------

// Common functions

const getDateScore = (caseDate, constFactor) => {
    const date1 = new Date(caseDate);
    const date2 = new Date();
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // dateScore
    const dateScore = differenceInDays * constFactor;

    return dateScore;
}

const getHearingScore = () => {
    return 0;
}