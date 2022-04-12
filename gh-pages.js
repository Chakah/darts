import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		user: {
			name: 'Chakah', // update to use your name
			email: 'flxkirschner@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	(e) => {
		console.log('Deploy Complete!', e);
	}
);
