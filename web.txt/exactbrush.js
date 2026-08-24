const fileInput = document.getElementById('myFile');
const triggerBtn0 = document.querySelector('.labelcent2');
const triggerBtn1 = document.querySelector('.labelcent3');
const triggerBtn2 = document.querySelector('.labelcentmz2');
const triggerBtn3 = document.querySelector('.labelcentmz3');
const triggerBtn4 = document.querySelector('.windowspage0');
const triggerBtn13 = document.querySelector('.windowspage1');
const triggerBtn14 = document.getElementById('homean0');
const PlusBtn0 = true;
triggerBtn1.addEventListener('click', () => {
    triggerBtn4.classList.add('windpage0');
    if (!PlusBtn0){
        triggerBtn13.innerHTML = `
            <h1>New Project</h1>
            <label for="boxs0" id="boxsd0">Project Name</label>
            <input type="text" id="boxs0" placeholder="New Project">
            <br>
            <span class="inputta0"></span>
            <p>The free one only scale the maximum of 50x50px for more px up to 1000x1000px please buy Exactbrush + More</p>
            <label for="boxs1" id="boxsd0">H</label>
            <input type="number" id="boxs1" placeholder="Height" min="1" max="50" oninput="if(this.value !== ''){ if(Number(this.value) > Number(this.max)) this.value = this.max; if(Number(this.value) < Number(this.min)) this.value = this.min; }">&nbsp
            <label for="boxs2" id="boxsd0">W</label>
            <input type="number" id="boxs2" placeholder="Width" min="1" max="50" oninput="if(this.value !== ''){ if(Number(this.value) > Number(this.max)) this.value = this.max; if(Number(this.value) < Number(this.min)) this.value = this.min; }">
            <br>
            <span class="inputta1"></span>
            <h1 class="labelcent5">Close</h1>
            <h1 class="labelcent6">Create</h1>
        `;
    } else {
        triggerBtn13.innerHTML = `
            <h1>New Project</h1>
            <label for="boxs0" id="boxsd0">Project Name</label>
            <input type="text" id="boxs0" placeholder="New Project">
            <br>
            <span class="inputta0"></span>
            <br>
            <br>
            <label for="boxs1" id="boxsd0">H</label>
            <input type="number" id="boxs1" placeholder="Height" min="1" oninput="if(this.value !== ''){ if(Number(this.value) < Number(this.min)) this.value = this.min; }">&nbsp
            <label for="boxs2" id="boxsd0">W</label>
            <input type="number" id="boxs2" placeholder="Width" min="1" oninput="if(this.value !== ''){ if(Number(this.value) < Number(this.min)) this.value = this.min; }">
            <br>
            <span class="inputta1"></span>
            <h1 class="labelcent5">Close</h1>
            <h1 class="labelcent6">Create</h1>
        `;
    }
    myFunction();
});
triggerBtn3.addEventListener('click', () => {
    triggerBtn4.classList.add('windpage0');
    if (!PlusBtn0){
        triggerBtn13.innerHTML = `
            <h1>New Project</h1>
            <label for="boxs0" id="boxsd0">Project Name</label>
            <input type="text" id="boxs0" placeholder="New Project">
            <br>
            <span class="inputta0"></span>
            <p>The free one only scale the maximum of 50x50px for more px up to 1000x1000px please buy Exactbrush + More</p>
            <label for="boxs1" id="boxsd0">H</label>
            <input type="number" id="boxs1" placeholder="Height" min="1" max="50" oninput="if(this.value !== ''){ if(Number(this.value) > Number(this.max)) this.value = this.max; if(Number(this.value) < Number(this.min)) this.value = this.min; }">&nbsp
            <label for="boxs2" id="boxsd0">W</label>
            <input type="number" id="boxs2" placeholder="Width" min="1" max="50" oninput="if(this.value !== ''){ if(Number(this.value) > Number(this.max)) this.value = this.max; if(Number(this.value) < Number(this.min)) this.value = this.min; }">
            <br>
            <span class="inputta1"></span>
            <h1 class="labelcent5">Close</h1>
            <h1 class="labelcent6">Create</h1>
        `;
    } else {
        triggerBtn13.innerHTML = `
            <h1>New Project</h1>
            <label for="boxs0" id="boxsd0">Project Name</label>
            <input type="text" id="boxs0" placeholder="New Project">
            <br>
            <span class="inputta0"></span>
            <br>
            <br>
            <label for="boxs1" id="boxsd0">H</label>
            <input type="number" id="boxs1" placeholder="Height" min="1" oninput="if(this.value !== ''){ if(Number(this.value) < Number(this.min)) this.value = this.min; }">&nbsp
            <label for="boxs2" id="boxsd0">W</label>
            <input type="number" id="boxs2" placeholder="Width" min="1" oninput="if(this.value !== ''){ if(Number(this.value) < Number(this.min)) this.value = this.min; }">
            <br>
            <span class="inputta1"></span>
            <h1 class="labelcent5">Close</h1>
            <h1 class="labelcent6">Create</h1>
        `;
    }
    myFunction();
});
function myFunction(){
    const triggerBtn5 = document.querySelector('.labelcent5');
    triggerBtn5.addEventListener('click', () => {
        triggerBtn4.classList.remove('windpage0');
        triggerBtn13.innerHTML = '';
    });
    const triggerBtn6 = document.querySelector('.labelcent6');
    triggerBtn6.addEventListener('click', () => {
        const conInputs1 = validateInputs1();
        const conInputs2 = validateInputs2();
        const conInputs3 = validateInputs3();
        if (!conInputs2 || !conInputs3) triggerBtn12.innerHTML = 'number is required';
        if (conInputs1 && conInputs2 && conInputs3){
            triggerBtn4.classList.remove('windpage0');
            const triggerBtn15 = document.getElementById('homean1');
            triggerBtn15.style.display = 'flex';
            if (PlusBtn0){
                triggerBtn15.innerHTML = `
                    <div id="taskbar0">
                        <img id="usingdraw0" src="usingdraw.png">
                        <br>
                        <input type="color" id="colorhcff0">
                    </div>
                    <div id="taskbar1">
                        <label for="typePencilSize0">Size:</label>
                        <input type="range" id="pencilSize0" min="1" max="10" value="1">
                        <input type="number" id="typePencilSize0" min="1" max="10">
                    </div>
                    <canvas width="500" height="500" id="canname0"></canvas>
                    <h1 id="exportBtn1">Export</h1>
                    <div class="windowspage2">
                        <div class="windowspage3"></div>
                    </div>
                `;
            }
            /**
             * @type HTMLCanvasElement
             */
            const drawCanvas = document.getElementById('canname0');
            const drawContext = drawCanvas.getContext('2d');
            const colorhc0 = document.getElementById('colorhcff0');
            const exportBtn1 = document.getElementById('exportBtn1');
            const exportBtn0 = document.getElementById('exportBtn0');
            const typePencilSize0 = document.getElementById('typePencilSize0');
            const maxPencilSize0 = Math.min(connWidth0, connHeight0);
            typePencilSize0.max = maxPencilSize0;
            typePencilSize0.value = 1;
            drawContext.fillStyle = "#ff0000";
            drawContext.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
            const connWidth0 = parseInt(document.getElementById('boxs2').value, 10);
            const connHeight0 = parseInt(document.getElementById('boxs1').value, 10);
            const canProjectname0 = document.getElementById('boxs0').value.trim();
            triggerBtn14.innerHTML = '';
            const maxDrawCanvasSize0 = 500;
            const maxDrawCanvasSize1 = Math.min(maxDrawCanvasSize0 / connWidth0, maxDrawCanvasSize0 / connHeight0);
            drawCanvas.width = Math.round(connWidth0 * maxDrawCanvasSize1);
            drawCanvas.height = Math.round(connHeight0 * maxDrawCanvasSize1);
            const lePxWl0 = drawCanvas.width / connWidth0;
            const lePxHl0 = drawCanvas.height / connHeight0;
            colorhc0.value = "#00ff00";
            exportBtn1.addEventListener('click', () => {
                const styleExport1 = document.querySelector('.windowspage3');
                const styleExport0 = document.querySelector('.windowspage2');
                styleExport0.classList.add('windpage1');
                styleExport1.innerHTML = 'hgddgddgfhgjfgdfew';
            });
            window.colorOnHc0 = function(gnXa, gnYa){
                const nPencilSize0 = parseInt(typePencilSize0.value, 10);
                drawContext.fillStyle = colorhc0.value;
                for(let dx = 0; dx < nPencilSize0; dx++){
                    for(let dy = 0; dy < nPencilSize0; dy++) {
                        const targetX = gnXa + dx;
                        const targetY = gnYa + dy;
                        if (targetX < connWidth0 && targetY < connHeight0){
                            const startXa = targetX * lePxWl0;
                            const startYa = targetY * lePxHl0;
                            drawContext.fillRect(startXa, startYa, lePxWl0, lePxHl0);
                        }
                    }
                }
            };
            function drawGridLine(x0, y0, x1, y1) {
                const dx = Math.abs(x1 - x0);
                const dy = Math.abs(y1 - y0);
                const sx = x0 < x1 ? 1 : -1;
                const sy = y0 < y1 ? 1 : -1;
                let err = dx - dy;

                while (true) {
                    window.colorOnHc0(x0, y0);
                    if (x0 === x1 && y0 === y1) break;
                    const e2 = 2 * err;
                    if (e2 > -dy) {
                        err -= dy;
                        x0 += sx;
                    }
                    if (e2 < dx) {
                        err += dx;
                        y0 += sy;
                    }
                }
            }
            let isDrawing0 = false;
            let isDrawing1 = false;
            let LastXa0 = null;
            let LastYa0 = null;
            function aPaintBb0(event){
                const drawCanvasRect = drawCanvas.getBoundingClientRect();
                const drawCanvasReXa = event.clientX - drawCanvasRect.left;
                const drawCanvasReYa = event.clientY - drawCanvasRect.top;
                const gnXa = Math.floor(drawCanvasReXa / lePxWl0);
                const gnYa = Math.floor(drawCanvasReYa  / lePxHl0);
                if (LastXa0 !== null && LastYa0 !== null){
                    drawGridLine(LastXa0, LastYa0, gnXa, gnYa);
                } else {
                    for(let forloop0 = 0; forloop0 < 10; forloop0++) colorOnHc0(gnXa, gnYa);
                }
                LastXa0 = gnXa;
                LastYa0 = gnYa;
            }
            function aPaintBb1(event){
                const drawCanvasRect = drawCanvas.getBoundingClientRect();
                const touchlee = event.touches ? event.touches[0] : event;
                const drawCanvasReXa = touchlee.clientX - drawCanvasRect.left;
                const drawCanvasReYa = touchlee.clientY - drawCanvasRect.top;
                const gnXa = Math.floor(drawCanvasReXa / lePxWl0);
                const gnYa = Math.floor(drawCanvasReYa  / lePxHl0);
                if (LastXa0 !== null && LastYa0 !== null){
                    drawGridLine(LastXa0, LastYa0, gnXa, gnYa);
                } else {
                    for(let forloop0 = 0; forloop0 < 10; forloop0++) colorOnHc0(gnXa, gnYa);
                }
                LastXa0 = gnXa;
                LastYa0 = gnYa;
            }
            drawCanvas.addEventListener('mousedown', (event) => {
                event.preventDefault();
                if (event.button !== 0){
                    return;
                }
                LastXa0 = null;
                LastYa0 = null;
                isDrawing0 = true;
                aPaintBb0(event);
            });
            drawCanvas.addEventListener('mousemove', (event) => {
                event.preventDefault();
                if (isDrawing0){
                    aPaintBb0(event);
                }
            });
            window.addEventListener('mouseup', (event) => {
                isDrawing0 = false;
                LastXa0 = null;
                LastYa0 = null;
            });
            drawCanvas.addEventListener('mouseout', (event) => {
                LastXa0 = null;
                LastYa0 = null;
            });
            drawCanvas.addEventListener('touchstart', (event) => {
                event.preventDefault();
                isDrawing1 = true;
                aPaintBb1(event);
                LastXa0 = null;
                LastYa0 = null;
            });
            drawCanvas.addEventListener('touchmove', (event) => {
                event.preventDefault();
                if (isDrawing1){
                    aPaintBb1(event);
                }
            });
            drawCanvas.addEventListener('touchend', (event) => {
                isDrawing1 = false;
                LastXa0 = null;
                LastYa0 = null;
            });
            exportBtn0.addEventListener('click', () => {
                const exportCanvas0 = document.createElement('canvas');
                exportCanvas0.width = connWidth0;
                exportCanvas0.height = connHeight0;
                const exportContext0 = exportCanvas0.getContext('2d');
                exportContext0.drawImage(drawCanvas, 0, 0, connWidth0, connHeight0);
                const linkPng0 = document.createElement('a');
                linkPng0.download = `${canProjectname0}.png`;
                linkPng0.href = exportCanvas0.toDataURL('image/png');
                linkPng0.click();
            });
            function updateCanvasCursor0(){
                const nPencilSize0 = parseInt(typePencilSize0.value, 10);
                const cursorWidth = Math.max(lePxWl0 * nPencilSize0, 4);
                const cursorHeight = Math.max(lePxHl0 * nPencilSize0, 4);
                const svgSvg0 = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="${cursorWidth}" height="${cursorHeight}">
                        <rect width="100%" height="100%" fill="none" stroke="black" stroke-width="1"/>
                        <rect width="100%" height="100%" fill="none" stroke="white" stroke-width="1" stroke-dasharray="2,2"/>
                    </svg>
                `.trim();
                const encodedSvg0 = encodeURIComponent(svgSvg0);
                drawCanvas.style.cursor = `url("data:image/svg+xml,${encodedSvg0}") 0 0, crosshair`;
            }
            updateCanvasCursor0();
            typePencilSize0.addEventListener('input', updateCanvasCursor0);
        }
    });
    const triggerBtn7 = document.getElementById('boxs0');
    const triggerBtn8 = document.querySelector('.inputta0');
    const triggerBtn12 = document.querySelector('.inputta1');
    const triggerBtn10 = document.getElementById('boxs1');
    const triggerBtn11 = document.getElementById('boxs2');
    function validateInputs1(){
        if (triggerBtn7.value.trim()) {
            triggerBtn8.innerHTML = '';
        } else {
            triggerBtn8.innerHTML = 'name is required';
            return false;
        }
        return true;
    }
    function validateInputs2(){
        if (triggerBtn10.value) {
            triggerBtn12.innerHTML = '';
        } else {
            triggerBtn12.innerHTML = 'number is required';
            return false;
        }
        return true;
    }
    function validateInputs3(){
        const vnnnValid = true;
        if (triggerBtn11.value) {
            triggerBtn12.innerHTML = '';
        } else {
            triggerBtn12.innerHTML = 'number is required';
            return false;
        }
        return true;
    }
    triggerBtn7.addEventListener('blur', () => {
        validateInputs1();
    });
    triggerBtn10.addEventListener('blur', () => {
        validateInputs2();
    });
    triggerBtn11.addEventListener('blur', () => {
        validateInputs3();
    });
}

triggerBtn0.addEventListener('click', () => {
    fileInput.click();
});
triggerBtn2.addEventListener('click', () => {
    fileInput.click();
});
//const triggerBtn15 is used