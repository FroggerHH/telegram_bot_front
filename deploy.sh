echo "Switching to master branch"
git checkout master

echo "Pulling latest changes"
git pull

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* bob@5.35.9.71:/var/www/5.35.9.71/

echo "Done!"