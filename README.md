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

## Apple Silicon Instruction
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

## Rancher Desktop

1. Stop Docker for Desktop or any other Docker engine that may be running
2. Install [Rancher Desktop](https://docs.rancherdesktop.io/getting-started/installation).
3. Start Rancher Desktop.
   1. Ensure the `dockerd (moby)` driver is used.
   2. Allow `Automatic` PATH configuration
   3. Allow `sudo` access
4. Once Rancher Desktop has started, go to `Kubernetes Settings`
   1. Ensure `Enable Kubernetes` is checked
   2. Uncheck or disable `Enable Traefik`
   3. Allow 8GB of Memory
   4. Allow 4 CPU
   5. Then hit `Reset Kubernetes` for changes to take
5. Ensure k8s cluster is running with `kubectl get pods -A` and `kubectl config current-context` should equal `rancher-desktop`
6. Open or rebuild this projects VSCode devcontainer so that .kube folder can mount
7. Try running same commands from step #5 inside devcontainer integrated terminal.
8. In integrated terminal, run `task setup` OR open the `./bin/task` file and follow along with steps laid out in `setup` function.
9. Installation of Istio could take a while to stabilize, if necessary monitor rollout in the provided `k9s` cli within the integrated terminal.
10. If all looks green, try running `task dev` OR just `task` OR the verbose `skaffold dev`