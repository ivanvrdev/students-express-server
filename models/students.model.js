const {model, Schema} = require('mongoose');

const studentSchema = new Schema({
    informacion: {
        personal: {
            nombres: {
                type: String,
                required: true
            },
            apellidos: {
                type: String,
                required: true
            },
            fechaNacimiento: {
                type: Date,
                required: true
            },
            cuil: {
                type: String,
                required: true
            },
            domicilio: {
                calle: {
                    type: String,
                    required: true
                },
                altura: {
                    type: Number,
                    required: true
                },
                departamento: {
                    piso: Number,
                    numero: Number
                },
                ciudad: {
                    type: String,
                    required: true
                },
                provincia: {
                    type: String,
                    required: true
                },
                codPostal: {
                    type: Number,
                    required: true
                }
            },
            nacionalidad: {
                type: String,
                required: true
            },
        },
        contacto: {
            email: {
                type: String,
                required: true,
            },
            numTelefono: {
                type: Number,
                required: true
            }
        },
        educacion: {
            secundario: {
                completado: {
                    type: Boolean,
                    required: true
                },
                institucion: String,
                ingreso: Date,
                egreso: Date,
            },
            titulos: {
                universitarios: Array,
                terciarios: Array,
                cursos: Array,
                especializaciones: Array
            }
        },
        profesional: {
            perfiles: {
                gitHub: String,
                linkedIn: String
            },
            trabajos: {
                historial: Array,
                referencias: Array
            },
            conocimientos: Array,
            habilidades: Array,
            idiomas: Array
        },
        preferencias: {
            hobbies: Array,
            intereses: Array,
            aspiraciones: Array,
        }
    },
    active: Boolean
});

module.exports = model('Student', studentSchema);