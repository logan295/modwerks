import { copyFileSync, cpSync, mkdirSync, rmSync } from 'node:fs';

const output = 'public';

rmSync(output, { recursive: true, force: true });
mkdirSync(output);

for (const file of ['index.html', 'our-shop.html', 'styles.css', 'script.js', 'intake.js', 'map.js']) {
  copyFileSync(file, `${output}/${file}`);
}

for (const directory of ['assets', 'services']) {
  cpSync(directory, `${output}/${directory}`, { recursive: true });
}
