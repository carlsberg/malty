import fs from 'fs';
import minimist from 'minimist';

function formatPrimitiveColors(colorsJSON) {
  function recursive(colors) {
    const newColors = { ...colors };

    Object.keys(newColors).forEach((colorKey) => {
      if (newColors[colorKey].value) {
        newColors[colorKey] = newColors[colorKey].value;
      } else {
        newColors[colorKey] = recursive(newColors[colorKey]);
      }
    });

    return newColors;
  }

  return recursive(colorsJSON);
}

const args = minimist(process.argv.slice(2), {
  alias: {
    'colors-route': 'colorsRoute'
  },
  string: ['colorsRoute']
});

const fileName = args.colorsRoute;

if (!fileName) {
  console.error('Please provide the path to the JSON file using --colors-route=');
  process.exit(1);
}

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  try {
    const colorsJSON = JSON.parse(data);
    const formattedColors = formatPrimitiveColors(colorsJSON);
    const updatedJSON = JSON.stringify(formattedColors, null, 2);

    fs.writeFile(fileName, updatedJSON, (errWrite) => {
      if (errWrite) {
        console.error(`Error writing file: ${errWrite}`);
        process.exit(1);
      }
      console.log('✨ Your primitive colors have been transformed and saved back to the file.');
    });
  } catch (error) {
    console.error(`Error reading and parsing JSON, please make sure to follow Malty schema: ${error}`);
    process.exit(1);
  }
});
