Ext.define('MailMe.view.inbox.InboxGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.inbox',

    onSearch: function(textfield, e) {
        var value = textfield.getValue(),
            grid = this.getView(),
            store = grid.getStore();

        if (value) {
            store.clearFilter(true);
            store.filterBy(function(record) {
                var subject = record.get('subject'),
                    sender = record.get('sender'),
                    date = Ext.Date.format(record.get('date'), 'Y-m-d');

                return subject.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    sender.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
                    date.indexOf(value) !== -1;
            });
        } else {
            store.clearFilter();
        }
    }
});
