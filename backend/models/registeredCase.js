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
        extraPetitionerCnt: Number,
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
            pincode: Number,
            district: String,
            town: String,
            ward: String,
            taluka: String,
        },
        policeStationCode: {
            type: String,
        },
        uidNum: {
            type: Number,
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
        extraPetitionerCnt: Number,
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
            pincode: Number,
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
                type: Number,
            },
            occupation: {
                type: String,
            },
            alternateLocation: {
                address: String,
                // pincode: Number,
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
                type: Number,
            },
            occupation: {
                type: String,
            },
            alternateLocation: {
                address: String,
                // pincode: Number,
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
            type: Number,
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
            type: Number,
        },
        advocate: {
            name: String,
            barRegNum: String,
            email: String,
        },
        mobile: Number,
        occupation: {
            type: String,
        },
        uidNum: {
            type: String,
        },
        location: {
            address: String,
            pincode: Number,
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
            type: Number,
        },
        filingDateAndTime: {
            type: Date,
        },
        mainMatterInfo: {
            caseType: String,
            caseNum: String,
            year: Number,
            cnrNum: String,
        },
    },
    registration: {
        caseType: String,
        nature: String,
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
    ]
}, {timestamps: true});

module.exports = mongoose.model('RegisteredCase', registeredCaseSchema);