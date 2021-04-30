provider "google" {
  credentials = file("../verdant-medley-310204-1cfcd6375183.json")
}

// terraform import google_compute_instance.default verdant-medley-310204/us-west1-a/demo-terraform-201318633-sa
resource "google_compute_instance" "default" { }

// terraform import google_compute_firewall.default verdant-medley-310204/demoterraform-node-3000
resource "google_compute_firewall" "default" { }