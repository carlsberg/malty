// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

function hasUnstagedComponents() {
  const output = execSync('bit status -j', { encoding: 'utf8' });
  const { modifiedComponent, newComponents } = JSON.parse(output);
  const hasUnstagedModifiedComponents = modifiedComponent.length > 0;
  const hasUnstagedNewComponents = newComponents.length > 0;
  const unstagedComponents = hasUnstagedModifiedComponents || hasUnstagedNewComponents;

  if (unstagedComponents) {
    console.error('Error: There are unstaged components. Please tag them and add a proper message for each of them.');
    if (hasUnstagedModifiedComponents) {
      console.error(`Modified components:\n - ${modifiedComponent.join('\n - ')}`);
    }
    if (hasUnstagedNewComponents) {
      console.error(`New components:\n - ${newComponents.join('\n - ')}`);
    }
    process.exit(1);
  } else {
    console.log('All components are staged');
  }
}

hasUnstagedComponents();
