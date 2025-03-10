// TODO: UNIFICAR EL USO DE ENUM CON EL TYPO USER ROL PARA FACILITAR AMPLIACIÓN DE ROLES

enum rol {
  ADMIN = 'admin',
  SUPERVISOR = 'supervisor',
  REGISTER = 'register',
  ROOT = 'root',
  CONSULTANT = 'consultant',
}

export type UserRolType = `${rol}`;

export default rol;
