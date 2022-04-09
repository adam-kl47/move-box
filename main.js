
let divX = 150;
let divY = 50;

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const div = document.createElement('div');
    document.body.appendChild(div)

    div.style.left = `100px`;
    div.style.top = `100px`;

    const boxUp = (e) => {
        div.style.backgroundColor = 'gray';
        div.style.opacity = '0.3';
        drawActive = true;

        insertDivX = e.offsetX;
        insertDivY = e.offsetY;
    }

    const boxMove = (e) => {
        if(drawActive) {

            divX =  e.clientX - insertDivX;
            divY =  e.clientY - insertDivY;
            div.style.left = `${divX}px`;
            div.style.top = `${divY}px`;


        }
    }

    const boxDown = () => {
        div.style.backgroundColor = '#4b8143';
        div.style.opacity = '1';
        drawActive = false;
    }

    div.addEventListener('mousedown', boxUp);
    div.addEventListener('mousemove', boxMove);
    div.addEventListener('mouseup', boxDown);
});

let drawActive = false;

let insertDivX;
let insertDivY;

