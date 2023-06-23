export commit_id=$(git rev-parse --short HEAD)
git tag -a $commit_id -m "major update"
npm version major
declare -x VERSION=$(jq -r '.version' package.json)
git checkout -b release/v$VERSION
git push origin release/v$VERSION --follow-tags