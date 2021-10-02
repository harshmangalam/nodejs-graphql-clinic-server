/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Date custom scalar type
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PatientInput: { // input type
    address?: string | null; // String
    age: number; // Int!
    cfId: number; // Int!
    city?: string | null; // String
    dob: NexusGenScalars['Date']; // Date!
    email?: string | null; // String
    gender: NexusGenEnums['Gender']; // Gender!
    height?: number | null; // Int
    maritalStatus: NexusGenEnums['MaritalStatus']; // MaritalStatus!
    medicineId: number; // Int!
    name: string; // String!
    occupation?: string | null; // String
    pincode?: string | null; // String
    reffred?: string | null; // String
    state?: string | null; // String
    telephone?: string | null; // String
    weight?: number | null; // Int
  }
}

export interface NexusGenEnums {
  Gender: "FEMALE" | "MALE" | "OTHER"
  MaritalStatus: "DIVORCED" | "MARRIED" | "OTHER" | "SINGLE"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: any
}

export interface NexusGenObjects {
  Mutation: {};
  Patient: { // root type
    address?: string | null; // String
    age?: number | null; // Int
    cfId: number; // Int!
    city?: string | null; // String
    createdAt?: NexusGenScalars['Date'] | null; // Date
    dob?: NexusGenScalars['Date'] | null; // Date
    email?: string | null; // String
    gender?: NexusGenEnums['Gender'] | null; // Gender
    height?: number | null; // Int
    id: number; // Int!
    maritalStatus?: NexusGenEnums['MaritalStatus'] | null; // MaritalStatus
    medicineId: number; // Int!
    name?: string | null; // String
    occupation?: string | null; // String
    pincode?: string | null; // String
    reffred?: string | null; // String
    state?: string | null; // String
    telephone?: string | null; // String
    weight?: number | null; // Int
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPatientData: NexusGenRootTypes['Patient']; // Patient!
    removePatientData: boolean; // Boolean!
  }
  Patient: { // field return type
    address: string | null; // String
    age: number | null; // Int
    cfId: number; // Int!
    city: string | null; // String
    createdAt: NexusGenScalars['Date'] | null; // Date
    dob: NexusGenScalars['Date'] | null; // Date
    email: string | null; // String
    gender: NexusGenEnums['Gender'] | null; // Gender
    height: number | null; // Int
    id: number; // Int!
    maritalStatus: NexusGenEnums['MaritalStatus'] | null; // MaritalStatus
    medicineId: number; // Int!
    name: string | null; // String
    occupation: string | null; // String
    pincode: string | null; // String
    reffred: string | null; // String
    state: string | null; // String
    telephone: string | null; // String
    weight: number | null; // Int
  }
  Query: { // field return type
    fetchPatients: NexusGenRootTypes['Patient'][]; // [Patient!]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createPatientData: 'Patient'
    removePatientData: 'Boolean'
  }
  Patient: { // field return type name
    address: 'String'
    age: 'Int'
    cfId: 'Int'
    city: 'String'
    createdAt: 'Date'
    dob: 'Date'
    email: 'String'
    gender: 'Gender'
    height: 'Int'
    id: 'Int'
    maritalStatus: 'MaritalStatus'
    medicineId: 'Int'
    name: 'String'
    occupation: 'String'
    pincode: 'String'
    reffred: 'String'
    state: 'String'
    telephone: 'String'
    weight: 'Int'
  }
  Query: { // field return type name
    fetchPatients: 'Patient'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPatientData: { // args
      patientInput?: NexusGenInputs['PatientInput'] | null; // PatientInput
    }
    removePatientData: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}