import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const ENTER_KEY = 13;

// testing post commit hook

// // Task -> HTML
// // Produces Markup for list item given a task object
// function TaskListItem(props) {
// 	const taskDescription = props.description;
// 	return (
// 		<li className="task-list-item">{taskDescription}</li>
// 	);
// }


// // List of Tasks -> HTML
// // Produces Markup for list from list of task objects
// function TaskList(props) {
// 	const taskListItems = props.tasks.map( (task) => {
// 		return (
// 			<TaskListItem
// 				key={task.id}
// 				description={task.data} />
// 		);
// 	});

// 	return (
// 		<ul className="task-list">{taskListItems}</ul>
// 	);
// }


/**
 * Second
 */
class Duration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			start: Date.now(),
			duration: 0
		}
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		let updatedTime = Math.round( ( Date.now() - this.state.start ) / 1000 )
		this.setState({
			duration: updatedTime
		})
	}

	render() {
		
		return (
			<div className="objective-duration">{this.state.duration}</div>
		)
	}

}

class ObjectiveTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ObjectiveText: ''
		};
		this.handleNewActionKeyDown = this.handleNewActionKeyDown.bind(this);
	}

	handleNewActionKeyDown (event) {
		if ( event.which !== ENTER_KEY ) {
			return;
		}

		var val = this.textInput.value.trim();
		if (val) {

			this.setState({
				ObjectiveText: val
			});

			this.textInput.value = "";
		}
	}

	render () {
		let main;

		if( !this.state.ObjectiveText ) {
			main = (
				<div className="new-input-box">
					<div className="content-spacing">
						<input
							ref={(input) => { this.textInput = input; }}
							className="new-input"
							type="text"
							placeholder="Set Objective"
							onKeyDown={this.handleNewActionKeyDown}
							autoFocus={true}
						/>
					</div>
				</div>
			)
		} else {
			main = (
				<div>
					<h1 className="objective-text">{this.state.ObjectiveText}</h1>
					<Duration />
				</div>
			)
		}

		return (
			<div className="main">
				{main}
			</div>
		);
	}
}


ReactDOM.render(
	<ObjectiveTimer/>,
	document.getElementById('root')
);