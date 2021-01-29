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
 
    browser: [
       { width: 800,   height: 600, name: 'firefox' },
       { width: 1000,  height: 600, name: 'chrome'  },
    ],

    concurrency: 50,

    //tapFilePath: './output',
    //jsonFilePath: './output',
    
    showLogs: true,
    
    waitBeforeScreenshot: 1000,
    readStoriesTimeout: 30000,
    puppeteerOptions: { args: ['--no-sandbox'], timeout: 0 },
    
     
    //showEyesSdkLogs: true, // default is disabled

    //showStorybookOutput: true, // default is disabled
       
    //saveDebugData: true,

};