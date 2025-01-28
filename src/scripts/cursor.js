export function cursor() {
    const mouseCursor = document.querySelector(".cursor");

    // .cursor 요소가 없으면 함수 실행 중단
    if (!mouseCursor) {
        console.error("Cursor element not found!");
        return;
    }

    // 이벤트 핸들러 등록
    window.addEventListener("scroll", (e) => updateCursor(e, mouseCursor));
    window.addEventListener("mousemove", (e) => updateCursor(e, mouseCursor));
}

// 커서 위치 업데이트 함수
function updateCursor(event, mouseCursor) {
    mouseCursor.style.left = event.pageX + "px";
    mouseCursor.style.top = event.pageY - window.scrollY + "px";
}
