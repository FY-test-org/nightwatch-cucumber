const chromedriver = require('chromedriver');

module.exports = {
  src_folders : ["tests"], //tests is a folder in workspace which has the step definitions
  page_objects_path: 'pageObjects',
  test_settings: {
    use_xpath : true,
    default: {
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 4444,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          excludeSwitches: ["enable-automation"],
          args: [
            "headless",
            "window-size=1920,1080",
            "disable-gpu",
            "start-maximized",
            "no-sandbox",
          ],
        },
      },
      screenshots: {
        enabled: true,
        on_failure: true,
        path: 'Screenshots'
      }
    }
  }
};
