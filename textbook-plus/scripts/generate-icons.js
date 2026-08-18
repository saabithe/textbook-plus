const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgBuffer = fs.readFileSync(path.join(__dirname, '..', 'public', 'icon.svg'));

const sizes = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32, name: 'favicon-32.png' },
  { size: 16, name: 'favicon-16.png' },
];

async function generate() {
  for (const { size, name } of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '..', 'public', name));
    console.log(`Generated ${name} (${size}x${size})`);
  }
}

generate().catch(console.error);
