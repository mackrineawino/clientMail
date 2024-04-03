Ext.define('MailMe.store.SentMail', {
    extend: 'Ext.data.Store',
    alias: 'store.outbox',
    model: 'MailMe.model.Email',
  
    data: [
        { id: 1, subject: 'Meeting Confirmation', sender: 'user@example.com', date: '2024-04-01', body: 'Confirmation of our meeting tomorrow.' },
        { id: 2, subject: 'Project Update', sender: 'user@example.com', date: '2024-04-02', body: 'An update on the project progress.' },
        { id: 3, subject: 'Feedback Request', sender: 'user@example.com', date: '2024-04-03', body: 'Request for feedback on recent services.' },
        { id: 4, subject: 'Invoice', sender: 'user@example.com', date: '2024-04-04', body: 'Attached is the invoice for this month.' },
        { id: 5, subject: 'Job Application Confirmation', sender: 'user@example.com', date: '2024-04-05', body: 'Confirmation of receipt of job application.' },
        { id: 6, subject: 'Training Session Reminder', sender: 'user@example.com', date: '2024-04-06', body: 'Reminder: Training session tomorrow.' },
        { id: 7, subject: 'Holiday Greetings', sender: 'user@example.com', date: '2024-04-07', body: 'Wishing you happy holidays!' },
        { id: 8, subject: 'Client Meeting Summary', sender: 'user@example.com', date: '2024-04-08', body: 'Summary of the client meeting.' },
        { id: 9, subject: 'Welcome Email', sender: 'user@example.com', date: '2024-04-09', body: 'Welcome to our platform!' },
        { id: 10, subject: 'Project Completion', sender: 'user@example.com', date: '2024-04-10', body: 'Congratulations! The project is completed.' }
    ]
});
