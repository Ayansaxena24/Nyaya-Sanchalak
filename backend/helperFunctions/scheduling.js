const constFactor = 2;

// Civil case functions

const assignScoreCivil = (caseItem) => {
    /*
        Preference Order
        * 0. Track
        * 1. Date of registration
        * 2. Final argument
        * 3. Parties are bringing Evidences
        * 4. Relief
        * 5. Temp Injunction
        * 6. Valuation
        * 7. Amendment / Inspection (simple or urgency)
        * 8. Family dispute - partition, adoption, succession
        * 9. Number of Hearing
    */

    // 1. Track
    const trackScore = getTrackScore(caseItem.track);

    // 2. Date difference
    const dateScore = getDateScore(caseItem.caseInfo.regDate, 2);

    // 3. Final argument
    const finalArgumentScore = getFinalArgumentScore();

    // 4. Evidences 
    const evidencesScore = getEvidenceScore();

    // 5. Injuction
    // (Score could be permanent,temporary or none  - >assignn krdenege inki kuch values)
    const injuctionSore = getInJuctionScore();

    // 6.Valuation of function  (3 cror,100 crore etc)
    const valuation=getValuation();

    // 7. Amendemant / Inspection
    const amendemant=getAmendemantScore();

    // 8. Number of Hearing
    const scoreHearingCount=getHearingCount();

    // 9.Family Dispute
    const disputeScore=getFamilyDisputeScore();
    



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

const getReliefScore = () => {
    return 0;
}

const getInjuctionScore = () => {
    return 0;
}

const getValuationScore = ()=>{
    // const const ka input dekhna padega
    // var cost;
    // return cost*1e-9;
    return 0;
}

const getAmendemantScore = () => {
    // Simple hoga to one kardenge return verna 10
    // if('amedmant'==='simple') return 1;
    // return 10;
    return 0;
}

const getFamilyDisputeScore=()=>{
    // This will depend upon partiton adoption and succession. The values Are yet to be determined for the same
    // return 1;
    return 0;
}



// -----------------------------------------------------------------------------------------------

// Criminal case functions

// TODO ------------------------------------------------

const assignScoreCriminal = () => {

}

const getIpcSectionScore = () => {
    return 0;
}

const getSeverityScore = () => {
    return 0;
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


const getHearingScore = (caseItem) => {
    return caseItem.caseHearing.length;
}

// TODO -------------------------------------------

const getFinalArgumentScore = () => {
    return 0;
}

const getEvidenceScore = () => {
    return 0;
}

