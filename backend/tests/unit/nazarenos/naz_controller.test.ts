import request from 'supertest';

describe('📚 Pruebas para el controlador de Nazareno', () => {
  it('debe crear un nazareno correctamente', async () => {
    const nazarenoData = {
      documentType: 'CC',
      sex: 'M',
      documentNumber: '12345678',
      firstName: 'Juan',
      firstLastName: 'Pérez',
      secondLastName: 'Gómez',
      birthdate: '2000-01-01',
      phoneNumber: '1234567890',
      email: 'juan.perez@example.com',
      address: 'Calle 123',
      country: 'Colombia',
      city: 'Bogotá',
      department: 'Cundinamarca',
      occupation: 'Ingeniero',
    };

    const response = await request(app).post('/nazarenos').send(nazarenoData);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(nazarenoData);
  });

  it('debe devolver un error si el email no es válido', async () => {
    const nazarenoData = {
      documentType: 'CC',
      documentNumber: '12345679',
      firstName: 'Pedro',
      firstLastName: 'López',
      email: 'correo-invalido',
      occupation: 'Doctor',
    };

    const response = await request(app).post('/nazarenos').send(nazarenoData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('debe devolver un error si faltan campos obligatorios', async () => {
    const nazarenoData = {
      documentType: 'CC',
      firstName: 'Juan',
    };

    const response = await request(app).post('/nazarenos').send(nazarenoData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('debe devolver un nazareno por ID correctamente', async () => {
    const response = await request(app).get('/nazarenos/12345678');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('documentNumber', '12345678');
  });

  it('debe actualizar el email y la ocupación de un nazareno correctamente', async () => {
    const updateData = {
      email: 'nuevo.email@example.com',
      occupation: 'Arquitecto',
    };

    const response = await request(app)
      .put('/nazarenos/12345678')
      .send(updateData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('email', 'nuevo.email@example.com');
    expect(response.body).toHaveProperty('occupation', 'Arquitecto');
  });

  it('debe devolver error al actualizar con un email inválido', async () => {
    const updateData = { email: 'correo-invalido' };
    const response = await request(app)
      .put('/nazarenos/12345678')
      .send(updateData);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('debe eliminar un nazareno correctamente', async () => {
    const response = await request(app).delete('/nazarenos/12345678');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
  });

  it('debe devolver error al eliminar un nazareno que no existe', async () => {
    const response = await request(app).delete('/nazarenos/99999999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });

  it('debe devolver una lista de nazarenos filtrada por ciudad', async () => {
    const response = await request(app).get('/nazarenos?city=Bogotá');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  it('debe devolver error si el usuario no está autenticado', async () => {
    const response = await request(app)
      .get('/nazarenos/12345678')
      .set('Authorization', '');
    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty('error');
  });

  it('debe devolver una lista paginada de nazarenos', async () => {
    const response = await request(app).get('/nazarenos?offset=0&limit=10');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.items)).toBeTruthy();
    expect(response.body.items.length).toBeLessThanOrEqual(10);
    expect(response.body).toHaveProperty('totalItems');
    expect(response.body).toHaveProperty('totalPages');
    expect(response.body).toHaveProperty('currentPage');
  });

  it('debe devolver error si los parámetros de paginación no son válidos', async () => {
    const response = await request(app).get('/nazarenos?offset=-1&limit=abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});
