import { models } from '@database/setup.db';
import { hashPassword } from '@utils/hashPassword';

export async function rootSeeders() {
  const { User } = models;
  const rootUserTemp = await User?.findOne({
    where: { username: 'temp-root' },
  });
  if (!rootUserTemp) {
    await User?.create({
      name: 'temp-root',
      email: 'temp-root@temp.com',
      username: 'temp-root',
      password: hashPassword('Temp@root123'),
      rol: 'root',
    });
    console.log('🕵️‍♀️ Root user temporal creado');
  }
}
