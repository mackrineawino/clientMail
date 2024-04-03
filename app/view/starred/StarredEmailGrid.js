Ext.define('MailMe.view.starred.StarredEmailGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'starredemailgrid',
    title: 'Starred Emails',
    store: {
        type: 'chained',
        source: ['inbox', 'outbox'], 
        filters: [{
            property: 'starred',
            value: true
        }]
    },
    columns: [
        { text: 'Subject', dataIndex: 'subject', flex: 1 },
        { text: 'Sender/Recipient', dataIndex: 'senderRecipient', flex: 1, renderer: 'renderSenderRecipient' },
        { text: 'Date', dataIndex: 'date', width: 120 }
    ],
    height: 400,
    width: '100%',
    renderSenderRecipient: function(value, metaData, record) {
        return record.get('sender') ? record.get('sender') : record.get('recipient');
    }
});
