module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '13.58.72.100',
      ref  : 'origin/master',
      repo : 'https://github.com/deepakkumarcopy/myApp.git',
      path : '/home/ubuntu/myApp',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production && ng build',
      'pre-setup': ''
    }
  }
};
