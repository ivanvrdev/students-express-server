const {model, Schema} = require('mongoose');

const studentSchema = new Schema({
    information: {
        personal: {
            names: {
                type: String,
                required: true
            },
            surnames: {
                type: String,
                required: true
            },
            bornDate: {
                type: Date,
                required: true
            },
            cuil: {
                type: String,
                required: true
            },
            address: {
                street: {
                    type: String,
                    required: true
                },
                height: {
                    type: Number,
                    required: true
                },
                department: {
                    floor: Number,
                    number: Number
                },
                city: {
                    type: String,
                    required: true
                },
                province: {
                    type: String,
                    required: true
                },
                postalCode: {
                    type: Number,
                    required: true
                }
            },
            nationality: {
                type: String,
                required: true
            },
        },
        contact: {
            email: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: Number,
                required: true
            }
        },
        education: {
            highSchool: {
                completed: {
                    type: Boolean,
                    required: true
                },
            },
            degrees: {
                university: Array,
                tertiary: Array,
                courses: Array
            }
        }
    },
    active: Boolean
});

module.exports = model('Student', studentSchema);