var exec = require('cordova/exec');

var SettingsPlugin = {
    openSettings: function(successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'SettingsPlugin', 'openSettings', []);
    }
};

module.exports = SettingsPlugin;
