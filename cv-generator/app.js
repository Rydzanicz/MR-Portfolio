function downloadPDF() {
    // Show loading state
    const downloadBtn = document.querySelector('.download-btn');
    const originalText = downloadBtn.innerHTML;

    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generowanie PDF...';
    downloadBtn.disabled = true;

    // Get the CV container element
    const cvContainer = document.getElementById('cv-content');

    // NOWOŚĆ: Ukryj przycisk przed generowaniem PDF
    const buttonsToHide = document.querySelectorAll('.download-btn, .download-section');
    buttonsToHide.forEach(btn => {
        btn.style.display = 'none';
    });

    // Configure html2canvas options for high quality
    const options = {
        useCORS: true,
        allowTaint: true,
        scale: 2, // Higher resolution
        width: cvContainer.offsetWidth,
        height: cvContainer.offsetHeight,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: function (clonedDoc) {

            const buttonsInClone = clonedDoc.querySelectorAll('.download-btn, .download-section, button');
            buttonsInClone.forEach(btn => btn.remove());

            const clonedContainer = clonedDoc.getElementById('cv-content');
            if (clonedContainer) {
                clonedContainer.style.fontFamily = '"Open Sans", "Montserrat", Arial, sans-serif';
            }
        }
    };

    // Generate PDF
    html2canvas(cvContainer, options)
        .then(canvas => {
            // Calculate dimensions for A4 format
            const imgData = canvas.toDataURL('image/png', 1.0);
            const pdf = new window.jspdf.jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = 210;
            const pdfHeight = 297;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;

            let imgWidth = pdfWidth;
            let imgHeight = imgWidth / ratio;

            if (imgHeight > pdfHeight) {
                imgHeight = pdfHeight;
                imgWidth = imgHeight * ratio;
            }

            const x = 0;
            const y = 0;

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight, '', 'FAST');

            // Save the PDF
            pdf.save('Michal_Rydzanicz_CV.pdf');

            // Show success notification
            showNotification('PDF został wygenerowany i pobrany pomyślnie!', 'success');
        })
        .catch(error => {
            console.error('Błąd podczas generowania PDF:', error);
            showNotification('Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.', 'error');
        })
        .finally(() => {
            buttonsToHide.forEach(btn => {
                btn.style.display = '';
            });

            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        });
}


function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles for notification
    const bgColor = type === 'success' ? '#27AE60' : type === 'error' ? '#e74c3c' : '#3498db';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 0px 0px;
        border-radius: 0px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-width: 350px;
        animation: slideInRight 0.3s ease-out;
    `;

    // Add notification styles to document
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: white;
                cursor: pointer;
                padding: 4px;
                margin-left: auto;
                border-radius: 4px;
                transition: background-color 0.2s;
            }
            
            .notification-close:hover {
                background-color: rgba(255, 255, 255, 0.2);
            }
        `;
        document.head.appendChild(styles);
    }

    // Add to document
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}