var USER_CONFIG_FILE_PATH = process.env.HOME + '/.scaf_objc_user.json';

module.exports = function(Handlebars) {

  var user_config = {};
  try {
    user_config = require(USER_CONFIG_FILE_PATH);
  } catch (ex) {
    console.log('Error parsing ' + USER_CONFIG_FILE_PATH);
  }

  var registerHelperFromConfig = function(key) {
    var config = function(key, default_name) {
      return user_config[key] || default_name;
    };
    Handlebars.registerHelper(key, (function() {
      var value = config(key, '[Set ' + key + ' in ' + USER_CONFIG_FILE_PATH + ']');
      return function(options) {
        return value;
      };
    })());
  };

  registerHelperFromConfig('developer_name');
  registerHelperFromConfig('company_name');

  Handlebars.registerHelper('date', (function() {
    var date = new Date();
    var pad = function(num) {
    	return num < 10 ? '0' + num : num;
    }
    return function(options) {
      return pad(date.getDate()) + '/' + pad(date.getMonth()+1) + '/' + date.getFullYear();
    };
  })());

  Handlebars.registerHelper('year', (function() {
    var date = new Date();
    return function(options) {
      return date.getFullYear();
    };
  })());
  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
};