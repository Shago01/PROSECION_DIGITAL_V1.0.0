import { Model } from 'sequelize';

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
  birthdate: string;
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

interface NazarenoModel extends Model<Nazareno>, Nazareno {}

type NazarenoCreation = Omit<
  Nazareno,
  'age' | 'code' | 'yearsActive' | 'active'
>;

type ActiveNazareno = Pick<Nazareno, 'active'>;
type NazarenoResponse = Omit<Nazareno, 'birthdate'>;
type CodeNazareno = Pick<Nazareno, 'code'>;
type DocumenNumber = Pick<Nazareno, 'documentNumber'>;
type ResNazareno = Omit<Nazareno, 'birthdate'>;

export {
  ActiveNazareno,
  CodeNazareno,
  DocumentType,
  Nazareno,
  NazarenoCreation,
  NazarenoModel,
  NazarenoResponse,
  ResNazareno,
  Sex,
};
