(function () {
    if (window.__whatsappFloatInitialized) return;
    window.__whatsappFloatInitialized = true;

    const phone = '6585889506';
    const message = 'Hello%20A%26M%20International%20Engineering';
    const waUrl = `https://wa.me/${phone}?text=${message}`;

    const style = document.createElement('style');
    style.id = 'whatsapp-float-style';
    style.textContent = `
        .whatsapp-float {
            position: fixed;
            right: 24px;
            bottom: 24px;
            width: 72px;
            height: 72px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border-radius: 0;
            box-shadow: none;
            z-index: 2147483647;
            text-decoration: none;
            overflow: hidden;
        }
        .whatsapp-float:hover {
            transform: translateY(-2px) scale(1.02);
        }
        .whatsapp-float img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            display: block;
        }
        @media (max-width: 768px) {
            .whatsapp-float {
                right: 16px;
                bottom: 16px;
                width: 54px;
                height: 54px;
            }
        }
    `;
    document.head.appendChild(style);

    const button = document.createElement('a');
    button.href = waUrl;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.className = 'whatsapp-float';
    button.setAttribute('aria-label', 'Contact us on WhatsApp');
    button.title = 'Contact us on WhatsApp';

    const image = document.createElement('img');
    image.alt = 'WhatsApp';
    image.src = 'Image/whatsapp-100.png?v=2';
    image.loading = 'lazy';

    const setSvgFallback = () => {
        button.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.199-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.208-.241-.579-.486-.501-.669-.51l-.57-.01c-.198 0-.521.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.49 1.694.626.712.227 1.36.195 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.123-.272-.198-.57-.347z"/>
            </svg>
        `;
    };

    image.onerror = function () {
        setSvgFallback();
    };

    button.appendChild(image);
    document.body.appendChild(button);
})();
