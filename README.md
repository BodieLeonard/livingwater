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

# URLs
# Main IP
http://192.222.22.22

# Live Reload requires you to run gulp
http://192.222.22.22:35729

# Browser sync requires you to run browser sync
http://192.222.22.22:5000
