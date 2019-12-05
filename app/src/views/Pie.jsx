// Pie chart creation based off of: https://github.com/mdvacca/rn-d3-art-charts

import React from 'react';
import {
  View,
  ART,
} from 'react-native';
import * as shape from 'd3-shape';

const {
  Surface,
  Group,
  Shape,
} = ART;

const d3 = {
  shape,
};

const styles = {
  container: {
    margin: 20,
  },
  label: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'normal',
  },
};

export default class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.createPieChart = this.createPieChart.bind(this);
    this.value = this.value.bind(this);
    this.color = this.color.bind(this);
  }

  // methods used to tranform data into piechart:
  // TODO: Expose them as part of the interface
  value(item) { return item.number; }

  color(index) {
    const { colors } = this.props;
    return colors[index];
  }

  createPieChart(index) {
    const { data, pieWidth } = this.props;
    const arcs = d3.shape.pie()
      .value(this.value)(data);

    const arc = d3.shape.arc()
      .outerRadius(pieWidth / 2)
      .padAngle(0.05)
      .innerRadius(30);

    const arcData = arcs[index];
    const path = arc(arcData);
    return path;
  }

  render() {
    const {
      width,
      height,
      pieWidth,
      pieHeight,
      data,
    } = this.props;
    const { margin } = styles.container;
    const x = pieWidth / 2 + margin;
    const y = pieHeight / 2 + margin;

    return (
      <View width={width} height={height}>
        <Surface width={width} height={height}>
          <Group x={x} y={y}>
            {
              data.map((item, index) => (
                <Shape
                  d={this.createPieChart(index)}
                  stroke={this.color(index)} // green line
                  fill={this.color(index)}
                  strokeWidth={3}
                  key={`pie_shape_${index}`}
                />
              ))
            }
          </Group>
        </Surface>
      </View>
    );
  }
}
