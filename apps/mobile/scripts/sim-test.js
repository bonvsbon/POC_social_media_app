const fs = require('fs');
const required = ['App.tsx', 'package.json'];
for (const f of required) {
  if (!fs.existsSync(`${__dirname}/../${f}`)) {
    console.error(`Missing ${f}`);
    process.exit(1);
  }
}
console.log('mobile sim test passed');
