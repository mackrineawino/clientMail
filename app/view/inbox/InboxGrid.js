Ext.define('MailMe.view.inbox.InboxGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',
    reference: 'inboxgrid',
    title: 'Inbox',
    store: {
        type: 'inbox'
    },
    columns: [
        { text: 'Subject', dataIndex: 'subject', flex: 1 },
        { text: 'Sender', dataIndex: 'sender', width: 150 },
        { text: 'Date', dataIndex: 'date', width: 120 }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'MULTI'
    },
    height: 500,
    width: '100%',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text: 'Compose',
            handler: function() {
                var composeEmailForm = Ext.create('MailMe.view.inbox.ComposeEmailForm');
                composeEmailForm.show();
            }
        }, {
            text: 'Delete',
            bind:{
                disabled: '{!inboxgrid.selection}'
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
        }]
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
});
