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
            enum: ['male', 'female', 'other'],
        },
        age: {
            type: String,
        },
        dob: {
            type: Date,
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
        firString: {
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
            enum: ['complaint', 'accused'],
        },
        complainantOrAccused: {
            type: String,
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
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
        },
        valuation: {
            type: String
        },
        amount: {
            type: String,
        },
        filingDateAndTime: {
            type: Date,
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
        default: 'pending',
        enum: ['pending', ''],
    },
    caseHistory: [
        {
            status: String,
            date: Date,
            court: {
                type: ObjectId,
                ref: 'Court',
            }
        }
    ],

    
}, {timestamps: true});

module.exports = mongoose.model('RegisteredCase', registeredCaseSchema);