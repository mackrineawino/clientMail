Ext.define('MailMe.view.sent.SentMailGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'sentmail',
    reference: 'outboxgrid',
    controller: 'sentmail',
    title: 'Sent Mail',
  
    store: {
        type: 'outbox'
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
                  
                }
            }]
        },
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
        items: [ 
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
            iconCls: 'far fa-trash-alt',
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
                        emailData: selectedEmail.data,
                        context: 'sent' 
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
