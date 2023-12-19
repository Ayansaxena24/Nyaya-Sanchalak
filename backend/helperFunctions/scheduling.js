const RegisteredCase = require("../models/RegisteredCase");

const constFactor = 5;
// const finalArgementConstFactor = 10;

const { trackMap, ipcSectionMap, caseStageMap } = require('../constants/index');

exports.assignScoreCivil = async (caseItem) => {
    /*
        Preference Order
        * 1. Track
        * 2. Date difference
        * 3. Stage of case
        * 4. Evidences
        * 5. Number of Hearing
        * 6. Valuation
        * 7. Anupam's score
    */

    // 1. Track - done
    const track = trackMap.get(caseItem.caseInfo.caseType);
    const trackScore = getTrackScore(track);

    // 2. Date difference - done
    const dateScore = getDateScore(caseItem.caseInfo.regDate);

    // 3. Case Stage Score - done
    const caseStageScore = getCaseStageScore(caseItem);

    // 4. Evidences - done
    const evidencesScore = getEvidenceScore(caseItem);

    // 5. Number of Hearing
    const hearingCountScore = getHearingCountScore(caseItem);
   
    // 6. Valuation
    const valuationScore = getValuationScore(caseItem);

    // 7. Anupam's score
    const anupamScore = getAnupamScore(caseItem);

    // console.log('trackScore ->',trackScore);
    // console.log('dateScore->',dateScore);
    // console.log('case stage-> ',caseStageScore);
    // console.log('evidence->',evidencesScore);
    // console.log('hearing->',hearingCountScore);
    // console.log('valuationScore->',valuationScore);
    // console.log('anupamScore->',anupamScore);

    // Total score
    const totalScore = 4*trackScore + 3*dateScore + 5*evidencesScore + 5*hearingCountScore + 5*valuationScore + 10*caseStageScore + 5*anupamScore;
    /* reliefScore + injuctionSore +  valuation + amendemant + disputeScore + */

    // console.log(`total civil score for ${caseItem._id} is ${totalScore}`);

    const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
        score: totalScore,
    }, {new: true}).exec();

    return result;

}

exports.assignScoreCriminal = async (caseItem) => {
    /*
        CRIMINAL CASE
            Preference Order
            * 1. IPC Act
            * 2. Date of registration
            * 3. Severity Analysis Score
            * 4. Number of hearing
            * 5. Case Stage Score
            
            
    */      

    // 1. IPC Act - done
    const ipcActScore = getIpcSectionScore(caseItem);

    // 2. Date of registration - done
    const dateScore = getDateScore(caseItem.caseInfo.regDate);

    // 3. Severity Analysis Score
    const severityScore = getSeverityScore(caseItem);

    // 4. Number of hearing - done
    const hearingCountScore = getHearingCountScore(caseItem);

    // 5. Case Stage Hearing - done
    const caseStageScore = getCaseStageScore(caseItem);

    // console.log('ipcActScore->', ipcActScore);
    // console.log('dateScore->', dateScore);
    // console.log('severityScore->', severityScore);
    // console.log('hearingCountScore->', hearingCountScore);
    // console.log('caseStageScore->', caseStageScore);

    // Total score
    const totalScore = 35*ipcActScore + 30*dateScore + 17*severityScore + 10*hearingCountScore + 8*caseStageScore;

    // console.log(`total criminal score for ${caseItem._id} is ${totalScore}`);

    

    const result = RegisteredCase.findByIdAndUpdate(caseItem._id, {
        score: totalScore,
    }, {new: true}).exec();

    return result;

}



// Civil case functions

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

const getValuationScore = (caseItem) => {
    const valuation = caseItem.caseDetails.valuation;
    
    const score = parseInt(valuation, 10);
    // console.log(score);
    return score;
}

// TODO --------------------------------------

// const getReliefScore = () => {
//     return 0;
// }

// const getInjuctionScore = () => {
//     return 0;
// }

// const getValuationScore = ()=>{
//     // const const ka input dekhna padega
//     // var cost;
//     // return cost*1e-9;
//     return 0;
// }

// const getAmendemantScore = () => {
//     // Simple hoga to one kardenge return verna 10
//     // if('amedmant'==='simple') return 1;
//     // return 10;
//     return 0;
// }

// const getFamilyDisputeScore=()=>{
//     // This will depend upon partiton adoption and succession. The values Are yet to be determined for the same
//     // return 1;
//     return 0;
// }

const getAnupamScore = () => {
    return 0;
}



// -----------------------------------------------------------------------------------------------

// Criminal case functions

// TODO ------------------------------------------------

const getIpcSectionScore = (caseItem) => {

    // if (caseItem.caseHearing.caseDescription.actSection.length) {
    if (caseItem.actSection.length) {
        let sectionScore = 0;
        // const actSection = caseItem.caseHearing.caseDescription.actSection;
        const actSection = caseItem.actSection;

        for (let i = 0; i < actSection.length; i++) {
            const item = actSection[i];
            console.log(item);
            sectionScore += ipcSectionMap.get(item.section);
        }

        return sectionScore;
    } else {
        let sectionScore = 0;
        const actSection = caseItem.actSection;

        for (let i = 0; j < actSection.length; i++) {
            const item = actSection[i];

            sectionScore += ipcSectionMap.get(item.section);
        }

        return sectionScore;
    }

}

const getSeverityScore = (caseItem) => {
    return 0;
}




// -----------------------------------------------------------------------------------------------


// Common functions

const getDateScore = (caseDate) => {
    const date1 = new Date(caseDate);
    const date2 = new Date();
    const differenceInMs = Math.abs(date2 - date1);
    // const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // // dateScore
    // const dateScore = differenceInDays * constFactor;

    const differenceInWeeks = Math.round(differenceInMs / (1000 * 60 * 60 * 24 * 7)); // Calculate difference in weeks

    // weekScore
    const weekScore = differenceInWeeks * constFactor;

    return weekScore;

    // return dateScore;
}

const getHearingCountScore = (caseItem) => {
    return caseItem.caseHearing.length;
}

const getCaseStageScore = (caseItem) => {
    const caseStage = caseItem.caseStage;
    const score = caseStageMap.get(caseStage);
    return score;
}

const getEvidenceScore = (caseItem) => {
    if (caseItem.evidence.length) {
        const evidence = caseItem.evidence;

        let primaryEvdCnt = 0;

        for (let i = 0; i < evidence.length; i++) {
            if (evidence[i].type === 'primary') {
                primaryEvdCnt++;
            }
        }

        let evdScore = 0;
        evdScore += primaryEvdCnt * 2 + (evidence.length - primaryEvdCnt);

        return evdScore;
    } else {
        const evidence = caseItem.evidence;

        let primaryEvdCnt = 0;

        for (let i = 0; i < evidence.length; i++) {
            if (evidence[i].type === 'primary') {
                primaryEvdCnt++;
            }
        }

        let evdScore = 0;
        evdScore += primaryEvdCnt * 2 + (evidence.length - primaryEvdCnt);

        return evdScore;
    }

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



// 4. Relief
// const reliefScore = getReliefScore();

// 5. Injuction
// (Score could be permanent,temporary or none  - >assignn krdenege inki kuch values)
// const injuctionSore = getInjuctionScore();

// 7. Amendemant / Inspection
// const amendemant = getAmendemantScore();





/*
        CRIMINAL CASE
            Preference Order
        35%    * 0. IPC Act
        30%    * 1. Date of registration
        15%%   * 2. Severity Analysis Score
        10%    * 3. Number of hearing
        05%    * 4. Evidence (Value score ->kuch Particular value assign krna hai isko ?)
        05%    * 5. IsFinal Hearing
    */



        /*
        Preference Order
       40%  * 0. Track
       30%  * 1. Date of registration
       05%  * 2. Final argument
        5%  * 3. Parties are bringing Evidences
    * 10%% 6. Anupam Score
    */