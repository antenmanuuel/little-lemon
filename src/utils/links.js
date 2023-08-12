const links = new Map();
links.set('home', {name: 'Home', path: '/', anchorable: true});
links.set('about', {name: 'About', path: '/about', anchorable: true});
links.set('menu', {name: 'Menu', path: '/menu', anchorable: true});
links.set('bookings', {name: 'Reservations', path: '/bookings', anchorable: true});
links.set('confirmedBooking', {name: 'Confirm Booking', path: '/confirm-booking', anchorable: false});
links.set('orderOnline', {name: 'Order Online', path: '/order-online', anchorable: true});
links.set('login', {name: 'Login', path: '/login', anchorable: true});

export default links;