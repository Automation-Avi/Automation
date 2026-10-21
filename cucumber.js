module.exports = {
  default: {
   require: ['step_definitions/**/*.js'],
    format: ['progress-bar', 'json:cucumber-report.json', 'html:cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' }
  },
  
};
