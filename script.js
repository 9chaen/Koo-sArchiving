document.addEventListener('DOMContentLoaded', function() {
    const body = document.body; // body 요소를 가져옵니다.
    const dot = document.querySelector('.dot');
    const paragraphs = document.querySelectorAll('.text p'); // 모든 p 요소를 가져옵니다.

    body.addEventListener('click', function(event) { // body 요소에 클릭 이벤트를 추가합니다.
        paragraphs.forEach((paragraph, index) => {
            paragraph.style.transform = `translateY(${(index + 1) * 20}px)`; // 그룹으로 아래로 내려가는 애니메이션
            paragraph.style.opacity = 0; // 투명도 설정
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
