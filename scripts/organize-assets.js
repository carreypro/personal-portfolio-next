const fs = require('fs').promises;
const path = require('path');

const SOURCE_PATHS = {
  logos: [
    { from: '../public/logos/netease.svg', to: '../public/static/images/logos/netease.svg' },
    { from: '../public/logos/sfa.svg', to: '../public/static/images/logos/sfa.svg' }
  ],
  favicons: [
    { from: '../public/favicon.ico', to: '../public/static/favicons/favicon.ico' },
    { from: '../public/android-chrome-192x192.png', to: '../public/static/favicons/android-chrome-192x192.png' },
    { from: '../public/android-chrome-512x512.png', to: '../public/static/favicons/android-chrome-512x512.png' },
    { from: '../public/apple-touch-icon.png', to: '../public/static/favicons/apple-touch-icon.png' },
    { from: '../public/favicon-16x16.png', to: '../public/static/favicons/favicon-16x16.png' },
    { from: '../public/favicon-32x32.png', to: '../public/static/favicons/favicon-32x32.png' }
  ],
  images: [
    { from: '../public/avatar.jpg', to: '../public/static/images/avatar.jpg' }
  ]
};

async function moveFile(fromPath, toPath) {
  try {
    const sourcePath = path.join(__dirname, fromPath);
    const targetPath = path.join(__dirname, toPath);
    
    // 确保目标目录存在
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    
    // 复制文件
    await fs.copyFile(sourcePath, targetPath);
    
    // 删除源文件
    await fs.unlink(sourcePath);
    
    console.log(`✅ 移动成功: ${path.basename(fromPath)} -> ${path.basename(toPath)}`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`⚠️ 文件不存在，跳过: ${fromPath}`);
    } else {
      console.error(`❌ 移动失败: ${fromPath}`, error);
    }
  }
}

async function organizeAssets() {
  console.log('🚀 开始组织资源文件...\n');
  
  // 移动所有资源
  for (const category in SOURCE_PATHS) {
    console.log(`\n📁 处理 ${category}...`);
    for (const { from, to } of SOURCE_PATHS[category]) {
      await moveFile(from, to);
    }
  }
  
  console.log('\n✨ 资源组织完成！');
}

organizeAssets().catch(console.error);
