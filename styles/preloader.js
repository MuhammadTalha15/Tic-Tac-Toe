
const loadView = document.getElementById('preloader');
const progress = document.getElementById('progress');

window.addEventListener('load', async () => {
    progress.style.width = '99%';
    let width_of_Prog = '';
    setTimeout(() => {
        width_of_Prog += window.getComputedStyle(progress).getPropertyValue('width');
        console.log(width_of_Prog);
        if (width_of_Prog === '396px') {
            console.log('done')
            loadView.style.opacity = '0';
            setTimeout(()=>{
                loadView.style.display = 'none';
            },500);
        }
    }, 1000);
})