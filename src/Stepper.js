import React, { Component } from 'react';
import styles from './styles';
import Progress, {Stage} from './components/Progress';
import Steps, {Step} from './components/Steps';


const Header = ({title}) => (
	<div style={styles.header}>{title}</div>
)

class Stepper extends Component {
	static Progress = Progress
	static Steps = Steps
	static Stage = Stage
	static Step = Step
	static Header = Header
	render() {
		return (
			<div style={styles.container}>
				{this.props.children}
			</div>
		);
	}
}

export default Stepper;
