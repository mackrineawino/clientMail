Ext.define('MailMe.view.inbox.InboxGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'inbox',
    reference: 'inboxgrid',
    controller: 'inbox',
    title: 'Inbox',
    store: {
        type: 'inbox'
    },
    columns: [
        {
            xtype: 'actioncolumn',
            width: 30,
            align: 'center',
            style:{
                fontSize: '10px'
            },
            items: [{
                getClass: function(v, metadata, record) {
                    return record.get('starred') ? 'fas fa-star' : 'far fa-star';
                },
                tooltip: 'Toggle Star',
                defaultRendererIconCls: 'far fa-star', 
                handler: function(grid, rowIndex, colIndex) {
                    var record = grid.getStore().getAt(rowIndex);
                    record.set('starred', !record.get('starred'));
                    var starredGrid = Ext.ComponentQuery.query('starredemailgrid')[0];
                    var starredStore = starredGrid.getStore();
                    var starredRecord = starredStore.getById(record.getId());
                    if (starredRecord) {
                        starredRecord.set('starred', record.get('starred'));
                    }
                }
            }]
        },
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
        items: [
            {
                text: 'Compose',
                handler: function() {
                    var composeEmailForm = Ext.create('MailMe.view.inbox.ComposeEmailForm');
                    composeEmailForm.show();
                }
            },
            {
            xtype: 'textfield',
            emptyText: 'Search...',
            width: 250,
            enableKeyEvents: true,
            listeners: {
                keyup: 'onSearch'
            }
        }, 
        '->',
         {
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
        }, {
            text: 'Show Details',
            bind:{
                disabled: '{!inboxgrid.selection}'
            },
            handler: function() {
                var grid = this.up('grid');
                var selectedRecords = grid.getSelection();

                if (selectedRecords.length === 1) {
                    var selectedEmail = selectedRecords[0];
                    var emailDetailsForm = Ext.create('MailMe.view.inbox.EmailDetailsForm', {
                        emailData: selectedEmail.data,
                        context: 'recieved' 
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
    scrollable: true
});
