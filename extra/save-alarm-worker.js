var timer = 0;

onmessage = function (message) {
    if (timer !== 0) {
        clearInterval(timer);
        timer = 0;
    }
    if (message.data > 0) {
        timer = setInterval(function () {
            postMessage(null);
        }, message.data);
    }
}
