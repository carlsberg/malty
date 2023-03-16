/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const fs = require('fs');

function generateChangelogFile(url, version, date, commits) {
  // Here I will have to read the changelog for each specific component
  const prevChangelog = fs.existsSync(url) ? fs.readFileSync(url, 'utf-8') : '';
  const newChangelog = `## 1.16.3 - ${date}\n${commits}\n\n${prevChangelog}`;

  fs.writeFileSync(url, newChangelog);
}

function generateChangelog() {
  // TODO: take care of the new ones
  const componentsStatus = execSync('bit status -j', { encoding: 'utf8' });
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = new Date().toLocaleDateString(undefined, dateOptions);
  const output = execSync('git log --no-merges --pretty=format:"%s" main...HEAD', { encoding: 'utf8' });
  const commits = output
    .split('\n')
    .map((commit) => `- ${commit}`)
    .join('\n');
  const currentPath = process.cwd();
  const { modifiedComponent } = JSON.parse(componentsStatus);

  for (const component of modifiedComponent) {
    const [path, version] = component.split('carlsberggroup.malty')[1].split('@');
    const url = `${currentPath}/malty${path}/CHANGELOG.md`;

    generateChangelogFile(url, version, date, commits);
  }
}

// TODO: think about using the same chnagelog mesage to add it on the bit message even though is not customizable

generateChangelog();
