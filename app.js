/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MailMe.Application',

    name: 'MailMe',

    requires: [
        // This will automatically load all classes in the MailMe namespace
        // so that application classes do not need to require each other.
        'MailMe.*'
    ],

    // The name of the initial view to create.
    mainView: 'MailMe.view.main.Main'
});
