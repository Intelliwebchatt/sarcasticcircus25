import { initSmoothScroll } from './utils/scroll.js';
import { initIntersectionObserver } from './utils/animations.js';
import { initLazyLoading } from './utils/lazyLoading.js';
import { requestNotificationPermission } from './utils/notifications.js';
import { initContactForm } from './forms/contact.js';
import { registerServiceWorker } from './serviceWorker/register.js';
import { initAnalytics } from './utils/analytics.js';

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initIntersectionObserver();
    initLazyLoading();
    initContactForm();
    registerServiceWorker();
    initAnalytics();

    // Setup notification permission request
    document.querySelector('.cta-button')?.addEventListener('click', requestNotificationPermission);
});