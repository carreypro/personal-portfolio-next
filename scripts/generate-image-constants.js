const fs = require('fs').promises;
const path = require('path');

// 需要处理的图片列表
const IMAGES_TO_PROCESS = [
  {
    path: 'logos/netease.svg',
    name: 'NETEASE_LOGO'
  },
  {
    path: 'logos/sfa.svg',
    name: 'SFA_LOGO'
  },
  {
    path: 'favicon.ico',
    name: 'FAVICON'
  },
  {
    path: 'avatar.jpg',
    name: 'AVATAR'
  }
];

async function readFileAsBase64(filePath) {
  try {
    const fullPath = path.join(__dirname, '../public', filePath);
    const buffer = await fs.readFile(fullPath);
    const base64 = buffer.toString('base64');
    const extension = path.extname(filePath).toLowerCase();
    
    // 根据文件扩展名确定 MIME 类型
    let mimeType;
    switch (extension) {
      case '.svg':
        mimeType = 'image/svg+xml';
        break;
      case '.ico':
        mimeType = 'image/x-icon';
        break;
      case '.jpg':
      case '.jpeg':
        mimeType = 'image/jpeg';
        break;
      case '.png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/octet-stream';
    }
    
    return `data:${mimeType};base64,${base64}`;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return null;
  }
}

async function generateConstants() {
  try {
    console.log('开始生成图片常量...');
    
    let output = `// 这个文件是自动生成的，请不要手动修改
// 生成时间: ${new Date().toISOString()}

`;

    for (const image of IMAGES_TO_PROCESS) {
      const base64Data = await readFileAsBase64(image.path);
      if (base64Data) {
        output += `export const ${image.name} = '${base64Data}';\n\n`;
        console.log(`✅ 已处理: ${image.path}`);
      } else {
        console.error(`❌ 处理失败: ${image.path}`);
      }
    }

    // 写入生成的常量文件
    const outputPath = path.join(__dirname, '../src/constants/images.ts');
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, output);
    
    console.log('✨ 常量生成完成！');
  } catch (error) {
    console.error('生成常量时发生错误:', error);
    process.exit(1);
  }
}

generateConstants();
