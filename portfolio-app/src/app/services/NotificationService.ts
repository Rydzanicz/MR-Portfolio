import { Injectable } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'info';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {
    this.initializeStyles();
  }

  showNotification(message: string, type: NotificationType = 'info'): void {
    const notification = document.createElement('div');

    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-${this.getIconClass(type)}"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${this.getBackgroundColor(type)};
      color: white;
      padding: 0px 0px;
      border-radius: 0px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      max-width: 350px;
      animation: slideInRight 0.3s ease-out;
    `;

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

    document.body.appendChild(notification);

    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove();
      }
    }, 5000);
  }

  private getIconClass(type: NotificationType): string {
    switch (type) {
      case 'success': return 'check-circle';
      case 'error': return 'exclamation-triangle';
      default: return 'info-circle';
    }
  }

  private getBackgroundColor(type: NotificationType): string {
    switch (type) {
      case 'success': return '#27AE60';
      case 'error': return '#e74c3c';
      default: return '#3498db';
    }
  }

  private initializeStyles(): void {
  }
}
