const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let dateStr;
try {
  // Get last commit date formatted as "MM-DD-YYYY" (e.g., "06-29-2026")
  dateStr = execSync('git log -1 --format=%cd --date=format:"%m-%d-%Y"')
    .toString()
    .trim();
} catch (e) {
  console.warn("Could not get git log, falling back to current date.");
  const date = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  dateStr = `${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${date.getFullYear()}`;
}

const dir = path.join(__dirname, '../src/generated');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(
  path.join(dir, 'last-updated.json'),
  JSON.stringify({ date: dateStr }, null, 2)
);
console.log(`Last updated date written: ${dateStr}`);
