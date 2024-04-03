Ext.define('MailMe.model.Email', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'subject', type: 'string' },
        { name: 'sender', type: 'string' },
        { name: 'date', type: 'date' },
        { name: 'body', type: 'string' }
    ]
});
