let loginForm = document.querySelector('.header .login-form'); 
 
document.querySelector('#login-btn').onclick = () =>{ 
    loginForm.classList.toggle('active'); 
    navbar.classList.remove('active'); 
} 
 
let navbar = document.querySelector('.header .navbar'); 
 
document.querySelector('#menu-btn').onclick = () =>{ 
    navbar.classList.toggle('active');     
    loginForm.classList.remove('active'); 
} 
 
window.onscroll = () =>{ 
    loginForm.classList.remove('active'); 
    navbar.classList.remove('active'); 
 
    if(window.scrollY > 0){ 
        document.querySelector('.header').classList.add('active'); 
    }else{ 
        document.querySelector('.header').classList.remove('active'); 
    } 
} 
 
window.onload = () =>{ 
    if(window.scrollY > 0){ 
        document.querySelector('.header').classList.add('active'); 
    }else{ 
        document.querySelector('.header').classList.remove('active'); 
    } 
}

function openPayment(amount) {
    document.getElementById('payment-amount').value = $${amount};
    document.getElementById('payment-modal').classList.add('active');
}

// Закрытие оплаты
document.querySelector('.close-payment').addEventListener('click', () => {
    document.getElementById('payment-modal').classList.remove('active');
});


document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('payment-email').value;
    const phone = document.getElementById('payment-phone').value;
    const amount = document.getElementById('payment-amount').value;
    
    alert(`Оплата на ${amount} принята!\nМы отправили чек на ${email}\nСвяжемся по телефону: ${phone}`);
    
    // Закрываем модальное окно
    document.getElementById('payment-modal').classList.remove('active');
    this.reset();
});


document.querySelectorAll('.add-to-cart, .rent-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const price = this.closest('.box').querySelector('.price, .amount').textContent;
        const amount = price.match(/\$(\d+)/)[1];
        setTimeout(() => openPayment(amount), 500);
    });
});

document.querySelector('.payment-service-btn').addEventListener('click', function() {
    openPaymentModal();
});

function openPaymentModal() {
    document.getElementById('payment-amount').value = '$0';
    document.getElementById('payment-modal').classList.add('active');
}

function openPayment(amount) {
    document.getElementById('payment-amount').value = $${amount};
    document.getElementById('payment-modal').classList.add('active');
}


document.querySelector('.close-payment').addEventListener('click', () => {
    document.getElementById('payment-modal').classList.remove('active');
});
// === ОПЛАТА ЧЕРЕЗ УСЛУГИ ===
document.addEventListener('DOMContentLoaded', function() {
    const paymentBtn = document.querySelector('.payment-service-btn');
    if (paymentBtn) {
        paymentBtn.addEventListener('click', function() {
            openPaymentModal();
        });
    }
});

function openPaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        document.getElementById('payment-amount').value = '$0';
        paymentModal.classList.add('active');
    }
}

function openPayment(amount) {
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
        document.getElementById('payment-amount').value = $${amount};
        paymentModal.classList.add('active');
    }
}


const closePayment = document.querySelector('.close-payment');
if (closePayment) {
    closePayment.addEventListener('click', () => {
        document.getElementById('payment-modal').classList.remove('active');
    });
}


const paymentForm = document.getElementById('payment-form');
if (paymentForm) {
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('payment-email').value;
        const phone = document.getElementById('payment-phone').value;
        const amount = document.getElementById('payment-amount').value;
        
        alert(`✅ Оплата на ${amount} принята!\n📧 Чек отправлен на: ${email}\n📞 Свяжемся по телефону: ${phone}`);
        
        document.getElementById('payment-modal').classList.remove('active');
        this.reset();
    });
}

document.querySelectorAll('.add-to-cart, .rent-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const box = this.closest('.box');
        let priceElement = box.querySelector('.price') || box.querySelector('.amount');
        let priceText = priceElement.textContent;
        
        const priceMatch = priceText.match(/\$(\d+)/);
        if (priceMatch) {
            const amount = priceMatch[1];
            setTimeout(() => openPayment(amount), 500);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Генерируем случайный пример
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;
    
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    
    // Проверка ответа
    document.getElementById('verify-btn').addEventListener('click', function() {
        const userAnswer = parseInt(document.getElementById('captcha-input').value);
        
        if (userAnswer === correctAnswer) {
            // ПРАВИЛЬНО - убираем капчу и показываем сайт
            document.getElementById('captcha-overlay').style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            // НЕПРАВИЛЬНО - анимация ошибки
            const input = document.getElementById('captcha-input');
            input.style.borderColor = 'red';
            input.style.background = '#ffe6e6';
            input.value = '';
            input.focus();
            
            // Встряхиваем инпут
            input.style.animation = 'shake 0.5s';
            setTimeout(() => input.style.animation = '', 500);
        }
    });
    
   
    document.getElementById('captcha-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('verify-btn').click();
        }
    });
});


const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    // Блокируем скролл всего сайта
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
   
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 + num2;
    
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
    
    
    document.getElementById('captcha-input').focus();
    
   
    document.getElementById('verify-btn').addEventListener('click', function() {
        const userAnswer = parseInt(document.getElementById('captcha-input').value);
        
        if (userAnswer === correctAnswer) {
            // ПРАВИЛЬНО - убираем капчу и разблокируем сайт
            document.getElementById('captcha-overlay').style.display = 'none';
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        } else {
            // НЕПРАВИЛЬНО
            alert('❌ Неправильно! Попробуй еще раз!');
            document.getElementById('captcha-input').value = '';
            document.getElementById('captcha-input').focus();
        }
    });
    
   
    document.getElementById('captcha-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('verify-btn').click();
        }
    });

});
