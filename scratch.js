const fs = require('fs');
let header = fs.readFileSync('src/components/Header.tsx', 'utf8');
header = header.replace(/<!--([\s\S]*?)-->/g, '');
fs.writeFileSync('src/components/Header.tsx', header);
