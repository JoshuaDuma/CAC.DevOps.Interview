terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}


data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  owners = ["099720109477"] # Canonical
}

resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.medium"

  monitoring = true

  tags = {
    Name = "CAC_DevOps_Interview"
  }

  user_data = <<-EOL
    #!/bin/bash
    set -ex
    sudo apt update
    sudo apt install -y docker.io
    sudo service docker start
    sudo curl -L https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    git clone https://github.com/JoshuaDuma/CAC.DevOps.Interview.git
<<<<<<< HEAD
    cd CAC.DevOps.Interview/docker_nodejs
    sudo docker-compose up --build
=======
    cd load_balanced_nodejs_app/app
    docker build -t app .
>>>>>>> b1dd53eee03e0f27aa08c6521922c4c22e2c20b4
  EOL
}