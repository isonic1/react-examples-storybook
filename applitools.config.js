module.exports = {
    
    //https://www.npmjs.com/package/@applitools/eyes-storybook
    
    /* Server configuration */
    serverUrl: "https://eyesapi.applitools.com",
    apiKey: process.env.APPLITOOLS_API_KEY,  // as default used value from environment variable
    appName: 'My Storybook',
    showLogs: true,
    batchName: 'MyStorybookBatch',
    batchId: process.env.APPLITOOLS_BATCH_ID,
    //parentBranchName: process.env.LAST_KNOWN_BRANCH_NAME, //aka 2.0
    
    // include: ({name, kind, parameters}) => {
    //     return /to Storybook/.test(name)
    // },

    // ignoreRegions: [
    //     { selector: '#root > div > header > img' }
    // ],
       
    // browser: [
    //    { width: 500,   height: 600, name: 'chrome'  }
    // ],
 
    browser: [
       { deviceName: 'iPhone X', screenOrientation: 'portrait'  },
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
        args: ['--no-sandbox'], 
        headless: false, 
        devtools: false
    },
    
     

    //showEyesSdkLogs: true, // default is disabled

    //showStorybookOutput: true, // default is disabled
       
    //saveDebugData: true,

};