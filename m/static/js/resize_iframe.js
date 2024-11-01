var article = document.querySelector('.ff-article')
if (article) {
  var ifms = article.getElementsByTagName('iframe')
  if (ifms && ifms.length > 0) {
    for(var i = 0; i < ifms.length; i++) {
      ifms[i].style.height = ifms[i].offsetWidth * 498/640 + 'px'
    }
  }
}
