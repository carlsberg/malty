const { execSync } = require('child_process');

function hasUnstagedComponents() {
  const output = execSync('bit status -j', { encoding: 'utf8' });
  const status = JSON.parse(output);
  return status.modifiedComponent.length > 0 || status.newComponents.length > 0;
}

// This will stop the .yml process
if (hasUnstagedComponents()) {
  console.error('There are unstaged components. Please tag them and add a proper message for them.');
  process.exit(1);
}
