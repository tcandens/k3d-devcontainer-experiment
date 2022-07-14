# Notes

Create the cluster with local container registry.
```
k3d cluster create -c k3d.config.yml
```

Then you must install Istio.

```
ark install istio
```

Then make sure the default namespace has Istio injection enabled

```
kubectl label namespace default istio-injection=enabled
```

To start you must specify the skaffold default repo to match the one created by `k3d`.

```
skaffold dev --default-repo registry.localhost:5000
```


