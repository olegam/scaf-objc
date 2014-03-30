# Scaffolt Objective-C

Scaffolding templates for Objective-C and iOS development based on the [scaffolt npm module](https://github.com/paulmillr/scaffolt).

## Requirements

* [Node.js](http://nodejs.org)
* [scaffolt](https://github.com/paulmillr/scaffolt) (`npm install -g scaffolt`).

## Installation
First make sure you have node and scaffolt install (see above). Then clone this repository (you may want to fork it first) to `~/.scaf-objc/` or a location of your choice.

To avoid passing the location of the generators directory every time you call `scaffolt` you may want to put the following function in your bash profile:

``` bash
scaf () {
	scaffolt $@ -g ~/.scaf-objc/generators
}
```

The templates can use the variables `developer_name` and `company_name`. You configure them by creating the following file:
``` bash
touch ~/.scaf_objc_user.json
```
With something like this:
``` json
{
	"developer_name" : "Ole Gammelgaard Poulsen",
	"company_name" : "SHAPE A/S"
}
```

## Usage
You can generate a ViewController named DemoViewController using
``` bash
scaf ViewController Demo
```
Because the ViewController template shipping with scaf-objc depends on a View and a ViewModel you get those as well.

##

## License
MIT