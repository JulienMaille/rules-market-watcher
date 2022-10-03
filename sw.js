self.addEventListener('notificationclick', function(event) {
  switch(event.action) {
    case 'open_url':
    clients.openWindow(event.notification.body);
    break;
  }
}
, false);