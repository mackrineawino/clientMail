Ext.define('MailMe.view.inbox.EmailDetailsForm', {
    extend: 'Ext.window.Window',
    xtype: 'emaildetailsform',

    title: 'Email Details',
    width: 400,
    modal: true,
    layout: 'fit',

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'form',
            layout: 'anchor',
            bodyPadding: 10,
            defaults: {
                xtype: 'displayfield',
                anchor: '100%',
                labelWidth: 100
            },
            items: [{
                fieldLabel: 'Subject',
                name: 'subject',
                value: me.emailData.subject
            }, {
                fieldLabel: 'Sender',
                name: 'sender',
                value: me.emailData.sender
            }, {
                fieldLabel: 'Date',
                name: 'date',
                value: Ext.Date.format(me.emailData.date, 'Y-m-d H:i:s')
            }, {
                xtype: 'textareafield',
                fieldLabel: 'Body',
                name: 'body',
                value: me.emailData.body,
                height: 150
            }]
        }];

        me.callParent();
    }
});
