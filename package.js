Package.describe({
  git: 'https://github.com/chandonnet/Meteor-http-methods',
  name: 'fchandonnet:http-methods',
  version: '0.0.35',
  summary: 'Adds HTTP.methods RESTful'
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');

  api.use(['webapp', 'underscore', 'ejson'], 'server');

  api.use('http', { weak: true });

  api.export && api.export('HTTP');

  api.export && api.export('_methodHTTP', { testOnly: true });

  api.addFiles('http.methods.client.api.js', 'client');
  api.addFiles('http.methods.server.api.js', 'server');

});
