# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|


  config.vm.box = "civic2.1"
  config.vm.box_url = "/Users/michael/rails-workspace"

  config.vm.network "forwarded_port", guest: 3000, host: 5523



  # If true, then any SSH connections made will enable agent forwarding.
  # Default value: false
  # config.ssh.forward_agent = true


  config.vm.synced_folder "/Users/michael/rails-workspace/lab-report-container/", "/home/vagrant/lab-report-container"

end
