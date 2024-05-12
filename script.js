document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
        const text = document.querySelector(".text");
        const dot = document.querySelector(".dot");

        // 텍스트 요소들을 숨기기 위해 투명도를 0으로 설정하고, 그룹으로 아래로 내리기
        text.style.opacity = 0;
        text.style.transition = "opacity 1s ease-in-out";
        setTimeout(function() {
            text.style.display = "none";
        }, 1000);

        // 빨간 작은 원을 커서 위치로 이동시키고 나타내기
        dot.style.display = "block";
        moveDot(event.clientX, event.clientY);
        
        // 커서가 움직일 때마다 빨간 작은 원을 따라다니게 함
        document.addEventListener("mousemove", function(event) {
            moveDot(event.clientX, event.clientY);
        });
    });
});

function moveDot(x, y) {
    const dot = document.querySelector(".dot");
    const cursorWidth = 1; // 커서의 뾰족한 끝의 폭
    const cursorHeight = 1; // 커서의 뾰족한 끝의 높이
    const dotSize = 40; // 점의 크기

    // 점의 중심을 커서의 뾰족한 끝에 위치하도록 좌표를 계산
    const dotX = x - (dotSize / 2) + (cursorWidth / 2);
    const dotY = y - (dotSize / 2) + (cursorHeight / 2);

    dot.style.left = dotX + "px";
    dot.style.top = dotY + "px";
}
