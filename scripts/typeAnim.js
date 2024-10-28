const text = '<h1>Bonjour,</h1>\n' +
    '            <h3>Je suis <div class="gradient">Benjamin Roget</div></h3>\n' +
    '            <h5>étudiant en Informatique</h5>';


function typeWriter() {
    var container = document.getElementById('pres');
    var i = 0;
    var speed = 50;
    container.innerHTML = '';
    var tmp = "";
    var isTag = false;

    function typeCharacter() {
        if (i < text.length) {
        if (text.charAt(i) === '<') {
            isTag = true;
        } else if (text.charAt(i) === '>') {
            isTag = false;
        }

            tmp += text.charAt(i);
            container.innerHTML = tmp + "<span class='blinker'>&#32;</span>";

            if (!isTag) {
                i++;
                setTimeout(typeCharacter, speed);
        } else {
                i++;
                typeCharacter();
                }
        }
    }

    typeCharacter();
}

typeWriter();