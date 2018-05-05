mkdir nive-multi
cd nive-multi


meteor create nive-multi
cd nive-multi/

git init
heroku create nive-multi --buildpack https://github.com/AdmitHub/meteor-buildpack-horse.git
heroku addons:create mongolab
heroku config:set ROOT_URL="https://nive-multi.herokuapp.com"

cp "/app/tmp/cache/meteor/.meteor/packages/meteor-tool/1.6.1_1/mt-os.linux.x86_64/scripts/admin/launch-meteor" /usr/bin/meteor
meteor npm install --save react react-dom


git add .
git commit -m "initial commit"

meteor remove autopublish insecure blaze-html-templates
meteor add static-html react-meteor-data
npm install && npm i --save react react-dom react-addons-pure-render-mixin

git push heroku master
