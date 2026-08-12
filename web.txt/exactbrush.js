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
            triggerBtn15.innerHTML = `
                <canvas width="500" height="500" id="canname0"></canvas>
                <input type="color" id="colorhcff0">
                <h1 id="exportBtn1">Export</h1>
                <div class="windowspage2">
                    <div class="windowspage3"></div>
                </div>
            `;
            /**
             * @type HTMLCanvasElement
             */
            const drawCanvas = document.getElementById('canname0');
            const drawContext = drawCanvas.getContext('2d');
            const colorhc0 = document.getElementById('colorhcff0');
            const exportBtn1 = document.getElementById('exportBtn1');
            const exportBtn0 = document.getElementById('exportBtn0');
            drawContext.fillStyle = "#ff0000";
            drawContext.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
            const connWidth0 = parseInt(document.getElementById('boxs2').value, 10);
            const connHeight0 = parseInt(document.getElementById('boxs1').value, 10);
            const canProjectname0 = document.getElementById('boxs0').value.trim() || 'project';
            triggerBtn14.innerHTML = '';
            const lePxWl0 = drawCanvas.width / connWidth0;
            const lePxHl0 = drawCanvas.height / connHeight0;
            colorhc0.value = "#00ff00";
            exportBtn1.addEventListener('click', () => {
                const styleExport1 = document.querySelector('.windowspage3');
                const styleExport0 = document.querySelector('.windowspage2');
                styleExport0.classList.add('windpage1');
                styleExport1.innerHTML = 'hgddgddgfhgjfgdfew';
            })
            window.colorOnHc0 = function(gnXa, gnYa){
                const startXa = gnXa * lePxWl0;
                const startYa = gnYa * lePxHl0;
                drawContext.fillStyle = colorhc0.value;
                drawContext.fillRect(startXa, startYa, lePxWl0, lePxHl0);
            }
            let isDrawing0 = false;
            function aPaintBb0(event){
                const drawCanvasRect = drawCanvas.getBoundingClientRect();
                const drawCanvasReXa = event.clientX - drawCanvasRect.left;
                const drawCanvasReYa = event.clientY - drawCanvasRect.top;
                const gnXa = Math.floor(drawCanvasReXa / lePxWl0);
                const gnYa = Math.floor(drawCanvasReYa  / lePxHl0);
                for(let forloop0 = 0; forloop0 < 5; forloop0++) colorOnHc0(gnXa, gnYa);
            }
            drawCanvas.addEventListener('mousedown', (event) => {
                if (event.button !== 0){
                    return;
                }
                isDrawing0 = true;
                aPaintBb0(event);
            });
            drawCanvas.addEventListener('mousemove', (event) => {
                if (isDrawing0){
                    aPaintBb0(event);
                }
            });
            window.addEventListener('mouseup', (event) => {
                isDrawing0 = false;
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
            })
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