// ********************Cookie Routines **********************

function setCookie (cookieName, cookieValue, expires, path, domain,
secure) {
  document.cookie =
    escape(cookieName) + '=' + escape(cookieValue)
    + (expires ? '; EXPIRES=' + expires.toGMTString() : '')
    + (path ? '; PATH=' + path : '')
    + (domain ? '; DOMAIN=' + domain : '')
    + (secure ? '; SECURE' : '');
}

function getCookie (cookieName) {
  var cookieValue = null;
  var posName = document.cookie.indexOf(escape(cookieName) + '=');
  if (posName != -1) {
    var posValue = posName + (escape(cookieName) + '=').length;
    var endPos = document.cookie.indexOf(';', posValue);
    if (endPos != -1)
      cookieValue = unescape(document.cookie.substring(posValue,
endPos));
    else
      cookieValue = unescape(document.cookie.substring(posValue));
  }
  return cookieValue;
}

// ***************** End of Cookie Routines *****************

var cookiesEnabled = true;
var now = new Date();
var twosecs = new Date(now.getTime() + 1000 * 10)
setCookie('cookieTest','testing 123', twosecs);
var testing = getCookie('cookieTest');
// if(testing == null) {alert("Cookies are disabled on your computer. You need to enable cookies for the web site to work. After clicking 'OK' will be sent to a page giving instructions as to how to enable cookies"); cookiesEnabled = false; this.window.location = "http://www.google.com/cookies.html"}
if (cookiesEnabled) {
// do nothing at this point
	} // if cookies are enabled
