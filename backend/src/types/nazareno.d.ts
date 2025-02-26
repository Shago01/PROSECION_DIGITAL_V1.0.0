type DocumentType = 'CC' | 'CE' | 'TI';
type Sex = 'M' | 'F';

interface Nazareno {
  documentType: DocumentType;
  sex: Sex;
  documentNumber: string;
  firstName: string;
  middleName?: string;
  firstLastName: string;
  secondLastName: string;
  age: number;
  birthdate: Date;
  email?: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  department: string;
  active: boolean;
  code: string;
  yearsActive: number;
}

type NazarenoCreation = Omit<
  Nazareno,
  'age' | 'code' | 'yearsActive' | 'active'
>;

type ActiveNazareno = Pick<Nazareno, 'active'>;
type NazarenoResponse = Omit<Nazareno, 'birthdate'>;

export {
  ActiveNazareno,
  DocumentType,
  Nazareno,
  NazarenoCreation,
  NazarenoResponse,
  Sex,
};
