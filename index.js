var apply = Function.prototype.apply
module.exports = function fcomp() {
  var fns = arguments
    , len = fns.length
    , fn = function() {
        var val = apply.call(fns[0], null, arguments)
        for (var i = 1; i < len; i++)
          val = fns[i](val)
        return val
      }
  fn.displayName = '' + (fns[0].displayName || fns[0].name)
  for (var i = 1; i < len; i++)
    fn.displayName += ',' + (fns[i].displayName || fns[i].name)
  return fn
}
