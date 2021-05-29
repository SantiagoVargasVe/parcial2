import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui'
import { Animation } from '@devexpress/dx-react-chart'

export default class Consumption extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Paper>
        <Chart data={this.props.data}>
          <PieSeries valueField="energy" argumentField="room" />
          <Title text="Power usage (kwH) - Today" />
          <Animation />
        </Chart>
      </Paper>
    )
  }
}
