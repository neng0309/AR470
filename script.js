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

// ฟังก์ชันเพื่อโหลดและแสดงรูปภาพจากโฟลเดอร์ images_gallery
function loadImages() {
    const imageWrapper = document.querySelector('.image-wrapper');
    
    // โฟลเดอร์ที่เก็บรูปภาพ
    const folderPath = 'images_gallery/';
    
    // ตัวอย่างชื่อไฟล์รูปภาพ (เพิ่มรูปภาพในโฟลเดอร์ images_gallery)
    const images = [
        'image1.png',
        'image2.png',
        'image3.png',
        'image4.png',
        'image5.png',
        'image6.png',
        'image7.png',
        'image8.png',
        'image9.png',
        'image10.png',
        'image11.png',
        'image12.png'
    ];
    
    // สร้างกรอบ 5 กรอบสำหรับแสดงรูปภาพ
    let currentIndex = 0;
    const imageFrames = [];
    
    for (let i = 0; i < 5; i++) {
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('image-frame'); // คลาสสำหรับกรอบรูป

        const img = document.createElement('img');
        img.src = folderPath + images[(currentIndex + i) % images.length]; // ตั้งค่าที่อยู่ของรูปภาพ
        img.alt = images[(currentIndex + i) % images.length]; // ตั้งค่า alt text ให้ตรงกับชื่อไฟล์

        imgDiv.appendChild(img); // เพิ่มรูปภาพเข้าไปในกรอบ
        imageFrames.push(imgDiv); // เก็บกรอบรูปไว้
        imageWrapper.appendChild(imgDiv); // เพิ่มกรอบลงใน container ของแกลเลอรี่
    }

    // ฟังก์ชันสำหรับเปลี่ยนรูปทุกๆ 3 วินาที
    setInterval(() => {
        // อัพเดทภาพในกรอบ 5 กรอบ
        currentIndex = (currentIndex + 1) % images.length;
        imageFrames.forEach((frame, index) => {
            const img = frame.querySelector('img');
            img.src = folderPath + images[(currentIndex + index) % images.length];
            img.alt = images[(currentIndex + index) % images.length];
        });
    }, 3000); // เปลี่ยนทุกๆ 3 วินาที

}

// เรียกใช้ฟังก์ชัน loadImages เมื่อหน้าเว็บโหลดเสร็จ
window.onload = function() {
    loadImages();
    addClickEventToImages();  // เพิ่มอีเวนต์คลิกสำหรับรูปภาพ
};



// ฟังก์ชันสำหรับเปิดป๊อปอัพแสดงรูปใหญ่
function openImagePopup(imageSrc) {
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    
    // ตั้งค่าภาพที่จะแสดงในป๊อปอัพ
    popupImage.src = imageSrc;
    
    // แสดงป๊อปอัพ
    popup.classList.add('show');
}

// ฟังก์ชันสำหรับปิดป๊อปอัพเมื่อคลิกที่พื้นที่ว่าง
function closeImagePopup(event) {
    const popup = document.getElementById('image-popup');
    if (event.target === popup || event.target.id === 'close-popup') {
        popup.classList.remove('show'); // ซ่อนป๊อปอัพ
    }
}

// เพิ่มการคลิกที่รูปภาพในแกลเลอรี่เพื่อแสดงภาพในป๊อปอัพ
function addClickEventToImages() {
    const imageFrames = document.querySelectorAll('.image-frame img');
    
    imageFrames.forEach(img => {
        img.addEventListener('click', function() {
            openImagePopup(this.src);  // เปิดป๊อปอัพแสดงรูปเมื่อคลิกที่รูป
        });
    });
}

// ฟังก์ชันที่ฟังการกดปุ่ม ESC
function handleEscKey(event) {
    if (event.key === 'Escape') {
        const popup = document.getElementById('image-popup');
        popup.classList.remove('show'); // ซ่อนป๊อปอัพ
    }
}

// เรียกฟังก์ชัน addClickEventToImages เมื่อหน้าเว็บโหลดเสร็จ
window.onload = function() {
    loadImages();
    addClickEventToImages();  // เพิ่มอีเวนต์คลิกสำหรับรูปภาพ
};

// ฟังก์ชันสำหรับปิดป๊อปอัพเมื่อคลิกที่พื้นที่ว่างหรือปุ่มปิด
window.onclick = function(event) {
    closeImagePopup(event);  // ปิดป๊อปอัพเมื่อคลิกพื้นที่นอกป๊อปอัพ
    closeContactPopup(event); // ปิดป๊อปอัพติดต่อเมื่อคลิกข้างนอก
};

// ฟังก์ชันฟังการกดปุ่ม ESC
window.addEventListener('keydown', handleEscKey);  // ฟังการกดปุ่ม ESC
