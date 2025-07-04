// CV Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize skill bars to 0% width first
    initializeSkillBars();
    
    // Animate skill bars on page load with delay
    setTimeout(() => {
        animateSkillBars();
    }, 500);
    
    // Add smooth scrolling behavior
    addSmoothScrolling();
    
    // Add print functionality
    addPrintSupport();
    
    // Add hover effects for interactive elements
    addHoverEffects();
    
    // Initialize intersection observer for animations
    initializeAnimations();
    
    // Add contact click handlers
    initializeContactHandlers();
});

// Initialize skill bars to 0% width
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
}

// Animate skill progress bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const level = bar.getAttribute('data-level');
        
        // Add delay for staggered animation
        setTimeout(() => {
            bar.style.width = level + '%';
        }, index * 100);
    });
}

// Add smooth scrolling for internal links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle PDF download with actual PDF generation (ZMODYFIKOWANA WERSJA)
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
        onclone: function(clonedDoc) {
            // Ensure skill bars are fully visible in the clone
            const skillBars = clonedDoc.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const level = bar.getAttribute('data-level');
                bar.style.width = level + '%';
                bar.style.transition = 'none';
            });

            // NOWOŚĆ: Upewnij się że przyciski są ukryte w klonie
            const buttonsInClone = clonedDoc.querySelectorAll('.download-btn, .download-section, button');
            buttonsInClone.forEach(btn => btn.remove());

            // Ensure fonts are loaded
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

            // A4 dimensions in mm
            const pdfWidth = 210;
            const pdfHeight = 297;

            // Calculate scaling to fit content properly
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const ratio = canvasWidth / canvasHeight;

            let imgWidth = pdfWidth - 20; // 10mm margin on each side
            let imgHeight = imgWidth / ratio;

            // If height exceeds page, scale down
            if (imgHeight > pdfHeight - 20) {
                imgHeight = pdfHeight - 20;
                imgWidth = imgHeight * ratio;
            }

            // Center the image on the page
            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            // Add the image to PDF
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
            // NOWOŚĆ: Przywróć widoczność przycisków
            buttonsToHide.forEach(btn => {
                btn.style.display = '';
            });

            // Reset button state
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        });
}

// Show notification messages
function showNotification(message, type = 'info') {
    // Create notification element
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
        padding: 16px 20px;
        border-radius: 8px;
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

// Add print support
function addPrintSupport() {
    // Add print styles dynamically if needed
    window.addEventListener('beforeprint', function() {
        // Ensure skill bars are fully visible for print
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.width = level + '%';
        });
    });
}

// Add hover effects for interactive elements
function addHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            // Add ripple animation
            if (!document.querySelector('#ripple-styles')) {
                const styles = document.createElement('style');
                styles.id = 'ripple-styles';
                styles.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                    
                    .btn {
                        position: relative;
                        overflow: hidden;
                    }
                `;
                document.head.appendChild(styles);
            }
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Initialize contact handlers
function initializeContactHandlers() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const icon = item.querySelector('i');
        const text = item.querySelector('span').textContent.trim();
        
        // Make contact items clickable
        item.style.cursor = 'pointer';
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (icon.classList.contains('fa-phone')) {
                const phoneNumber = text.replace(/\s/g, '');
                window.open(`tel:+${phoneNumber}`);
            } else if (icon.classList.contains('fa-envelope')) {
                window.open(`mailto:${text}`);
            } else if (icon.classList.contains('fa-github')) {
                window.open(`https://${text}`, '_blank');
            } else if (icon.classList.contains('fa-linkedin')) {
                window.open(`https://${text}`, '_blank');
            } else if (icon.classList.contains('fa-map-marker-alt')) {
                // For location, copy to clipboard or search on maps
                const location = encodeURIComponent(text);
                window.open(`https://maps.google.com/?q=${location}`, '_blank');
            } else {
                copyToClipboard(text, 'Informacja kontaktowa');
            }
        });
        
        // Add hover effect
        item.addEventListener('mouseenter', function() {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            item.style.borderRadius = '4px';
            item.style.padding = '4px 8px';
            item.style.transition = 'all 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            item.style.backgroundColor = 'transparent';
            item.style.padding = '0';
        });
    });
}

// Utility function to copy contact information
function copyToClipboard(text, type) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification(`${type} został skopiowany do schowka!`, 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text, type);
        });
    } else {
        fallbackCopyToClipboard(text, type);
    }
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text, type) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification(`${type} został skopiowany do schowka!`, 'success');
    } catch (err) {
        showNotification('Nie udało się skopiować. Spróbuj ponownie.', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Press 'P' to print/download PDF
    if (e.key === 'p' || e.key === 'P') {
        if (e.ctrlKey || e.metaKey) {
            // Let browser handle Ctrl+P
            return;
        }
        e.preventDefault();
        downloadPDF();
    }
    
    // Press 'Escape' to close notifications
    if (e.key === 'Escape') {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => notification.remove());
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #27AE60, #2ECC71);
        z-index: 1000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    const updateProgress = throttle(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }, 10);
    
    window.addEventListener('scroll', updateProgress);
}

// Initialize scroll progress on load
document.addEventListener('DOMContentLoaded', addScrollProgress);
