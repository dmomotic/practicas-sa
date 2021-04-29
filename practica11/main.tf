provider "google" {
  credentials = file("verdant-medley-310204-1cfcd6375183.json")
  project = "verdant-medley-310204"
  region = "us-west1"
}

resource "google_compute_instance" "default" {
  name = "demo-terraform-201318633-sa"
  machine_type = "f1-micro"
  zone = "us-west1-a"

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-1804-lts"
    }
  }

  metadata_startup_script = "sudo apt-get update; curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -; sudo apt install -y nodejs; git clone https://github.com/jatins/express-hello-world.git; cd express-hello-world; npm install; npm run start;"

  network_interface {
    network = "default"
    access_config {
      
    }
  }

  metadata = {
    ssh-keys = "diego:${file("~/.ssh/id_rsa.pub")}"
  }
}

resource "google_compute_firewall" "default" {
  name = "demoterraform-node-3000"
  network = "default"
  allow {
    protocol = "tcp"
    ports = [ "80", "3000" ]
  }
}

output "ip" {
  value = google_compute_instance.default.network_interface.0.access_config.0.nat_ip
}


