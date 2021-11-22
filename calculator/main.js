$(".num").click(function() {
    let digit = $(this).text();
    document.getElementById("screen").innerHTML += digit;
})

$(".operator").click(function() {
    let screenContent = document
            .getElementById("screen")
            .innerHTML;
    document.getElementById("buffer").innerHTML = screenContent;
    document.getElementById("screen").innerHTML = "";

    document.getElementById("operBuffer").innerHTML = $(this).text();
})

$("#eqn-bg").click(function() {
    let screenContent = document
            .getElementById("screen")
            .innerHTML;

    let bufferContent = document
            .getElementById("buffer")
            .innerHTML;

    let operBuffer = document
            .getElementById("operBuffer")
            .innerHTML;
    let result = 0;

    switch (operBuffer) {
        case '+':
            result = parseFloat(bufferContent) + parseFloat(screenContent);
            break;
        case '-':
            result = bufferContent - screenContent;
            break;
        case 'x':
            result = bufferContent * screenContent;
            break;
        case '/':
            result = bufferContent / screenContent;
            break;
    }
    console.log(result);

    document.getElementById("screen")
            .innerHTML = result;

    document.getElementById("buffer")
            .innerHTML = "";

    document.getElementById("operBuffer")
            .innerHTML = "";
})

$("#delete").click(function() {
    let screenContent = document
            .getElementById("screen")
            .innerHTML = "";
})