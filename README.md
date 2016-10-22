#Setup
How to setup your environment with gulp dependencies

# Install Vagrant
* `$ wget https://dl.bintray.com/mitchellh/vagrant/vagrant_1.6.3_x86_64.deb`
* `$ sudo dpkg -i vagrant_1.6.3_x86_64.deb`

# Install Virtualbox
Virtualbox.com/wiki/Linux_Downloads
copy command below on web page
* `$ sudo add-apt-repository -y “deb http://download.virtualbox.com/virtualbox/debian trusty contrib"`
Verify with fingerprint
* `$ gpg —with-fingerprint oracle_vbox.asc`
Go back to Linux_Downloads and copy the key fingerprint is:
verify key
* `$ sudo apt-key add oracle_vbox.asc`
* `$ sudo apt-get -y update`
* `$ sudo apt-get -y install virtualbox-4.3 dkms`

# Test Install
vagrant -v
vboxmanage -v

# Run Vagrant
cd into the living water repo
* `$ cd ./livingwater`
* `$ vagrant up --provision`

# Once vagrant is up and provisioned ssh into vagrant
* `$ vagrant ssh`
* `$ cd /vagrant/livingwater/`

# Run gulp
* `$ gulp`

# If you wish to run browser sync open a new terminal tab and make sure you are in the same directory as bs-config.js
* `$ browser-sync start`

# Create .bashrc file to automatically load directory on ssh
* `$ touch .bashrc`
# `$ nano .bashrc`
# `cd /vagrant/livingwater/`
# ctrl x

# URLs
# Main IP
http://192.222.22.22

# Live Reload requires you to run gulp
http://192.222.22.22:35729

# Browser sync requires you to run browser sync
http://192.222.22.22:5000

# Deploy Mobile App
### Dependencies
* Android Studio
* Cordova (See installing Cordova)
* Node 4.x+
* Xcode 8+

###Installing Cordova
In order to build the mobile application you will need to install cordova
globally via npm.
```bash
$ npm install -g cordova
```

###Project Setup
In order to create the platforms directory, use the following command to
prepare the environment:
```bash
$ cordova prepare
```
This command will generate the require cordova project files as defined 
below:

* platforms/ios
* platforms/android
* hooks/
* plugins/

###Building the app
To prepare you application binaries, use the following command:
```bash
cordova build
```

this should generate the binaries in the following directories:
* platforms/ios/build/emulator
* 

