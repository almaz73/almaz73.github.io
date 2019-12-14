function init() {
    /* document.body.innerHTML= '<div class="frame"></div>';
    document.body.innerHTML = '<div class="frame" style="top:300px"></div>';
    document.body.innerHTML = '<div class="frame" style="left:300px"></div>';
    document.body.innerHTML = '<div class="frame" style="top:300px; left:300px"></div>'; */

    for (let j = 0; j <= 500; j += 200) {
        for (let i = 100; i < 800; i += 150) {
            document.body.innerHTML += `
            <div 
                class="frame" 
                style="left:`+ i + `px; top: ` + j + `px;" 
                onclick = "message(`+ i + `)"

                >
            </div > `;
        }
    }
}

function message(value){    
    if(value == 100) console.log('Это крайне левый слон')
    if(value == 700) console.log('Это крайне ПРАВЫЙ слон')
}
