document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
  
    // إظهار النافذة المنبثقة
    window.showPopup = function () {
      popup.style.display = "block";
    };
  
    // إغلاق النافذة المنبثقة
    window.closePopup = function () {
      popup.style.display = "none";
    };
  
    // إغلاق النافذة إذا تم النقر خارج المحتوى
    window.addEventListener("click", function(event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  