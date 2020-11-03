# BASH SCRIPT TO INSTALL AND DEPLOY SERVER
echo "::STARTING FULL INSTALLATION PROCESS..."
npm run install:env
echo "::ENV AND KEYS ADDED"
npm run install:server
npm run install:client
echo "::DOWNLOAD COMPLETED...INSTALLATION SUCCESSFULL"
echo "::LAUNCHING SERVERS..."
run-p --race start:server start:client
echo "::LAUNCH SERVERS SUCCESFULL"
