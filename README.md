# Notes

Just set `network_mode: "host"` in the devcontainer service!

To push Docker images to the cluster registry, tag the image with `umbrella-registry` and add `127.0.0.1  umbrella-registry` to your `/etc/hosts` file.