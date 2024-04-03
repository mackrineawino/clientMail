Ext.define('MailMe.view.inbox.ComposeEmailForm', {
    extend: 'Ext.window.Window',
    xtype: 'composeemailform',

    title: 'Compose Email',
    width: 400,
    modal: true,
    layout: 'fit',

    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyPadding: 10,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60
        },
        items: [{
            fieldLabel: 'To',
            name: 'to',
            allowBlank: false
        }, {
            fieldLabel: 'Subject',
            name: 'subject',
            allowBlank: false
        }, {
            xtype: 'textareafield',
            fieldLabel: 'Body',
            name: 'body',
            height: 150,
            allowBlank: false
        }],
        buttons: [{
            text: 'Send',
            formBind: true, // only enabled once the form is valid
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    // Send email logic here (e.g., submit form data)
                    form.reset();
                    Ext.Msg.alert('Success', 'Email sent successfully.');
                }
            }
        }, {
            text: 'Cancel',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});
