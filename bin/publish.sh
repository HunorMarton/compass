npm run build
git add dist
git commit -m "Update build"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
rmdir dist
