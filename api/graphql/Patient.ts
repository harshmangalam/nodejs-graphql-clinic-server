import { enumType, extendType, objectType } from "nexus";
import { Context } from "../context";

export const Episode = enumType({
  name: "Gender",
  members: ["MALE", "FEMALE", "OTHER"],
  description: "Patient Gender",
});

export const MaritalStatus = enumType({
  name: "MaritalStatus",
  members: ["MARRIED", "SINGLE", "DIVORCED", "OTHER"],
  description: "Patient marrage status",
});

export const Patient = objectType({
  name: "Patient",
  definition(t) {
    t.int("cfId");
    t.int("id");
    t.date("createdAt");
    t.int("medicineId");
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

export const PatientMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createPatientData", {
      type: "Patient",
      async resolve(_root, args, { db }: Context) {
        const patient = await db.patient.create({
          data: args,
        });
        return patient;
      },
    });
  },
});

export const PatientQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("fetchPatients", {
      type: "Patient",
      async resolve(_root, args, { db }: Context) {
        const patients = await db.patient.findMany();
        return patients;
      },
    });
  },
});
