/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const fs = require('fs');

function generateChangelogFile(url, version, date, commits) {
  const prevChangelog = fs.existsSync(url) ? fs.readFileSync(url, 'utf-8') : '';
  const newChangelog = `## ${version} - ${date}\n${commits}\n\n${prevChangelog}`;

  fs.writeFileSync(url, newChangelog);
}

function generateChangelog() {
  const componentsStatus = execSync('bit status -j', { encoding: 'utf8' });
  const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const date = new Date().toLocaleDateString(undefined, dateOptions);
  const output = execSync('git log --no-merges --pretty=format:"%s" main...HEAD', { encoding: 'utf8' });
  const commits = output
    .split('\n')
    .map((commit) => `- ${commit}`)
    .join('\n');
  const currentPath = process.cwd();
  const { modifiedComponent, newComponents } = JSON.parse(componentsStatus);

  for (const component of modifiedComponent) {
    const [path, version] = component.split('carlsberggroup.malty')[1].split('@');
    const url = `${currentPath}/malty${path}/CHANGELOG.md`;
    let newVersion = version.split('.');
    newVersion[2] = parseInt(newVersion[2], 10) + 1;
    newVersion = newVersion.join('.');

    generateChangelogFile(url, newVersion, date, commits);
  }

  for (const component of newComponents) {
    const path = component.name;
    const url = `${currentPath}/malty/${path}/CHANGELOG.md`;
    const newVersion = '0.0.1';
    generateChangelogFile(url, newVersion, date, commits);
  }
}

//  Problem: actually we are going to have the problem of getting the commits
//           because since is merged to main we are doing squash merge and we lose the commit messages
// TODO: generate global CHANGELOG
// TODO: think about using the same changelog mesage to add it on the bit message even though is not customizable

generateChangelog();
