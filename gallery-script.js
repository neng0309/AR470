// ฟังก์ชันสำหรับแสดงป๊อปอัพติดต่อเรา
function showContactPopup() {
    console.log("showContactPopup ถูกเรียกใช้");
    document.getElementById('contact-qr-code').src = "images/LINE_QR.png";  // อัพเดท QR code
    document.getElementById('contact-phone').textContent = "Phone: +66 092 479 7404";  // อัพเดทเบอร์โทร
    document.getElementById('contact-email').textContent = "Email: neng.ar470@gmail.com";  // อัพเดทอีเมล์
    document.getElementById('contact-popup').classList.add('show');  // แสดงป๊อปอัพ
}

// ฟังก์ชันปิดป๊อปอัพเมื่อคลิกนอกป๊อปอัพ
window.addEventListener('click', function(event) {
    const popup = document.getElementById('contact-popup');
    const popupContent = document.querySelector('.popup-content'); // กำหนดให้คลิกใน .popup-content ไม่ปิดป๊อปอัพ
    if (!popupContent.contains(event.target) && event.target === popup) {
        popup.classList.remove('show');  // ซ่อนป๊อปอัพ
    }
});

// ฟังก์ชันสำหรับปิดป๊อปอัพเมื่อกดปุ่ม Esc
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const popup = document.getElementById('contact-popup');
        popup.classList.remove('show');  // ซ่อนป๊อปอัพเมื่อกดปุ่ม Esc
    }
});

// ฟังก์ชันเปิดแชท Facebook
function openFacebookChat() {
    window.open("https://m.me/yourfacebookpage", "_blank");  // เปิดหน้าต่างแชท Facebook
}





let currentImageIndex = 0; // ตัวแปรเก็บ index ของรูปภาพปัจจุบัน

// ฟังก์ชันเพื่อแสดงรายละเอียดผลงานในรูปแบบ Pop-up
function showGalleryDetails(workId) {
    // แสดง Pop-up
    const popup = document.getElementById('gallery-popup');
    popup.style.display = 'flex';
    
    const popupContent = document.querySelector('.popup-gallery-grid');
    popupContent.innerHTML = '';  // ลบรูปเดิมในกริด

    // ตัวแปรที่เก็บชื่อไฟล์รูปภาพของแต่ละงาน
    let images = [];
    
    // กำหนดชื่อไฟล์รูปภาพตาม workId
    if (workId === '2024-1') {
        images = [
            'Port-gallery/2024/1/work1.jpg',
            'Port-gallery/2024/1/work2.jpg',
            'Port-gallery/2024/1/work3.jpg',
            'Port-gallery/2024/1/work4.jpg',
            'Port-gallery/2024/1/work5.jpg',
            'Port-gallery/2024/1/work6.jpg',
            'Port-gallery/2024/1/work7.jpg',
            'Port-gallery/2024/1/work8.jpg'
        ];
    } else if (workId === '2024-2') {
        images = [
            'Port-gallery/2024/2/work1.jpg',
            'Port-gallery/2024/2/work2.jpg',
            'Port-gallery/2024/2/work3.jpg',
            'Port-gallery/2024/2/work4.jpg',
            'Port-gallery/2024/2/work5.jpg',
            'Port-gallery/2024/2/work6.jpg',
            'Port-gallery/2024/2/work7.jpg',
            'Port-gallery/2024/2/work8.jpg'
        ];
    } else if (workId === '2024-3') {
        images = [
            'Port-gallery/2024/3/work1.jpg',
            'Port-gallery/2024/3/work2.jpg',
            'Port-gallery/2024/3/work3.jpg',
            'Port-gallery/2024/3/work4.jpg',
            'Port-gallery/2024/3/work5.jpg',
            'Port-gallery/2024/3/work6.jpg',
            'Port-gallery/2024/3/work7.jpg',
            'Port-gallery/2024/3/work8.jpg'
        ];
    }
    
    // แสดงรูปแรก
    const img = document.createElement('img');
    img.src = images[currentImageIndex];
    img.alt = `ผลงาน ${workId}-${currentImageIndex + 1}`;
    img.classList.add('popup-image');
    popupContent.appendChild(img);

    // สร้างปุ่ม "ถัดไป" และ "ย้อนกลับ"
    const navButtons = document.createElement('div');
    navButtons.classList.add('popup-navigation');
    
    const prevButton = document.createElement('button');
    prevButton.textContent = 'ย้อนกลับ';
    prevButton.onclick = () => changeImage('prev', images, popupContent);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'ถัดไป';
    nextButton.onclick = () => changeImage('next', images, popupContent);

    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);

    popupContent.appendChild(navButtons);
}

// ฟังก์ชันเปลี่ยนรูปเมื่อคลิกปุ่ม "ถัดไป" หรือ "ย้อนกลับ"
function changeImage(direction, images, popupContent) {
    if (direction === 'next') {
        currentImageIndex = (currentImageIndex + 1) % images.length; // ไปที่รูปถัดไป
    } else if (direction === 'prev') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // ย้อนกลับไปยังรูปก่อนหน้า
    }

    const img = document.createElement('img');
    img.src = images[currentImageIndex];
    img.alt = `ผลงาน ${currentImageIndex + 1}`;
    img.classList.add('popup-image');

    // ลบรูปเดิมและเพิ่มรูปใหม่
    popupContent.innerHTML = '';
    popupContent.appendChild(img);

    // เพิ่มปุ่มนำทาง
    const navButtons = document.createElement('div');
    navButtons.classList.add('popup-navigation');
    
    const prevButton = document.createElement('button');
    prevButton.textContent = 'ย้อนกลับ';
    prevButton.onclick = () => changeImage('prev', images, popupContent);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'ถัดไป';
    nextButton.onclick = () => changeImage('next', images, popupContent);

    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);

    popupContent.appendChild(navButtons);
}

// ฟังก์ชันเพื่อปิด Pop-up
function closeGalleryPopup() {
    const popup = document.getElementById('gallery-popup');
    popup.style.display = 'none';
}

// เพิ่ม event listener ให้คลิกที่พื้นที่ว่างรอบๆ Pop-up เพื่อปิด Pop-up
document.getElementById('gallery-popup').addEventListener('click', function(event) {
    // ตรวจสอบว่าองค์ประกอบที่คลิกคือล่าสุดของ pop-up หรือไม่
    if (event.target === event.currentTarget) {
        closeGalleryPopup();
    }
});

// เพิ่ม event listener ให้ปิด Pop-up เมื่อกดปุ่ม ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGalleryPopup();
    }
});

// ฟังก์ชันเพื่อปิด Pop-up
function closeGalleryPopup() {
    const popup = document.getElementById('gallery-popup');
    popup.style.display = 'none'; // ซ่อนป๊อปอัพ
}