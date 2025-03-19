import type {
  DocumentType,
  NazarenoCreation,
  ResNazareno,
  Sex,
} from '@contracts/nazareno';
import AppError from '@erros/appError';
import { ErrorMessage } from '@erros/enum/error.message';
import generateCode from '@utils/generateCode';

export class NazarenoRequest implements NazarenoCreation {
  code: string;
  documentType!: DocumentType;
  sex!: Sex;
  documentNumber!: string;
  firstName!: string;
  middleName?: string | undefined;
  firstLastName!: string;
  secondLastName!: string;
  birthdate!: string;
  email?: string | undefined;
  phoneNumber!: string;
  address!: string;
  country!: string;
  city!: string;
  department!: string;
  errors: any[] | undefined = undefined;

  constructor({
    documentType,
    sex,
    documentNumber,
    firstName,
    middleName,
    firstLastName,
    secondLastName,
    birthdate,
    email,
    phoneNumber,
    address,
    country,
    city,
    department,
  }: NazarenoCreation) {
    this.validateData({
      documentType,
      sex,
      documentNumber,
      firstName,
      middleName,
      firstLastName,
      secondLastName,
      birthdate,
      email,
      phoneNumber,
      address,
      country,
      city,
      department,
    });
    this.code = generateCode();

    // Asignar valores a las propiedades
    this.documentType = documentType;
    this.sex = sex;
    this.documentNumber = documentNumber;
    this.firstName = firstName;
    this.middleName = middleName;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.birthdate = birthdate;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.country = country;
    this.city = city;
    this.department = department;

    if (!this.errors) delete this.errors;
  }

  validateData(data: NazarenoCreation) {
    const validators: Record<string, (value: any) => void> = {
      documentType: this.validateDocumentType,
      sex: this.validateSex,
      documentNumber: this.validateDocumentNumber,
      firstName: this.validateFirstName,
      middleName: this.validateMiddleName,
      firstLastName: this.validateFirstLastName,
      secondLastName: this.validateSecondLastName,
      birthdate: this.validateBirthdate,
      email: this.validateEmail,
      phoneNumber: this.validatePhoneNumber,
      address: this.validateAddress,
      country: this.validateCountry,
      city: this.validateCity,
      department: this.validateDepartment,
    };

    Object.entries(validators).forEach(([key, validator]) => {
      const value = data[key as keyof NazarenoCreation];
      if (value !== undefined) validator.call(this, value);
    });

    if (this.errors && this.errors.length != 0)
      throw new AppError(ErrorMessage.BAD_REQUEST, 400, this.errors);
  }

  addError(msg: string) {
    if (!this.errors) this.errors = [];
    this.errors.push({ msg });
  }

  validateDocumentType(value: DocumentType) {
    if (!/^(CC|CE|TI)$/.test(value))
      this.addError(ErrorMessage.INVALID_DOCUMENT_TYPE);
  }

  validateSex(value: Sex) {
    if (!/^(M|F)$/.test(value)) this.addError(ErrorMessage.INVALID_SEX);
  }

  validateDocumentNumber(value: string) {
    if (!/^\d{8,10}$/.test(value))
      this.addError(ErrorMessage.INVALID_DOCUMENT_NUMBER);
  }

  validateStringOnlyLetters(value: string): boolean {
    if (!/^[a-zA-Z]+$/.test(value)) return false;
    return true;
  }

  validateFirstName(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_FIRST_NAME);
  }

  validateMiddleName(value: string) {
    if (!value) return;
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_MIDDLE_NAME);
  }

  validateFirstLastName(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_FIRST_LAST_NAME);
  }

  validateSecondLastName(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_SECOND_LAST_NAME);
  }

  validateAddress(value: string) {
    if (!/^[a-zA-Z0-9\s.,\-#\/]+$/.test(value))
      this.addError(ErrorMessage.INVALID_ADDRESS);
  }
  validateCountry(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_COUNTRY);
  }
  validateCity(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_CITY);
  }
  validateDepartment(value: string) {
    if (!this.validateStringOnlyLetters(value))
      this.addError(ErrorMessage.INVALID_DEPARTMENT);
  }

  validateBirthdate(value: Date) {
    const birthYear = new Date(value).getFullYear();
    const currentYear = new Date().getFullYear();

    if (!birthYear) this.addError(ErrorMessage.INVALID_BIRTHDATE);
    if (birthYear >= currentYear) this.addError(ErrorMessage.INVALID_BIRTHDATE);
  }

  validateEmail(value: string) {
    if (!value) return;
    if (!/^\S+@\S+\.\S+$/.test(value))
      this.addError(ErrorMessage.INVALID_EMAIL);
  }

  validatePhoneNumber(value: string) {
    if (!/^\d{10}$/.test(value))
      this.addError(ErrorMessage.INVALID_PHONE_NUMBER);
  }
}

export class NazarenoResponse implements ResNazareno {
  age!: number;
  code!: string;
  yearsActive!: number;
  active!: boolean;
  documentType!: DocumentType;
  sex!: Sex;
  documentNumber!: string;
  firstName!: string;
  middleName!: string | undefined;
  firstLastName!: string;
  secondLastName!: string;
  email?: string | undefined;
  phoneNumber!: string;
  address!: string;
  country!: string;
  city!: string;
  department!: string;
  birthdate?: string;

  constructor(data: ResNazareno) {
    Object.assign(this, data);
    this.age = this.getAge();
    delete this.birthdate;
  }

  getAge(): number {
    if (!this.birthdate) throw new AppError(ErrorMessage.SERVER_ERROR, 500);
    const currentDate = new Date();
    const birthdate = new Date(this.birthdate);

    if (
      currentDate.getMonth() < birthdate.getMonth() ||
      (currentDate.getMonth() === birthdate.getMonth() &&
        currentDate.getDay() < birthdate.getDay())
    )
      return currentDate.getFullYear() - birthdate.getFullYear() - 1;
    return currentDate.getFullYear() - birthdate.getFullYear();
  }
}
