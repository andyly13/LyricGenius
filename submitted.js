
let serverUrl = "https://dc3b-169-234-9-128.ngrok.io/"
function load() {
    const urlParams = new URLSearchParams(window.location.search);
    const count = urlParams.get('count');
    const total = urlParams.get('total');
    document.getElementById('correct').innerHTML = count;
    document.getElementById('totalNum').innerHTML = total;
    document.getElementById('percentage').innerHTML = (100*count)/total;
}
