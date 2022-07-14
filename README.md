## About

This repository shows an example workflow with VSCode devcontainer and k3s/k3d kubernetes cluster using host Docker runtime.

You'll need to have Docker and VSCode with required extensions.

Check this [Container Development](https://code.visualstudio.com/docs/remote/containers) guide for more details.

## Getting started

Open this repository folder in container. [Instructions](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container)

Then run setup task in [container terminal](https://code.visualstudio.com/docs/remote/containers#_opening-a-terminal).

```bash
chomp setup
```

This will likely take a while as k8s cluster is created and Istio is installed.

Once this is finished you should be able to start program with helper task.

```bash
chomp dev
```

# Apple Silicon Instruction
On M1 Macbooks, you will not be able to install stock Istio operator on your cluster since it is not yet officially supported. Please follow [these instructions](https://github.com/resf/istio).

__Do not use the default provided chomp setup command.__

>> Note: This setup requires port 5000 to be available. OSX recently started running services on that port which you will need to disable. "System Preferences" > "Sharing" > Uncheck "AirPlay Receiver". Double check the port is free by ensure there are no results for `lsof -i TCP:5000`

>> If you are using Docker Desktop, you will need to allow insecure access to the local container registry that was created for the cluster. Check the "Dashboard" > "Preferences" > "Docker Engine" > Then add the "registry.localhost:5000" to the array of "insecure-registries"

From integrated terminal window:
```
ark get istioctl
istioctl operator init --hub=ghcr.io/resf/istio --tag 1.12.8
kubectl apply -f m1-istio.yaml
```