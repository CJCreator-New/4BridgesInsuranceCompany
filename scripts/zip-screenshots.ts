import { createWriteStream } from 'fs';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function zipScreenshots() {
  const screenshotsDir = join(__dirname, '..', 'public', 'screenshots');
  const outputPath = join(__dirname, '..', 'screenshots.zip');

  const output = createWriteStream(outputPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`✅ Created screenshots.zip (${archive.pointer()} bytes)`);
    console.log(`📁 Location: ${outputPath}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);

  const files = await readdir(screenshotsDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));

  console.log(`📦 Zipping ${pngFiles.length} screenshots...`);

  for (const file of pngFiles) {
    archive.file(join(screenshotsDir, file), { name: file });
  }

  await archive.finalize();
}

zipScreenshots().catch(console.error);
