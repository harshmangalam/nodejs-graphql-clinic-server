import { UserInputError } from "apollo-server";
import {
  enumType,
  extendType,
  inputObjectType,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
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

export const PatientInput = inputObjectType({
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

export const Patient = objectType({
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

export const PatientMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPatientData", {
      type: "Patient",
      args: {
        patientInput: PatientInput,
      },
      async resolve(_root, { patientInput }, { db }: Context) {
        const patient = await db.patient.create({
          data: patientInput,
        });
        return patient;
      },
    });

    t.nonNull.field("removePatientData", {
      type: "Boolean",
      args: {
        id: nonNull(intArg()),
      },
      async resolve(_root, { id }, { db }: Context) {
        try {
          await db.patient.delete({
            where: {
              id,
            },
          });
          return true;
        } catch (error) {
          throw new UserInputError("Patient id not found", {
            error,
          });
        }
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
