*This repository is a mirror of the [component](http://component.io) module [nathan7/fcomp](http://github.com/nathan7/fcomp). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/nathan7-fcomp`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# fcomp

  function composition

## Installation

    $ npm install fcomp

  or

    $ component install nathan7/fcomp

## API

### fcomp(a, b, ..) -> Function (a, b, ..)

  Composes the given functions. The return value of each function is passed to the next.
  All the arguments are passed to the first function.

### fcomp.reverse(...fns)

  Equivalent to `fcomp(...fns.reverse())`

## License

  MIT
