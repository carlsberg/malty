/* eslint-disable no-console */

import { execSync } from 'child_process';

const args = process.argv.slice(2);
const componentIdFlag = args.find((argument) => argument.includes('component-id'));
const targetFlag = args.find((argument) => argument.includes('target'));

if (!componentIdFlag) {
  console.warn('Component ID cannot be empty');
  process.exit(1);
}

if (!targetFlag) {
  console.warn('Target cannot be empty');
  process.exit(1);
}

const [, componentId] = componentIdFlag.split('=');
const [, target] = targetFlag.split('=');

try {
  const command = `bit deps remove ${componentId} ${target} && bit deps set ${componentId} ${target} --peer`;
  console.log(`Running: ${command} \n`);

  const stdout = execSync(command);
  console.log(stdout.toString());
} catch (error) {
  console.error('Failed to remove the target component and make it peer dependency', error);
}
