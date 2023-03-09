document.addEventListener('DOMContentLoaded', function(){
    const markRead = document.getElementById('markRead');
    const bgColor = document.querySelectorAll('.bgColor');
    const span = document.querySelectorAll('.bg-red-500, .rounded-full');
    const number = document.querySelector('.number');
    markRead.addEventListener('click', () => {
        removeClass();
        removeSpan();
        resetNumber();
    });
    function removeClass(){
        bgColor.forEach(color => {
            color.classList.remove('bg-[hsl(210,60%,98%)]');
        });
    }
    function removeSpan(){
        span.forEach(point => {
            point.remove(point);
        });
    }    
    function resetNumber(){
        number.textContent = '0';
    }

});