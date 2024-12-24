const fs = require('fs').promises;
const path = require('path');

const REQUIRED_ASSETS = [
  'static/favicons/android-chrome-192x192.png',
  'static/favicons/android-chrome-512x512.png',
  'static/favicons/apple-touch-icon.png',
  'static/images/avatar.jpg',
  'static/favicons/favicon-16x16.png',
  'static/favicons/favicon-32x32.png',
  'static/favicons/favicon.ico',
  'static/images/logos/netease.svg',
  'static/images/logos/sfa.svg',
];

async function verifyAsset(assetPath) {
  try {
    const fullPath = path.join(__dirname, '../public', assetPath);
    const stats = await fs.stat(fullPath);
    
    if (stats.size === 0) {
      console.error(`❌ Error: ${assetPath} exists but is empty`);
      return false;
    }
    
    console.log(`✅ Verified: ${assetPath} (${(stats.size / 1024).toFixed(2)} KB)`);
    return true;
  } catch (error) {
    console.error(`❌ Error: ${assetPath} is missing or inaccessible`);
    return false;
  }
}

async function verifyAssets() {
  console.log('🔍 Verifying required assets...\n');
  
  const results = await Promise.all(
    REQUIRED_ASSETS.map(verifyAsset)
  );
  
  const allAssetsValid = results.every(result => result);
  
  if (allAssetsValid) {
    console.log('\n✅ All assets verified successfully!');
    process.exit(0);
  } else {
    console.error('\n❌ Some assets are missing or invalid. Please check the errors above.');
    process.exit(1);
  }
}

verifyAssets().catch(error => {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
});
