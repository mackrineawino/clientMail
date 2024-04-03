Ext.define('MailMe.view.sent.SentMailGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'sentmail',
    reference: 'outboxgrid',
    title: 'Sent Mail',
  
    store: {
        type: 'outbox'
    },
    columns: [
        { text: 'Subject', dataIndex: 'subject', flex: 1 },
        { text: 'Recipient', dataIndex: 'sender', width: 150 },
        { text: 'Date', dataIndex: 'date', width: 120 }
    ],
    height: 500,
    selModel: {
        selType: 'checkboxmodel',
        mode: 'MULTI'
    },
    width: '100%',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [ {
            text: 'Delete',
            bind:{
                disabled: '{!outboxgrid.selection}'
            },
            handler: function() {
                var grid = this.up('grid');
                var selectedRecords = grid.getSelection();

                if (selectedRecords.length > 0) {
                    grid.getStore().remove(selectedRecords);
                    Ext.Msg.alert('Success', 'Selected emails deleted successfully.');
                } else {
                    Ext.Msg.alert('Warning', 'Please select at least one email to delete.');
                }
            }
        },
        {
            text: 'Show Details',
            bind:{
                disabled: '{!outboxgrid.selection}'
            },
            handler: function() {
                var grid = this.up('grid');
                var selectedRecords = grid.getSelection();

                if (selectedRecords.length === 1) {
                    var selectedEmail = selectedRecords[0];
                    var emailDetailsForm = Ext.create('MailMe.view.inbox.EmailDetailsForm', {
                        emailData: selectedEmail.data
                    });
                    emailDetailsForm.show();
                } else {
                    Ext.Msg.alert('Warning', 'Please select exactly one email to view details.');
                }
            }
        }]
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
});
