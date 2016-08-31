var React = require('react');
var ListItem = require('./ListItem.jsx'); //import non npm module

var ingredients = [{"id":0,"text":"ham"}, {"id":1,"text":"cheese"}, {"id":2,"text":"bread"}];

var List = React.createClass({
    render: function() {
        var listItems = ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
