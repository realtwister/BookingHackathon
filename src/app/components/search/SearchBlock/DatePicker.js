import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import NumericInput from 'react-numeric-input';
import 'react-datepicker/dist/react-datepicker.css';

export default class DateRange extends React.Component {
	constructor (props) {
		super(props)
			this.state = {
					startDate: moment('2018-04-29'),
					 endDate: moment('2018-05-03'),
			}
	}

	getInterval() {
		return {startDate: this.state.startDate, endDate: this.state.endDate, maxDuration: this.state.maxDuration};
	}

	handleChange = ({ startDate, endDate }) => {
		startDate = startDate || this.state.startDate
			endDate = endDate || this.state.endDate

			if (startDate.isAfter(endDate)) {
				endDate = startDate.add(1, "days");
			}
		this.setState({startDate, endDate})
	}

	handleChangeStart = (startDate) => this.handleChange({ startDate })

		handleChangeEnd = (endDate) => this.handleChange({ endDate })

		handleChangeMaxDuration = (maxDuration) => this.setState({maxDuration: maxDuration})

		render () {
			return <div className="row">
				<div className="column">
				<DatePicker
				selected={this.state.startDate}
			selectsStart
				startDate={this.state.startDate}
			endDate={this.state.endDate}
			onChange={this.handleChangeStart} />

				<label><NumericInput min={0} onChange={this.handleChangeMaxDuration}/>Max duration.</label>

				<DatePicker
				selected={this.state.endDate}
			selectsEnd
				startDate={this.state.startDate}
			endDate={this.state.endDate}
			onChange={this.handleChangeEnd} />
				</div>
				</div>
		}
}
