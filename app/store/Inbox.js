Ext.define('MailMe.store.Inbox', {
    extend: 'Ext.data.Store',
    model: 'MailMe.model.Email',
    alias: 'store.inbox',
    data: [
        { id: 1, subject: 'Hello', sender: 'user@example.com', date: '2024-04-01', body: 'This is a test email.' },
        { id: 2, subject: 'Meeting', sender: 'boss@example.com', date: '2024-04-02', body: 'Reminder: Meeting at 10 AM tomorrow.' },
        { id: 3, subject: 'Report', sender: 'manager@example.com', date: '2024-04-03', body: 'Please find the attached report.' },
        { id: 4, subject: 'Vacation', sender: 'colleague@example.com', date: '2024-04-04', body: 'I will be on vacation next week.' },
        { id: 5, subject: 'Project Update', sender: 'teamlead@example.com', date: '2024-04-05', body: 'Here is the latest update on our project.' },
        { id: 6, subject: 'Training Session', sender: 'trainer@example.com', date: '2024-04-06', body: 'Training session scheduled for next Thursday.' },
        { id: 7, subject: 'Feedback Request', sender: 'client@example.com', date: '2024-04-07', body: 'We would appreciate your feedback on our services.' },
        { id: 8, subject: 'Invoice', sender: 'accountant@example.com', date: '2024-04-08', body: 'Attached is the invoice for this month.' },
        { id: 9, subject: 'Job Opportunity', sender: 'recruiter@example.com', date: '2024-04-09', body: 'Exciting job opportunity at our company.' },
        { id: 10, subject: 'Happy Birthday!', sender: 'friend@example.com', date: '2024-04-10', body: 'Wishing you a fantastic birthday!' }
    ]
});
