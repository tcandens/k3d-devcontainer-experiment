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