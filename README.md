# Jupyter InlineAttachment Sample

* [Ipython](https://github.com/ipython/ipython)
* [InlineAttachment](https://github.com/Rovak/InlineAttachment)

## 1. Run Ipython using profile_inline 

```
$ git clone https://github.com/nacyot/jupyter-inline-attachment-sample.git
$ cd jupyter-inline-attachment-sample
$ docker run \
  -p 8888:8888 \
  -d \
  -v $(pwd)/profile_inline:/root/.ipython/profile_default \
  nacyot/ipython-python3:3.0.dev
```

This ipython profile created by `ipython profile create inline` command and editing `./static/custom/custom.js`. If you want to refine this profile, edit this file.

## 2. Run simple_uploader

```
$ docker run \
  -d \
  -p 9292:80 \
  -e AWS_ACCESS_KEY=<YOUR_AWS_ACCESS_KEY> \
  -e AWS_SECRET_KEY=<YOUR_AWS_SECRET_KEY> \
  -e AWS_REGION=<YOUR_AWS_REGION> \
  -e AWS_BUCKET=<YOUR_AWS_BUCKET> \
  -e SERVER_PORT=80 \
  -e SERVER_HOST=0.0.0.0 \
  -e REMOTE_HOST=<YOUR_IPYTHON_SERVER_HOST_AND_PORT> \
  nacyot/simple_uploader
```

## 3. Use InlineAttachment(This dosen't work in Firefox.)

Demo

[![Youtube](http://img.youtube.com/vi/zEFQRqelnRo/0.jpg)](http://youtu.be/zEFQRqelnRo)

https://www.youtube.com/watch?v=zEFQRqelnRo
