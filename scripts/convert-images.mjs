/**
 * convert-images.mjs
 * Batch converts all JPG/JPEG/PNG images in public/images/ to WebP format.
 * Originals are preserved. WebP files are saved alongside the originals.
 *
 * Usage: node scripts/convert-images.mjs
 * Requires: npm install --save-dev sharp
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const INPUT_DIR = join(__dirname, '..', 'public', 'images');

// Quality settings per image type
const WEBP_QUALITY = 82;      // 80-85 is the sweet spot: great quality, small size
const MAX_WIDTH = 1920;       // Resize large images down to max 1920px wide

const CONVERTIBLE = ['.jpg', '.jpeg', '.png'];

async function convertAll() {
  console.log('🚀 VIPDrive Image Optimizer\n');

  const files = await readdir(INPUT_DIR);
  const images = files.filter(f => CONVERTIBLE.includes(extname(f).toLowerCase()));

  let totalSavedBytes = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of images) {
    const inputPath = join(INPUT_DIR, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(INPUT_DIR, outputName);

    // Skip if WebP already exists (avoid reprocessing)
    try {
      await stat(outputPath);
      console.log(`  ⏭  Skipped  ${file} → already converted`);
      skipped++;
      continue;
    } catch {
      // File doesn't exist yet, proceed
    }

    try {
      const inputStat = await stat(inputPath);
      const inputBytes = inputStat.size;

      await sharp(inputPath)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outputPath);

      const outputStat = await stat(outputPath);
      const outputBytes = outputStat.size;
      const savedBytes = inputBytes - outputBytes;
      const savedPct = ((savedBytes / inputBytes) * 100).toFixed(1);

      totalSavedBytes += savedBytes;
      converted++;

      const emoji = savedPct > 70 ? '🔥' : savedPct > 40 ? '✅' : '➡️';
      console.log(
        `  ${emoji} ${file.padEnd(42)} ${(inputBytes / 1024).toFixed(0).padStart(6)} KB  →  ${(outputBytes / 1024).toFixed(0).padStart(6)} KB  (-${savedPct}%)`
      );
    } catch (err) {
      console.error(`  ❌ Error converting ${file}:`, err.message);
    }
  }

  const savedMB = (totalSavedBytes / (1024 * 1024)).toFixed(2);
  console.log('\n' + '─'.repeat(70));
  console.log(`  ✅ Converted : ${converted} images`);
  console.log(`  ⏭  Skipped  : ${skipped} already done`);
  console.log(`  💾 Total saved: ${savedMB} MB`);
  console.log('\n📝 Next step: Update image references in components to use .webp extensions.');
  console.log('   e.g., images/Hero.jpg → images/Hero.webp');
}

convertAll().catch(console.error);
