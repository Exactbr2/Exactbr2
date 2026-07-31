const fileInput = document.getElementById('myFile');
const triggerBtn0 = document.querySelector('.labelcent2');
const triggerBtn1 = document.querySelector('.labelcent3');
const triggerBtn2 = document.querySelector('.labelcentmz2');
const triggerBtn3 = document.querySelector('.labelcentmz3');
const triggerBtn4 = document.querySelector('.windowspage0');
const triggerBtn13 = document.querySelector('.windowspage1');
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
            triggerBtn13.innerHTML = '';
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
//const triggerBtn13 is used