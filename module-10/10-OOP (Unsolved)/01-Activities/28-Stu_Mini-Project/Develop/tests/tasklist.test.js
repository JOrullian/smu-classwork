const TaskList = require('../lib/tasklist');
const TaskListItem = require('../lib/tasklistitem');

describe('TaskList', () => {
    it('should render ul with tasks', () => {
        const items = [
            new TaskListItem(['Task 1']),
            new TaskListItem(['Task 2'], true),
            new TaskListItem(['Task 3']),
        ];

        const html = [
            '<ul class="tasks">',
            '<li class="tasks-item">Task 1</li>',
            '<li class="tasks-item tasks-item-priority">Task 2</li>',
            '<li class="tasks-item">Task 3</li>',
        ].join('');

        const list = new TaskList(items);

        expect(list.render())
    })
})