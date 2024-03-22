import fs from 'fs';
import minimist from 'minimist';

const regex = /\{(.*)\.([0-9]*)\}/;

function extractSemanticToken(value) {
  if (!value) {
    return null;
  }

  const tokens = regex.exec(value);

  if (!tokens || tokens.length < 3) {
    return null;
  }

  return {
    color: tokens[1],
    colorLevel: tokens[2]
  };
}

function isValidSemanticToken(value) {
  if (!value) {
    return false;
  }

  return regex.test(value);
}

function formatSemanticColors(primitiveColors, semanticColors) {
  if (!semanticColors || !primitiveColors) {
    return null;
  }

  function resolveRecursive(objBeingAnalyzed, objBeingConstructed = {}) {
    const newObjBeingConstructed = { ...objBeingConstructed };

    Object.keys(objBeingAnalyzed).forEach((key) => {
      const child = objBeingAnalyzed[key];

      if (!child || ((child.value === null || child.value === '') && !isValidSemanticToken(child.value))) {
        newObjBeingConstructed[key] = child === '' ? '' : null;
      } else if (isValidSemanticToken(child.value)) {
        const semanticTokenExtracted = extractSemanticToken(child.value);
        if (!semanticTokenExtracted) return;
        const { color, colorLevel } = semanticTokenExtracted;
        const hexaColor = primitiveColors[color][colorLevel];

        newObjBeingConstructed[key] = hexaColor;
      } else {
        newObjBeingConstructed[key] = resolveRecursive(child, newObjBeingConstructed[key]);
      }
    });

    return newObjBeingConstructed;
  }

  return resolveRecursive(semanticColors);
}

const args = minimist(process.argv.slice(2), {
  alias: {
    'colors-route': 'colorsRoute',
    'semantic-route': 'semanticRoute'
  },
  string: ['colorsRoute', 'semanticRoute']
});

const { colorsRoute, semanticRoute } = args;

if (!colorsRoute) {
  console.error('Please provide the path to the JSON file using --colors-route=');
  process.exit(1);
}

if (!semanticRoute) {
  console.error('Please provide the path to the JSON file using --semantic-route=');
  process.exit(1);
}

fs.readFile(colorsRoute, 'utf8', (errColorsFile, colorsData) => {
  if (errColorsFile) {
    console.error(`Error reading colors file: ${errColorsFile}`);
    process.exit(1);
  }

  fs.readFile(semanticRoute, 'utf8', (errSemanticFile, semanticData) => {
    if (errSemanticFile) {
      console.error(`Error reading semantic file: ${errSemanticFile}`);
      process.exit(1);
    }

    try {
      const primitiveColors = JSON.parse(colorsData);
      const semanticColors = JSON.parse(semanticData);
      const formattedColors = formatSemanticColors(primitiveColors, semanticColors);
      const updatedJSON = JSON.stringify(formattedColors, null, 2);

      fs.writeFile(semanticRoute, updatedJSON, (errWriteSemantic) => {
        if (errWriteSemantic) {
          console.error(`Error writing file: ${errWriteSemantic}`);
          process.exit(1);
        }
        console.log('✨ Semantic colors have been transformed and saved back to the file.');
      });
    } catch (error) {
      console.error(`Error reading and parsing JSON, please make sure to follow Malty schema: ${error}`);
      process.exit(1);
    }
  });
});
