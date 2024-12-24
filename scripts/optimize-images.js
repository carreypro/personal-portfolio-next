const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const QUALITY = {
  jpeg: 75,
  webp: 70,
  png: 70,
};

async function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const filename = path.basename(inputPath, ext);
  const dir = path.dirname(inputPath);

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const stats = await fs.stat(inputPath);

    // 总是进行优化
    if (['.jpg', '.jpeg'].includes(ext)) {
      await image
        .jpeg({ quality: QUALITY.jpeg, mozjpeg: true })
        .toFile(path.join(dir, `${filename}-optimized${ext}`));
    } else if (ext === '.png') {
      await image
        .png({ quality: QUALITY.png, compressionLevel: 9, palette: true })
        .toFile(path.join(dir, `${filename}-optimized${ext}`));
    }

    // WebP 版本（如果不是图标）
    if (!filename.includes('favicon') && !filename.includes('icon')) {
      await image
        .webp({ quality: QUALITY.webp, effort: 6 })
        .toFile(path.join(dir, `${filename}.webp`));
    }

    // 如果生成的优化版本更小，替换原文件
    const optimizedPath = path.join(dir, `${filename}-optimized${ext}`);
    const optimizedStats = await fs.stat(optimizedPath);
    if (optimizedStats.size < stats.size) {
      await fs.rename(optimizedPath, inputPath);
      console.log(`Optimized: ${path.relative(PUBLIC_DIR, inputPath)}`);
      console.log(`  Original size: ${(stats.size / 1024).toFixed(2)}KB`);
      console.log(`  New size: ${(optimizedStats.size / 1024).toFixed(2)}KB`);
    } else {
      await fs.unlink(optimizedPath);
    }
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile()) {
      await optimizeImage(fullPath);
    }
  }
}

// 开始优化
processDirectory(PUBLIC_DIR)
  .then(() => console.log('Image optimization complete!'))
  .catch(console.error);
