// Google Analytics Configuration
export const initAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'MEASUREMENT_ID');
};