describe('📚 Pruebas para el DTO RequestDTONazareno', () => {
  it('debe ser creado correctamente con datos válidos', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).not.toThrow();
  });

  it('debe lanzar un error si el tipo de documento es inválido', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'XX',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el número de documento está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el nombre está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          '',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el apellido está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          '',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el sexo es inválido', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'X',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si la fecha de nacimiento está en el futuro', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('2099-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el email es inválido', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'correo-invalido',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el número de teléfono está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '',
          'Calle 123',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si la dirección está vacía', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          '',
          'Colombia',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el país está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          '',
          'Bogotá',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si la ciudad está vacía', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          '',
          'Cundinamarca',
        ),
    ).toThrow(AppError);
  });

  it('debe lanzar un error si el departamento está vacío', () => {
    expect(
      () =>
        new RequestDTONazareno(
          'CC',
          'M',
          '12345678',
          'Juan',
          'Carlos',
          'Pérez',
          'Gómez',
          new Date('1993-05-15'),
          'juan@example.com',
          '1234567890',
          'Calle 123',
          'Colombia',
          'Bogotá',
          '',
        ),
    ).toThrow(AppError);
  });
});
