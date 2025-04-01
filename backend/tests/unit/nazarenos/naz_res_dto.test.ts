describe('📚 Pruebas para el DTO ResponseDTONazareno', () => {
  it('debe crear un objeto ResponseDTONazareno correctamente', () => {
    const response = new ResponseDTONazareno(
      'CC',
      'M',
      '12345678',
      'Juan',
      'Carlos',
      'Pérez',
      'Gómez',
      new Date('2000-01-01'),
      'juan@example.com',
      '1234567890',
      'Calle 123',
      'Colombia',
      'Bogotá',
      'Cundinamarca',
      true,
      'NAZ123',
      5,
    );
    expect(response).toHaveProperty('code');
  });

  it('debe contener todas las propiedades correctamente formateadas', () => {
    const response = new ResponseDTONazareno(
      'CC',
      'M',
      '12345678',
      'Juan',
      'Carlos',
      'Pérez',
      'Gómez',
      new Date('2000-01-01'),
      'juan@example.com',
      '1234567890',
      'Calle 123',
      'Colombia',
      'Bogotá',
      'Cundinamarca',
      true,
      'NAZ123',
      5,
    );
    expect(response).toMatchObject({
      documentType: 'CC',
      sex: 'M',
      documentNumber: '12345678',
      firstName: 'Juan',
      middleName: 'Carlos',
      firstLastName: 'Pérez',
      secondLastName: 'Gómez',
      email: 'juan@example.com',
      phoneNumber: '1234567890',
      address: 'Calle 123',
      country: 'Colombia',
      city: 'Bogotá',
      department: 'Cundinamarca',
      active: true,
      code: 'NAZ123',
      yearsActive: 5,
    });
  });

  it('debe calcular correctamente la edad en base a la fecha de nacimiento', () => {
    const birthdate = new Date('2000-01-01');
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - birthdate.getFullYear();

    const response = new ResponseDTONazareno(
      'CC',
      'M',
      '12345678',
      'Juan',
      'Carlos',
      'Pérez',
      'Gómez',
      birthdate,
      'juan@example.com',
      '1234567890',
      'Calle 123',
      'Colombia',
      'Bogotá',
      'Cundinamarca',
      true,
      'NAZ123',
      5,
    );
    expect(response.age).toBe(expectedAge);
  });
});
