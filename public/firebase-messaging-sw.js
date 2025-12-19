importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyDxHgXvAxNhkj1IPCoW9uKrLZeIUz-nyx8',
  authDomain: 'selvaguru-e613b.firebaseapp.com',
  projectId: 'selvaguru-e613b',
  storageBucket: 'selvaguru-e613b.firebasestorage.app',
  messagingSenderId: '914201586585',
  appId: '1:914201586585:web:1ea82145efd4d35467c108'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png',
    badge: '/icon.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
