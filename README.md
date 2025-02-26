# OpenBlink WebIDE

_Make embedded systems development accessible to everyone._

## What is OpenBlink WebIDE

- Web browser-based developing environment. (Uses WebBluetooth, WebAssembly and JavaScript.)
- Provide "Thinking Speed Prototyping" not only to embedded software engineers, but to anyone who wants to try out ideas quickly, easily, and on real devices. (Without special equipment.)
- Provide "DIY-able value" where end users can run the programs they create on their own devices. (We call it "Build & Blink".)

## How to Use OpenBlink WebIDE (Cloud)

1. Access the WebIDE
   Open your favorite browser, such as Google Chrome or Microsoft Edge, and navigate to:
   [https://openblink.org/](https://openblink.org/)

## How to Use OpenBlink WebIDE (Local)

1. Start the Web Server

```console
$ cd public_html
public_html $ python3 -m http.server 8000
```

2. Access the WebIDE
   Open your favorite browser, such as Google Chrome or Microsoft Edge, and navigate to:
   [http://localhost:8000/](http://localhost:8000/)

## How to Build OpenBlink WebIDE

Follow the steps below to clone the repository and initialize its submodules:

1. Clone the Repository and Initialize Submodules

```console
$ git clone https://github.com/OpenBlink/webide.git
$ git submodule init
$ git submodule update
```

2. Install and Activate Emscripten in the `emsdk` Directory

```console
$ cd emsdk
emsdk $ ./emsdk install 4.0.2
emsdk $ ./emsdk activate 4.0.2
```

3. Build mruby in the `mruby` Directory

```console
$ cd ../mruby
mruby $ make
mruby $ rake MRUBY_CONFIG=../emscripten.rb
```
