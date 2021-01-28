module.exports = {
    
    //https://www.npmjs.com/package/@applitools/eyes-storybook
    
    /* Server configuration */
    serverUrl: "https://eyesapi.applitools.com",
    apiKey: "7499RRiqRDACEiJb6R5wUX8NsfB2109oY446i101H3w3F6Xg110",  // as default used value from environment variable
    appName: 'My Storybook',
    showLogs: true,
    batchName: 'MyStorybookBatch',
    //parentBranchName: process.env.LAST_KNOWN_BRANCH_NAME, //aka 2.0
 
    browser: [
       { width: 800,   height: 600, name: 'firefox' },
       { width: 1000,  height: 600, name: 'chrome'  },
    ],

    concurrency: 50,

    //tapFilePath: './output',
    //jsonFilePath: './output',
    
    showLogs: true,
    
    readStoriesTimeout: 180000,
    waitBeforeScreenshot: 250,
    
    puppeteerOptions: {
        executablePath: '/usr/bin/google-chrome',
        headless: true, 
        devtools: true,
        args: ['--no-sandbox']
    },
    
     

    //showEyesSdkLogs: true, // default is disabled

    //showStorybookOutput: true, // default is disabled
       
    //saveDebugData: true,

};