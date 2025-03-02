export enum ErrorMessage {
  // ⚠️ Server Errors
  SERVER_ERROR = 'Ocurrió un error inesperado en el servidor.',
  DATABASE_ERROR = 'Falló la conexión con la base de datos.',
  ENV_ERROR = 'Ocurrio un error al extraer las variables de entorno',

  // ⚠️ Authentication Errors
  AUTHENTICATION_FAILED = 'Autenticación fallida. Credenciales inválidas.',
  UNAUTHORIZED_ACCESS = 'Acceso no autorizado.',

  // ⚠️ Validation Errors
  INVALID_PARAMETER = 'Valor de parámetro inválido.',
  INVALID_DOCUMENT_TYPE = 'Tipo de documento no válido.',
  INVALID_DOCUMENT_NUMBER = 'Número de documento inválido.',
  DOCUMENT_NUMBER_REQUIRED = 'El número de documento es obligatorio.',
  FIRST_NAME_REQUIRED = 'El primer nombre es obligatorio.',
  INVALID_FIRST_NAME = 'El primer nombre contiene caracteres inválidos.',
  INVALID_MIDDLE_NAME = 'El segundo nombre contiene caracteres inválidos.',
  FIRST_LAST_NAME_REQUIRED = 'El primer apellido es obligatorio.',
  INVALID_FIRST_LAST_NAME = 'El primer apellido contiene caracteres inválidos.',
  INVALID_SECOND_LAST_NAME = 'El segundo apellido contiene caracteres inválidos.',
  INVALID_BIRTHDATE = 'Fecha de nacimiento inválida.',
  BIRTHDATE_REQUIRED = 'La fecha de nacimiento es obligatoria.',
  INVALID_EMAIL = 'Correo electrónico inválido.',
  INVALID_PHONE_NUMBER = 'Número de teléfono inválido.',
  PHONE_NUMBER_REQUIRED = 'El número de teléfono es obligatorio.',
  ADDRESS_REQUIRED = 'La dirección es obligatoria.',
  INVALID_ADDRESS = 'Dirección inválida.',
  INVALID_COUNTRY = 'País inválido.',
  COUNTRY_REQUIRED = 'El país es obligatorio.',
  INVALID_CITY = 'Ciudad inválida.',
  CITY_REQUIRED = 'La ciudad es obligatoria.',
  INVALID_DEPARTMENT = 'Departamento inválido.',
  DEPARTMENT_REQUIRED = 'El departamento es obligatorio.',
  INVALID_STATUS = 'El estado debe ser un valor booleano (activo/inactivo).',
  INVALID_CODE = 'Código inválido.',
  INVALID_SEX = 'Sexo inválido.',
  INVALID_DATE_FORMAT = 'Formato de fecha inválido.',
  INVALID_DATE_RANGE = 'Rango de fechas inválido.',

  // ⚠️ Resource Errors
  NOT_FOUND = 'Recurso no encontrado.',
  ALREADY_EXISTS = 'El recurso ya existe.',
  UNMODIFIABLE_RESOURCE = 'El recurso no puede ser modificado.',

  // ⚠️ Request Errors
  BAD_REQUEST = 'Solicitud incorrecta.',
  METHOD_NOT_ALLOWED = 'Método no permitido.',
  TIMEOUT = 'Tiempo de espera agotado.',

  // ⚠️ Permission Errors
  INSUFFICIENT_PERMISSIONS = 'Permisos insuficientes.',
  ACTION_NOT_ALLOWED = 'Acción no permitida.',
}
