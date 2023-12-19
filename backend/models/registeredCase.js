const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const registeredCaseSchema = new mongoose.Schema({
    petitioner: {
        orgName: {
            type: String,
        },
        complainant: {
            type: String,
        },
        extraPetitionerCnt: String,
        advocate: {
            name: {
                type: String
            },
            barRegNum: {
                type: String,
            },
            email: {
                type: String,
            }
        },
        location: {
            address: String,
            pincode: String,
            district: String,
            town: String,
            ward: String,
            taluka: String,
        },
        policeStationCode: {
            type: String,
        },
        uidNum: {
            type: String,
        }
    },
    respondent: {
        orgName: {
            type: String,
        },
        accused: {
            type: String,
        },
        relation: {
            type: String,
        },
        name: {
            type: String,
        },
        gender: {
            type: String,
            // enum: ['male', 'female', 'other'],
        },
        age: {
            type: String,
        },
        dob: {
            type: String,
        },
        caste: {
            type: String,
        },
        extraPetitionerCnt: String,
        proformaRespondent: {
            type: Boolean,
        },
        advocate: {
            name: String,
            barRegNum: String,
            email: String,
        },
        location: {
            address: String,
            pincode: String,
            district: String,
            town: String,
            ward: String,
            taluka: String,
            village: String,
        },
        policeStation: {
            policeStationCode: String,
            uidNum: String,
        }
    },
    extraInfo: {
        petitioner: {
            passportNum: {
                type: String,
            },
            panNum: {
                type: String,
            },
            faxNum: {
                type: String,
            },
            country: {
                type: String,
            },
            nationality: {
                type: String,
            },
            phone: {
                type: String,
            },
            occupation: {
                type: String,
            },
            alternateLocation: {
                address: String,
                // pincode: String,
                district: String,
                town: String,
                ward: String,
                taluka: String,
                village: String,
            },
        },

        respondent: {
            passportNum: {
                type: String,
            },
            panNum: {
                type: String,
            },
            faxNum: {
                type: String,
            },
            country: {
                type: String,
            },
            nationality: {
                type: String,
            },
            phone: {
                type: String,
            },
            occupation: {
                type: String,
            },
            alternateLocation: {
                address: String,
                // pincode: String,
                district: String,
                town: String,
                ward: String,
                taluka: String,
                village: String,
            },
        },
        
    },
    actSection: [
        {
            act: String,
            section: String,
        }
    ],
    policeStation: {
        policaChallanOrPrivateComplaint: {
            type: String,
        },
        policeStationCode: {
            type: String,
        },
        dateOfOffence: {
            type: Date,
        },
        dateOfFilingChargesheet: {
            type: Date,
        },
        firType: {
            type: String,
        },
        firNumber: {
            type: String,
        },
        year: {
            type: String,
        },
        investigatingOfficer: {
            type: String,
        },
        beltNum: {
            type: String,
        },
        investigatingOfficer1: {
            type: String,
        },
        beltNum1: {
            type: String,
        },
        trials: {
            type: String,
        },
        offenceRemark: {
            type: String,
        }
    },
    extraParty: {
        type: {
            type: String,
            // enum: ['complaint', 'accused'],
        },
        complainantOrAccused: {
            type: String,
        },
        gender: {
            type: String,
            // enum: ['male', 'female', 'other'],
        },
        relation: {
            type: String,
        },
        name: {
            type: String,
        },
        caste: {
            type: String,
        },
        age: {
            type: String,
        },
        advocate: {
            name: String,
            barRegNum: String,
            email: String,
        },
        mobile: String,
        occupation: {
            type: String,
        },
        uidNum: {
            type: String,
        },
        location: {
            address: String,
            pincode: String,
            district: String,
            town: String,
            ward: String,
            taluka: String,
            village: String,
        },
        proformaRespondent: Boolean,
        policeStationCode: {
            type: String,
        }
    },
    caseDetails: {
        info: {
            type: String,
            required: [true, 'Case description is required!']
        },
        valuation: {
            type: String,
            default: '0'
        },
        amount: {
            type: Number,
        },
        filingDate: {
            type: Date,
        },
        filingTime: {
            type: String,
        },
        mainMatterInfo: {
            caseType: String,
            caseNum: String,
            year: String,
            cnrNum: String,
        },
    },
    registration: {
        caseType: String,
        nature: String,
    },

    caseInfo: {
        caseType: String,
        caseNum: String,
        caseYear: String,
        filingNum:String,
        filingDate: Date,
        regNum: String,
        regDate: Date,
        cnrNum: String,

        caseDesc: String,
        petitionerAndAdvocate: {
            petitioner: String,
            advocate: String,
        },
        respondentAndAdvocate: {
            respondent: String,
            advocate: String,
        },
    },

    caseStatus: {
        type: String,
        default: 'not heard',
        enum: ['not heard', 'pending', 'closed'],
    },

    caseStage: {
        type: String,
        default: 'Return of summons or notice'
    },

    caseHearing: [
        {
            typeOfEvd: String,
            date: Date,
            court: {
                type: ObjectId,
                ref: 'Court',
            },
            score: {
                type: Number,
                default: 0,
            },

            caseDescription: {
                facts: [],
                evidence: [
                    {
                        typeOfEvd: String,
                        description: String,
                    }
                ],
                actSection: [
                    {
                        act: String,
                        section: String,
                    }
                ],
            }
        }
    ],

    courtId: {
        type: ObjectId,
        ref: 'Court'
    },
    score: {
        type: Number,
        default: 0,
    },
    
    track: {
        type: Number,
        required: [true, "Track is required!"],
    }, 
    finalArgument: {
        type: Boolean,
        default: false,
    },

    evidence: [
        {
            typeOfEvd: String,
            description: String,
        }
    ],
    category: {
        type: String,
        enum: ['civil', 'criminal', 'caveat filing'],
        required: [true, 'case category is required!'],
    }, 

    

}, {timestamps: true});

module.exports = mongoose.model('RegisteredCase', registeredCaseSchema);