Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "livingwater"

  config.vm.provision "shell", path: "provision.sh"

  config.vm.network "private_network", ip: "192.222.22.22"
  config.vm.network "forwarded_port", guest: 3001, host: 3001, id: "browsersync", auto_correct: true
  config.vm.network "forwarded_port", guest: 35729, host: 35729, id: "livereload", auto_correct: true
  config.vm.network "forwarded_port", guest: 80, host: 5000, id: "livereload", auto_correct: true
  
end
