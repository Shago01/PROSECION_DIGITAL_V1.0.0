import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const readFiles = (pathPartial: string): [string, string[]] => {
  const pathResolve = path.resolve(__dirname, '..', pathPartial);
  return [pathResolve, fs.readdirSync(pathResolve)];
};

const loadDynamicModules = async (pathPartial: string, obj: any) => {
  try {
    const [pathResolve, listFiles] = readFiles(pathPartial);
    for (const file of listFiles) {
      const modulePath = pathToFileURL(path.resolve(pathResolve, file)).href;
      const importedModule = await import(modulePath);

      if (typeof importedModule.default === 'function') {
        importedModule.default(obj);
      }
    }
  } catch (error: any) {
    console.error(`❌:`, error.message);
  }
};

export default loadDynamicModules;
