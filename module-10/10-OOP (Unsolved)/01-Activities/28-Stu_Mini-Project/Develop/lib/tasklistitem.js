const Component = require('./component');

class TaskListItem extends Component {
    constructor(children, priority = false) {
        super(chilren);
        this.priority = priority;
    }

    render() {
        const classNames = this.priority ? 'tasks-item tasks-item-priority' : 'tasks-item';

        return `<li class="${classNames}>${this.renderInnerHtml()}</li>`
    }
}
