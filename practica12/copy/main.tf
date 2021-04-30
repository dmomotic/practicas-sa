provider "google" {
  credentials = file("../verdant-medley-310204-1cfcd6375183.json")
  project = "verdant-medley-310204"
  region = "us-west1"
}

resource "random_id" "instance_id" {
  byte_length = 8
}