"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientQuery = exports.PatientMutation = exports.Patient = exports.PatientInput = exports.MaritalStatus = exports.Episode = void 0;
const apollo_server_1 = require("apollo-server");
const nexus_1 = require("nexus");
exports.Episode = (0, nexus_1.enumType)({
    name: "Gender",
    members: ["MALE", "FEMALE", "OTHER"],
    description: "Patient Gender",
});
exports.MaritalStatus = (0, nexus_1.enumType)({
    name: "MaritalStatus",
    members: ["MARRIED", "SINGLE", "DIVORCED", "OTHER"],
    description: "Patient marrage status",
});
exports.PatientInput = (0, nexus_1.inputObjectType)({
    name: "PatientInput",
    definition(t) {
        t.nonNull.int("cfId");
        t.nonNull.int("medicineId");
        t.nonNull.string("name");
        t.nonNull.int("age");
        t.nonNull.date("dob");
        t.nonNull.field("gender", {
            type: "Gender",
        });
        t.string("address");
        t.string("city");
        t.string("state");
        t.string("pincode");
        t.string("telephone");
        t.string("email");
        t.string("occupation");
        t.int("height");
        t.int("weight");
        t.string("reffred");
        t.nonNull.field("maritalStatus", {
            type: "MaritalStatus",
        });
    },
});
exports.Patient = (0, nexus_1.objectType)({
    name: "Patient",
    definition(t) {
        t.nonNull.int("cfId");
        t.nonNull.int("id");
        t.date("createdAt");
        t.nonNull.int("medicineId");
        t.string("name");
        t.int("age");
        t.date("dob");
        t.field("gender", {
            type: "Gender",
        });
        t.string("address");
        t.string("city");
        t.string("state");
        t.string("pincode");
        t.string("telephone");
        t.string("email");
        t.string("occupation");
        t.int("height");
        t.int("weight");
        t.string("reffred");
        t.field("maritalStatus", {
            type: "MaritalStatus",
        });
    },
});
exports.PatientMutation = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("createPatientData", {
            type: "Patient",
            args: {
                patientInput: exports.PatientInput,
            },
            async resolve(_root, { patientInput }, { db }) {
                const patient = await db.patient.create({
                    data: patientInput,
                });
                return patient;
            },
        });
        t.nonNull.field("removePatientData", {
            type: "Boolean",
            args: {
                id: (0, nexus_1.nonNull)((0, nexus_1.intArg)()),
            },
            async resolve(_root, { id }, { db }) {
                try {
                    await db.patient.delete({
                        where: {
                            id,
                        },
                    });
                    return true;
                }
                catch (error) {
                    throw new apollo_server_1.UserInputError("Patient id not found", {
                        error,
                    });
                }
            },
        });
    },
});
exports.PatientQuery = (0, nexus_1.extendType)({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("fetchPatients", {
            type: "Patient",
            async resolve(_root, args, { db }) {
                const patients = await db.patient.findMany();
                return patients;
            },
        });
    },
});
//# sourceMappingURL=Patient.js.map