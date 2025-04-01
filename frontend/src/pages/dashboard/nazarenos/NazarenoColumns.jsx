export const NazarenoColumns = [
  { selector: row => row.code, id: 'Código', name: 'Código', sortable: true },
  {
    selector: row => row.documentNumber,
    width: '180px',
    id: 'Número Documento',
    name: 'Número Documento',
    sortable: true,
  },
  {
    selector: row => row.documentType,
    id: 'Tipo Documento',
    name: 'Tipo Documento',
    sortable: true,
  },
  { selector: row => row.sex, id: 'Sexo', name: 'Sexo', sortable: true },
  {
    selector: row => row.firstName,
    id: 'Nombre',
    name: 'Nombre',
    sortable: true,
  },
  {
    selector: row => row.middleName,
    id: 'Segundo Nombre',
    name: 'Segundo Nombre',
    sortable: true,
  },
  {
    selector: row => row.firstLastName,
    id: 'Primer Apellido',
    name: 'Primer Apellido',
    sortable: true,
  },
  {
    selector: row => row.secondLastName,
    id: 'Segundo Apellido',
    name: 'Segundo Apellido',
    sortable: true,
  },
  {
    selector: row => row.phoneNumber,
    id: 'Teléfono',
    name: 'Teléfono',
    sortable: true,
  },
  {
    selector: row => row.address,
    width: '200px',
    id: 'Dirección',
    name: 'Dirección',
    sortable: true,
  },
  { selector: row => row.country, id: 'País', name: 'País', sortable: true },
  { selector: row => row.city, id: 'Ciudad', name: 'Ciudad', sortable: true },
  {
    selector: row => row.department,
    id: 'Departamento',
    name: 'Departamento',
    sortable: true,
  },
  {
    selector: row => row.yearsActive,
    id: 'Años Activo',
    name: 'Años Activo',
    sortable: true,
  },
  { selector: row => row.age, id: 'Edad', name: 'Edad', sortable: true },
  {
    selector: row => row.active,
    id: 'Estado',
    name: 'Estado',
    cell: row => (
      <span
        className={`px-3 py-1 rounded-full text-white ${
          row.active ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {row.active ? 'Activo' : 'Inactivo'}
      </span>
    ),
    sortable: true,
  },
];

export const tableCustomStyles = {
  headRow: { style: { backgroundColor: '#f4f4f5', fontWeight: 'bold' } },
};
