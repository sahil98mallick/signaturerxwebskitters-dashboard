import { BaseApiResponse } from "typescript/interface/common.interface";

export type EnumToPipes<
  T,
  K extends string | number | bigint | boolean | null | undefined
> = `${Extract<T, K>}` extends `${infer N extends K}` ? N : never;

// for branch details

export interface IBranchPharmacy {
  id: number;
  name: string;
  logo: any;
  applyLogoForAllBranches: boolean;
  collectPaymentForAllBranches: boolean;
  allowBranchesForMedicationPriceChange?: boolean;
  allowBranchesForToggleAvailability?: boolean;
}

export interface IPharmacyBranchWorkingHour {
  id: number;
  pharmacyBranchWorkingDayId: number;
  openAt: string;
  closeAt: string;
}

export interface IPharmacyBranchWorkingDay {
  id: number;
  dayOfWeek: string;
  isOpen: boolean;
  pharmacyBranchWorkingHour: IPharmacyBranchWorkingHour[];
}

export interface IbranchDetails {
  id: number;
  name: string;
  pharmacyId: number;
  email: string;
  phone: string;
  logo?: null | string;
  branch_logo?: null | string;
  address: string;
  city: string;
  country: string;
  postcode: string;
  website?: string;
  code?: string;
  status: string;
  createdAt: string;
  bankAccountName: string | null;
  bankAccountNumber: string | null;
  sortCode: string;
  ryftAccountId: null | string;
  ryftAccountVerificationStatus: VerificationStatusType;
  ryftAccountEntityType: VerificationAccountEntityType;
  ryftAccountFrozen: boolean;
  ryftAccountStatus: null | string;
  ryftPayoutEnabled: boolean;
  ryftPayoutMethodId: null | string;
  medicineSalePrice?: string;
  priceMultiple?: number | string;
  dispensingFee?: number | string;
  minimumItemCharge?: number | string;
  allowBranchesForMedicationPriceChange?: boolean;
  isAvailableForAcceptOrder?: boolean;
  latitude: number;
  longitude: number;
  collectedCount: null | number;
  rejectedCount: null | number;
  pendingCount: null | number;
  ryftPayoutMethodStatus: bankInfoVerificationStatusType;
  availabilityStatusBySuperAdmin: boolean | null;
  superAdminAvailabilityStatusExpiry: null | string;
}

export interface IbranchDetailsData extends IbranchDetails {
  pharmacy: IBranchPharmacy;
  pharmacyBranchWorkingDay: IPharmacyBranchWorkingDay[];
}

export interface IBranchDetailsResponse extends BaseApiResponse {
  data: IbranchDetailsData;
}

export interface IListPharmacyBranchPayload {
  pharmacyId?: number;
  page: number;
  length: number;
  search?: string;
  sortOrder?: string;
  sortBy?: string;
}

// List of pharmacy branches
export interface IpharmacyBranchListData {
  docs: IbranchDetailsData[];
  totalRecords: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface IpharmacyBranchListResponse extends BaseApiResponse {
  data: IpharmacyBranchListData;
}

//Upload a csv file to upload branchs
export interface IbranchBulkUploadResponse extends BaseApiResponse {
  data: BaseApiResponse;
}

export interface BankAccount {
  bankIdType: string;
  bankId: string;
  accountNumberType: string;
  last4: string;
  address: IAddress;
}

export interface IAddress {
  lineOne: string;
  townOrCity: string;
  city?: string;
  region: string;
  postalCode: string;
  country: string;
}
export interface FetchBankAccountInfoData {
  id: string;
  type: string;
  status: string;
  currency: string;
  countryCode: string;
  bankAccount: BankAccount;
}

export interface FetchBankAccountInfoResponse extends BaseApiResponse {
  data: FetchBankAccountInfoData;
}

export type VerificationDocumentType = {
  type: VerifyAccountRequiredDocumentsTypeType;
  category: VerifyAccountRequiredDocumentsCategoryType;
  front?: string;
  back?: string;
  status: VerificationStatusType;
  assignedTimestamp: number;
  lastUpdatedTimestamp: number;
  country?: string;
  invalidReason?: string;
};
export interface IindividaulAccountInfo {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  nationalities: string[];
  address: IAddress;
  documents?: VerificationDocumentType[];
}

export interface IBusiness {
  name: string;
  type: string;
  registrationNumber: string;
  registrationDate: string;
  registeredAddress: IAddress;
  contactEmail: string;
  documents?: VerificationDocumentType[];
}

export enum VerificationAccountEntityEnum {
  Individual = "Individual",
  Business = "Business"
}
export type VerificationAccountEntityType = EnumToPipes<
  VerificationAccountEntityEnum,
  string
>;

export enum VerificationStatusEnum {
  Verified = "Verified",
  Required = "Required",
  PendingVerification = "PendingVerification",
  Pending = "Pending",
  NotRequired = "NotRequired"
}

export enum bankInfoVerificationStatusEnum {
  Valid = "Valid"
}

export type bankInfoVerificationStatusType = EnumToPipes<
  bankInfoVerificationStatusEnum,
  string
>;

export type VerificationStatusType = EnumToPipes<
  VerificationStatusEnum,
  string
>;

export enum VerifyAccountPersonTypeEnum {
  BusinessContact = "BusinessContact",
  Director = "Director",
  UltimateBeneficialOwner = "UltimateBeneficialOwner"
}
export type VerifyAccountPersonTypeType = EnumToPipes<
  VerifyAccountPersonTypeEnum,
  string
>;

export enum VerifyAccountRequiredDocumentsTypeEnum {
  ArticlesOfIncorporation = "ArticlesOfIncorporation",
  BusinessRegistration = "BusinessRegistration",
  OperatingAgreement = "OperatingAgreement",
  Passport = "Passport",
  NationalId = "NationalId",
  DriversLicense = "DriversLicense"
}
export type VerifyAccountRequiredDocumentsTypeType = EnumToPipes<
  VerifyAccountRequiredDocumentsTypeEnum,
  string
>;
export enum VerifyAccountRequiredDocumentsCategoryEnum {
  ProofOfBusiness = "ProofOfBusiness"
}
export type VerifyAccountRequiredDocumentsCategoryType = EnumToPipes<
  VerifyAccountRequiredDocumentsCategoryEnum,
  string
>;

export interface FetchAccountInfoData {
  id: string;
  type: string;
  onboardingFlow: string;
  entityType: VerificationAccountEntityType;
  individual?: IindividaulAccountInfo;
  business?: IBusiness;
  verification: {
    persons?: {
      status: VerificationStatusType;
      required?: {
        role: VerifyAccountPersonTypeType;
        minQuantity?: number;
        quantity?: number;
      }[];
    };
    requiredDocuments?: Array<{
      category: VerifyAccountRequiredDocumentsCategoryType;
      types: VerifyAccountRequiredDocumentsTypeType[];
      quantity: number;
    }>;
    status: VerificationStatusType;
  };
  frozen: boolean;
  metadata: Metadata;
  settings: {
    payouts: {
      schedule: {
        type: string;
      };
    };
  };
  createdTimestamp: number;
}

export interface FetchAccountInfoResponse extends BaseApiResponse {
  data: FetchAccountInfoData;
}

export interface IDocument {
  type?: string[];
  front?: string;
  back?: string;
  country?: string;
}

export interface PaymentSetupAccountSchema {
  pharmacyId?: number;
  accountOf?: "branch" | "pharmacy";
  pharmacyBranchId?: number;
  entityType?: VerificationAccountEntityType;
  email: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  businessName?: string;
  businessType?: string;
  businessRegistrationNumber?: string;
  addressLineOne: string;
  city: string;
  country?: string;
  postalCode: string;
  region?: string;
  // document?: IDocument[];
  //TODO: fix_typescript
  documents?: IDocument;
}

//=======================================================================

export interface Metadata {
  accountOf: PaymentSetupAccountSchema["accountOf"];
  pharmacyId: string;
  pharmacyBranchId: string;
}

export interface Verification {
  status: VerificationStatusType;
}

export interface Address {
  lineOne: string;
  townOrCity: string;
  city?: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface VerifyAccountPersonInfo {
  id: string;
  firstName: string;
  middleNames: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  countryOfBirth: string;
  gender: string;
  nationalities: string[];
  address: Address;
  phoneNumber: string;
  businessRoles: VerifyAccountPersonTypeType[];
  verification: Verification;
  metadata: Metadata;
  createdTimestamp: number;
  lastUpdatedTimestamp: number;
}

//=================================For "/sub-account/update/person"=============================

export interface IupdatePerson {
  firstName: string;
  lastName: string;
  middleNames?: string | undefined;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  businessRoles: string[];
  addressLineOne: string;
  city: string;
  region: string;
  postalCode: string;
  accountId: string;
  personId: string;
}

//=========================================For "/sub-account/add/person"=====================================================

export interface IaddPerson {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  addressLineOne: string;
  city: string;
  region: string;
  postalCode: string;
  pharmacyId?: number | undefined;
  pharmacyBranchId?: number | undefined;
  gender: string;
  businessRoles: string[];
  dateOfBirth: string;
}

//====================================For "/sub-account/list/person"================================================

export interface Ipersonlist {
  accountId: string | undefined;
  order: boolean;
  limit: string;
}

export interface IonlyAccountId {
  accountId?: string;
}
