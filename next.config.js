const fs = require('fs');
const path = require('path');

module.exports = {
  generateBuildId: () => {
    // use timestamp as build id
    const buildId = Date.now().toString();
    const buildFile = path.join(__dirname, 'public', 'build.json');
    fs.mkdirSync(path.dirname(buildFile), { recursive: true });
    fs.writeFileSync(buildFile, JSON.stringify({ buildId }));
    return buildId;
  },
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
};
