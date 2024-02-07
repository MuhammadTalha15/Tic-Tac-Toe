
const loadView = document.getElementById('preloader');
const progress = document.getElementById('progress');
let loadbar_width = document.getElementById('loadbar');

window.addEventListener('load', () => {
    progress.style.width = '99%';
    let width_of_Prog = '';
    let actual_width = '';
    setTimeout(() => {
        width_of_Prog += parseInt(window.getComputedStyle(progress).getPropertyValue('width'));
        actual_width += parseInt(window.getComputedStyle(loadbar_width).getPropertyValue('width'));
        if (width_of_Prog < actual_width) {
            loadView.style.opacity = '0';
            setTimeout(()=>{
                loadView.style.display = 'none';
            },500);
        }
    }, 1000);
})
