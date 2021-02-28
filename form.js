document.getElementById('post_submit').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var payload = {inputEmail:null, inputMessage:null};
    payload.inputEmail = document.getElementById('inputEmail').value;
    payload.inputMessage = document.getElementById('inputeMessage').value;
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(payload));
    event.preventDefault();
  });