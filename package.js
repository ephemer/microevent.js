Package.describe({
	name: 'ephemer:microevent',
    summary: 'A simple DOMless events bus (less than 0.5kb)',
    version: '0.1.0',
    git: ''
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use(['grigio:babel']); // remove this in version 1.0 for Meteor 1.2+
    api.add_files('microevent.es6.js');
    api.export('MicroEvent');
});
