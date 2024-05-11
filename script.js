document.addEventListener('DOMContentLoaded', function(event) {
    const paragraphs = document.querySelectorAll('.text p');
    const dot = document.querySelector('.dot');

    document.addEventListener('click', function(event) {
        paragraphs.forEach((paragraph, index) => {
            paragraph.style.transition = `opacity 1s ${index * 2}s`; // 애니메이션 지연 시간 설정
            paragraph.style.opacity = 1; // 투명도 설정
        });
        dot.style.transition = 'opacity 1s, top 1s'; // 애니메이션 속도 설정
        dot.style.opacity = 1; // 투명도 설정
        dot.style.top = '0'; // 화면 상단으로 이동
    });
});
