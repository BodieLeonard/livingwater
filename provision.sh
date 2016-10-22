apt-get -y update
apt-get -y install apache2
apt-get -y install curl
apt-get -y install nodejs
apt-get -y install npm
apt-get -y install build-essential
apt-get -y install ruby-full rubygems
apt-get -y install zlib1g-dev 
apt-get -y install libssl-dev 
apt-get -y install libreadline6-dev 
apt-get -y install libyaml-dev
apt-get -y install git

apt-get install apt-transport-https ca-certificates
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-engine
service docker start

cd /tmp
wget http://cache.ruby-lang.org/pub/ruby/2.0/ruby-2.0.0-p481.tar.gz
tar -xvzf ruby-2.0.0-p481.tar.gz
cd ruby-2.0.0-p481/
./configure --prefix=/usr/local
make
make install

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
apt-get install -y nodejs

gem install sass

npm install -g angular
npm install -g bower
npm install -g nodemon
npm install -g yo
npm install -g jshint
npm install -g rcloader
npm install -g gulp-jshint
npm install -g gulp-browserify
npm install -g gulp-embedlr
npm install -g tiny-lr  
npm install -g express
npm install -g gulp
npm install -g browserify 
npm install -g gulp-clean
npm install -g gulp-concat
npm install -g gulp-util
npm install -g gulp-livereload
npm install -g connect-livereload
npm install -g gulp-sass
npm install -g gulp-autoprefixer
npm install -g gulp-rimraf
npm install -g connect 
npm install -g opn 
npm install -g vinyl-fs 
npm install -g serve-static
npm install -g browser-sync



rm -rf /var/www
ln -s /vagrant/livingwater/dist /var/www


touch .bashrc
# nano .bashrc
# cd /vagrant/livingwater/
# ctrl x

service apache2 start




