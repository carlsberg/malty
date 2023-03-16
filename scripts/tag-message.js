// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

function getTagMessage() {
  const output = execSync('git log --no-merges --pretty=format:"%s" main...HEAD', { encoding: 'utf8' });

  const commits = output
    .split('\n')
    .map((commit) => `- ${commit}`)
    .join('\n');

  const message = `THIS RELEASE INCLUDES:<\n>${commits}`;
}

getTagMessage();
