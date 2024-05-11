document.addEventListener('DOMContentLoaded', function() {
    const body = document.body; // body 요소를 가져옵니다.
    const dot = document.querySelector('.dot');
    const paragraphs = document.querySelectorAll('p');

    document.addEventListener('click', function() {
        paragraphs.forEach((paragraph, index) => {
           paragraph.style.transition = `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`;
            paragraph.style.transform = 'translateY(20px)';
            paragraph.style.opacity = 0;
        });

        setTimeout(() => {
            dot.style.display = 'block'; // 빨간 작은 원 표시
            dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표에 따라 위치 설정
            dot.style.left = `${event.clientX}px`; // 마우스 X 좌표에 따라 위치 설정
            dot.style.animation = 'slideIn 2s forwards'; // 슬라이딩 애니메이션 설정
        }, 2000);
    });

    document.addEventListener('mousemove', function(event) {
        dot.style.top = `${event.clientY}px`; // 마우스 Y 좌표에 따라 위치 설정
        dot.style.left = `${event.clientX}px`; // 마우스 X 좌표에 따라 위치 설정
    });
});
