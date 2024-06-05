import syncFs from 'fs';
import fs from 'fs/promises';
import path from 'path';

const FOLDERS = {
  ROOT: 'cypress',
  BASE: 'base',
  ACTUAL: 'actual',
  SNAPSHOTS: 'snapshots'
};

const cypressSnapshotsPath = path.join(process.cwd(), FOLDERS.ROOT, FOLDERS.SNAPSHOTS);

try {
  console.log('1. Deleting previous snapshots folder');
  await fs.rm(path.join(cypressSnapshotsPath, FOLDERS.BASE), { recursive: true, force: true });
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('Snapshots folder not found');
  } else {
    console.error('Error deleting snapshots folder:', error);
    process.exit(1);
  }
}

try {
  console.log('2. Moving new snapshots to base snapshots folder');
  await fs.rename(path.join(cypressSnapshotsPath, FOLDERS.ACTUAL), path.join(cypressSnapshotsPath, FOLDERS.BASE));
} catch (error) {
  if (error.code === 'ENOENT') {
    console.error('Previous snapshots folder or base snapshot folder was not found');
  } else {
    console.error('Error moving snapshots:', error);
    process.exit(1);
  }
}

console.log('3. Deleting failed snapshots');
deleteFailedSnapshots(path.join(cypressSnapshotsPath, FOLDERS.BASE));

function deleteFailedSnapshots(baseFolder) {
  try {
    syncFs.readdirSync(baseFolder).forEach((file) => {
      const fileFullPath = path.join(baseFolder, file);

      if (syncFs.statSync(fileFullPath).isDirectory()) {
        deleteFailedSnapshots(fileFullPath);
      } else if (file.includes('(failed)')) {
        try {
          console.log('Deleting file: ', fileFullPath);
          syncFs.unlinkSync(fileFullPath);
        } catch (error) {
          console.error(error);
        }
      }
    });
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Folder to delete files was not found');
    } else {
      console.error('Error Deleting files:', error);
      process.exit(1);
    }
  }
}
