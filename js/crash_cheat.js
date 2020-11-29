var OriginTitle = document.title
var titleTime
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    document.title = 'Page crashed!!!'
    clearTimeout(titleTime)
  } else {
    document.title = 'Bazinga!!!'
    titleTime = setTimeout(function() {
      document.title = OriginTitle
    }, 2000)
  }
})