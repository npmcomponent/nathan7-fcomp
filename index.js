var apply = Function.prototype.apply
module.exports = fcomp

function fcomp() {
  var fns = arguments
    , len = fns.length
    , fn = function() {
        var val = apply.call(fns[0], null, arguments)
        for (var i = 1; i < len; i++)
          val = fns[i](val)
        return val
      }
  for (var i = 0; i < len; i++)
    fn.displayName = (fn.displayName || '')
      + (i === 0 ? '' : ' · ')
      + fns[i].name
  return fn
}

fcomp.reverse = function() {
  return fcomp.apply(null, [].slice.call(arguments).reverse())
}
