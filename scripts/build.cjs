const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../manifest.json');

// 读取 manifest.json 文件内容
function main() {
  const json = fs.readFileSync(manifestPath, 'utf8');
  console.log(json);
  // 写到 dist 目录下

  try {
    fs.writeFileSync(path.join(__dirname, '../dist/manifest.json'), json);
  } catch (error) {
    console.error('Error writing manifest to dist directory:', error);
  }
}

main();
