NPM_CONFIG_PRODUCTION=false
NODE_MODULES_CACHE=false
echo "::CHECK AUDITS"
npm audit
npm install --prefix client
echo "::CHECK CLIENT AUDITS"
npm audit --prefix client
npm run build --prefix client
