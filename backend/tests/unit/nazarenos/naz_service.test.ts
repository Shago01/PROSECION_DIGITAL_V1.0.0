describe('📚 Pruebas para la capa de servicio de Nazareno', () => {
  let service;

  beforeEach(() => {
    service = new ServiceNazareno();
  });

  it('debe crear un nazareno correctamente', () => {
    const nazarenoData = {
      documentType: 'CC',
      sex: 'M',
      documentNumber: '12345678',
      firstName: 'Juan',
      middleName: 'Carlos',
      firstLastName: 'Pérez',
      secondLastName: 'Gómez',
      birthdate: new Date('2000-01-01'),
      email: 'juan@example.com',
      phoneNumber: '1234567890',
      address: 'Calle 123',
      country: 'Colombia',
      city: 'Bogotá',
      department: 'Cundinamarca',
    };

    const createdNazareno = service.createNazareno(nazarenoData);
    expect(createdNazareno).toMatchObject(nazarenoData);
  });

  it('debe lanzar un error si el documento ya existe', () => {
    const nazarenoData = { documentType: 'CC', documentNumber: '12345678' };
    service.createNazareno(nazarenoData);
    expect(() => service.createNazareno(nazarenoData)).toThrow(AppError);
  });

  it('debe calcular correctamente la edad en base a la fecha de nacimiento', () => {
    const birthdate = new Date('2000-01-01');
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthdate.getFullYear();

    const nazareno = service.createNazareno({ birthdate });
    expect(nazareno.age).toBe(expectedAge);
  });

  it('debe lanzar un error si el documento tiene un formato inválido', () => {
    const invalidNazarenoData = {
      documentType: 'INVALID',
      documentNumber: 'ABC123',
    };
    expect(() => service.createNazareno(invalidNazarenoData)).toThrow(AppError);
  });

  it('debe permitir la creación de un nazareno sin segundo nombre', () => {
    const nazarenoData = {
      documentType: 'CC',
      sex: 'M',
      documentNumber: '87654321',
      firstName: 'Luis',
      firstLastName: 'Martínez',
      secondLastName: 'Gómez',
      birthdate: new Date('1995-05-15'),
      phoneNumber: '0987654321',
      address: 'Avenida Siempre Viva',
      country: 'Ecuador',
      city: 'Quito',
      department: 'Pichincha',
    };

    const createdNazareno = service.createNazareno(nazarenoData);
    expect(createdNazareno.middleName).toBeUndefined();
  });

  it('debe lanzar un error si la edad calculada es negativa', () => {
    const futureBirthdate = new Date('2050-01-01');
    expect(() =>
      service.createNazareno({ birthdate: futureBirthdate }),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si algún campo requerido está ausente', () => {
    const incompleteData = { documentType: 'CC', firstName: 'Juan' };
    expect(() => service.createNazareno(incompleteData)).toThrow(AppError);
  });
});
