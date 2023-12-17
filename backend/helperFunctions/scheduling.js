const RegisteredCase = require("../models/RegisteredCase");

const constFactor = 2;
const finalArgementConstFactor = 10;

const {trackMap, ipcSectionMap} = require('../constants/index');

// Civil case functions

const assignScoreCivil = async (caseItem) => {
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

    // 0. Track - done
    const track = trackMap.get(caseItem.caseInfo.caseType);
    const trackScore = getTrackScore(track);

    // 1. Date difference - done
    const dateScore = getDateScore(caseItem.caseInfo.regDate);

    // 2. Final argument - done
    const finalArgumentScore = getFinalArgumentScore(caseItem);

    // 3. Evidences - done
    const evidencesScore = getEvidenceScore(caseItem);

    // 4. Relief
    // const reliefScore = getReliefScore();

    // 5. Injuction
    // (Score could be permanent,temporary or none  - >assignn krdenege inki kuch values)
    // const injuctionSore = getInjuctionScore();

    // 6.Valuation of function  (3 cror,100 crore etc)
    // const valuation = getValuationScore();

    // 7. Amendemant / Inspection
    // const amendemant = getAmendemantScore();

    // 8. Number of Hearing
    const hearingCountScore = getHearingCountScore();

    // 9.Family Dispute
    // const disputeScore = getFamilyDisputeScore();
    

    // Total score
    const totalScore = trackScore + dateScore + finalArgumentScore + evidencesScore + reliefScore + injuctionSore + valuation + amendemant + hearingCountScore + disputeScore; 

    const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
        score: totalScore,
    }).exec();

}

const getTrackScore = (track) => {
    switch (track) {
        case 1:
            return 50;
        case 2:
            return 35;
        case 3:
            return 15;
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

const assignScoreCriminal = async (caseItem) => {
    /*
        CRIMINAL CASE
            Preference Order
            * 0. IPC Act
            * 1. Date of registration
            * 2. Severity Analysis Score
            * 3. Number of hearing
            * 4. Evidence (Value score ->kuch Particular value assign krna hai isko ?)
            * 5. IsFinal Hearing
    */

    // 0. IPC Act
    const ipcActScore = getIpcSectionScore();
    
    // 1. Date of registration
    const dateScore = getDateScore(caseItem.caseInfo.regDate);
    
    // 2. Severity Analysis Score
    const severityScore = getSeverityScore();
    
    // 3. Number of hearing
    const hearingCountScore = getHearingCountScore();
    
    // 4. Evidence (Value score ->kuch Particular value assign krna hai isko ?)
    const evidencesScore = getEvidenceScore();
    
    // 5. IsFinal Hearing
    const finalArgumentScore = getFinalArgumentScore();

    // Total score
    const totalScore = ipcActScore + dateScore + severityScore + hearingCountScore + evidencesScore + finalArgumentScore;

    const result = RegisteredCase.findByIdAndUpdate(caseItem._id, {
        score: totalScore,
    }).exec();
}

const getIpcSectionScore = () => {
    return 0;
}

const getSeverityScore = () => {
    return 0;
}




// -----------------------------------------------------------------------------------------------


// Common functions

const getDateScore = (caseDate) => {
    const date1 = new Date(caseDate);
    const date2 = new Date();
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // dateScore
    const dateScore = differenceInDays * constFactor;

    return dateScore;
}

const getHearingCountScore = (caseItem) => {
    return caseItem.caseHearing.length;
}

// TODO -------------------------------------------

const getFinalArgumentScore = (caseItem) => {
    if (caseItem.finalArgument === true) {
        return 20;
    } else {
        return 0;
    }
}

const getEvidenceScore = (caseItem) => {
    const evidence = caseItem.evidence;

    let primaryEvdCnt = 0;

    for (let i = 0; i < evidence.length; i++) {
        if (evidence[i].type === 'primary') {
            primaryEvdCnt++;
        }
    }

    const evdScore = primaryEvdCnt * 2 + (evidence.length-primaryEvdCnt);

    return evdScore;
}





/*
    CIVIL CASE
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

/*
    CRIMINAL CASE
        Preference Order
        * 0. IPC Act
        * 1. Date of registration
        * 2. Severity Analysis Score
        * 3.Number of hearing
        * 4. Evidence (Value score ->kuch Particular value assign krna hai isko ?)
        * 5. IsFinal Hearing
    */