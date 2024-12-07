// Mobile menu toggle
document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
});

// Typing effect
const typingText = document.querySelector('#typing');
const text = "Software Developer";

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text[index];
        index++;
        setTimeout(typeText, 100);
    }
}

// ซ่อนเมนูอื่นและแสดงเฉพาะเมนูที่เลือก
document.querySelectorAll('nav a').forEach(menu => {
    if (!menu.classList.contains('active')) {
        menu.style.display = 'none';
    }
});


// ฟังก์ชันสำหรับตั้งค่าความกว้างของแถบโปรเกรส
function setProgress(barClass, percentage) {
    const bar = document.querySelector(`.${barClass}`);
    if (bar) {
        // อัปเดตความกว้างและข้อความในแถบ
        bar.style.width = `${percentage}%`;
        bar.textContent = `${percentage}%`;

        // เพิ่มเอฟเฟกต์สีถ้าถึงค่าที่กำหนด
        if (percentage >= 80) {
            bar.style.background = 'linear-gradient(90deg, #4eff4e, #9eff9e)';
        } else if (percentage >= 50) {
            bar.style.background = 'linear-gradient(90deg, #ffd700, #ffe680)';
        } else {
            bar.style.background = 'linear-gradient(90deg, #ff4e4e, #ff9e9e)';
        }
    }
}

// ตั้งค่าค่าตั้งต้น
setProgress('progress1', 90);
setProgress('progress2', 80);
setProgress('progress3', 70);
setProgress('progress4', 60);

// ตัวอย่าง: เปลี่ยนแปลงค่าแบบไดนามิก
setTimeout(() => setProgress('progress1', 100), 2000);
setTimeout(() => setProgress('progress2', 85), 3000);
setTimeout(() => setProgress('progress3', 75), 4000);
setTimeout(() => setProgress('progress4', 50), 5000);





