const fs = require('fs');
const p = 'D:/codex/小豆万象/CherryHQ-cherry-studio/cherry-studio-1.9.9/scripts/before-pack.js';
let s = fs.readFileSync(p, 'utf8');
if (s.includes('Skipping rtk binary download for')) {
  console.log('ALREADY_PATCHED');
  process.exit(0);
}
const target = [
  '  // Download rtk binary for the target platform',
  '  try {',
  '    console.log(`Downloading rtk binary for ${platform}-${arch}...`)',
  '    execSync(`node "${path.join(__dirname, \'download-rtk-binaries.js\')}" ${platform} ${arch}`, { stdio: \'inherit\' })',
  '  } catch (error) {',
  '    console.warn(`Warning: rtk binary download failed (non-fatal): ${error.message}`)',
  '  }'
].join('\n');
const replacement = [
  '  // Download rtk binary for the target platform',
  '  // SKIP_RTK_DOWNLOAD: temporarily disabled for local offline build',
  '  console.log(`Skipping rtk binary download for ${platform}-${arch} (disabled for local build)`)'
].join('\n');
if (!s.includes(target)) {
  console.error('TARGET_BLOCK_NOT_FOUND');
  process.exit(1);
}
s = s.replace(target, replacement);
fs.writeFileSync(p.replace('patch-before-pack.cjs', 'scripts/before-pack.js'), s);
console.log('PATCHED');
console.log(fs.readFileSync(p.replace('patch-before-pack.cjs', 'scripts/before-pack.js'), 'utf8').slice(0, 500));