

// const heading = React.createElement('h1',{id: "heading"},"Hellow");

// const element = React.createElement('div',{id: 'parent'},
//     React.createElement('div',{id : 'child'},[
//         React.createElement('h1',{id: "head1"},"This is a heading 01"),
//         React.createElement('h1',{id: "head2"},"This is a heading 02")
//     ])
//     );


const element = React.createElement('div',{id:"parent"},
    [
        React.createElement('div',{id:'child1'},
            [
                React.createElement('h1',{},"Heading 1"),
                React.createElement('h2',{},"Heading 2")
            ]
        ),
        React.createElement('div',{id:'child2'},
            [
                React.createElement('h1',{},"Heading 1"),
                React.createElement('h2',{},"Heading 2")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);