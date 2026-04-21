// انتظر لما الصفحة تخلص تحميل
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. خلي كل الأقسام مختفية في البداية
    const allSections = document.querySelectorAll('.services-content .content > div');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // 2. خلي قسم Buying هو الظاهر أول ما الصفحة تفتح
    const buyingSection = document.getElementById('buying');
    if (buyingSection) {
        buyingSection.style.display = 'block';
    }
    
    // 3. خلي أول تاب يكون active
    const firstTab = document.querySelector('.nav .nav-link');
    if (firstTab) {
        firstTab.classList.add('active');
    }
    
    // 4. خلي كل التابات تشتغل
    const tabs = document.querySelectorAll('.nav .nav-link');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            event.preventDefault(); // منع الرابط من التنقل
            
            // 4.1 شيل كلاس active من كل التابات
            tabs.forEach(t => t.classList.remove('active'));
            
            // 4.2 ضيف كلاس active للتاب اللي اتدوس عليه
            this.classList.add('active');
            
            // 4.3 خلي كل الأقسام تختفي
            allSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // 4.4 جيب ID القسم من الرابط (مثلاً #buying)
            const targetId = this.getAttribute('href'); // ده هيجيبه #buying مثلاً
            
            // 4.5 شيل علامة # عشان نجيب العنصر
            const targetElement = document.querySelector(targetId);
            
            // 4.6 خلي القسم الجديد يظهر
            if (targetElement) {
                targetElement.style.display = 'block';
            }
        });
    });
});

// ========== كود الـ Testimonials Slider ==========
(function() {
    // جيب كل الكروت بتاعة الـ testimonials
    const testimonialCards = document.querySelectorAll('.testimonials-content .testimonial-card');
    
    // لو مفيش كروت، اخرج من الكود
    if (testimonialCards.length === 0) return;
    
    let currentIndex = 0;
    
    // دالة تخفي كل الكروت
    function hideAllCards() {
        testimonialCards.forEach(card => {
            card.style.display = 'none';
        });
    }
    
    // دالة تظهر كارد معين
    function showCard(index) {
        hideAllCards();
        if (testimonialCards[index]) {
            testimonialCards[index].style.display = 'block';
        }
    }
    
    // دالة تروح للكارد اللي بعده
    function nextCard() {
        currentIndex++;
        if (currentIndex >= testimonialCards.length) {
            currentIndex = 0; // يرجع لأول كارد
        }
        showCard(currentIndex);
    }
    
    // خلي أول كارد بس هو اللي يظهر في البداية
    hideAllCards();
    showCard(0);
    
    // كل 5 ثواني يروح للكارد اللي بعده (غير الرقم على حسب احتياجك)
    setInterval(nextCard, 3000);
})();

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        // شيل الـ active من كل الروابط
        document.querySelectorAll('.navbar-nav .nav-link').forEach(l => {
            l.classList.remove('active');
        });
        // ضيف الـ active للرابط اللي اتدوس عليه
        this.classList.add('active');
    });
});