export const requestNotificationPermission = async () => {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            new Notification('Welcome to Sarcastic Circus!', {
                body: 'Where Chaos Meets Charm, and Snark Steals the Show!',
                icon: '/icon.png'
            });
        }
    }
};