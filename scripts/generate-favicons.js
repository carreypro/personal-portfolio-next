const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const INPUT_IMAGE = path.join(__dirname, '../public/original-favicon.jpg');
const OUTPUT_DIR = path.join(__dirname, '../public');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512
};

async function generateFavicons() {
  // Create a square version of the input image
  const image = sharp(INPUT_IMAGE);
  const metadata = await image.metadata();
  const size = Math.min(metadata.width, metadata.height);
  
  // Extract the center square portion of the image
  const extracted = await image
    .extract({
      left: Math.floor((metadata.width - size) / 2),
      top: Math.floor((metadata.height - size) / 2),
      width: size,
      height: size
    })
    .toBuffer();

  // Generate different sizes
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(extracted)
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(path.join(OUTPUT_DIR, filename));
    console.log(`Generated ${filename}`);
  }

  // Generate ICO file
  await sharp(extracted)
    .resize(32, 32)
    .toFile(path.join(OUTPUT_DIR, 'favicon.ico'));
  console.log('Generated favicon.ico');

  // Generate webmanifest file
  const manifest = {
    name: 'Personal Portfolio',
    short_name: 'Portfolio',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  };

  await fs.writeFile(
    path.join(OUTPUT_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );
  console.log('Generated site.webmanifest');
}

generateFavicons().catch(console.error);
