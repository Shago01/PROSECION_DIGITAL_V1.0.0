import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import { Express } from 'express';

config({ path: './.env.test' });

const DB_USER_TEST = process.env['DB_USER'];
const DB_PASS_TEST = process.env['DB_PASS'];
const DB_HOST_TEST = process.env['DB_HOST'];
const DB_NAME_TEST = process.env['DB_NAME'];

let conn: Sequelize;
let appTest: Express;

// * Se instancia mocks y conneciones generales para las pruebas

async function connectDBTest() {
  if (!(DB_USER_TEST && DB_PASS_TEST && DB_HOST_TEST && DB_NAME_TEST))
    throw new Error('no hay variables de entorno');

  const sequelize = new Sequelize(DB_NAME_TEST, DB_USER_TEST, DB_PASS_TEST, {
    host: DB_HOST_TEST,
    dialect: 'postgres',
  });

  return await sequelize.sync({ force: true });
}

async function starApp() {}

beforeAll(async () => {
  conn = await connectDBTest();
});

afterAll(async () => {
  await conn.close();
});
