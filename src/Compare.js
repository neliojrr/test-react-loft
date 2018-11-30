import React from 'react';
import PropTypes from 'prop-types';
import Version from './Version';

export default class Compare extends React.Component {
  constructor() {
    super();

    this.state = {
      differences: []
    };

    this.checkDifferences = this.checkDifferences.bind(this);
  }

  componentDidMount() {
    this.checkDifferences();
  }

  componentDidUpdate(prevProps) {
    if (this.props.versionA.id !== prevProps.versionA.id) {
      this.checkDifferences();
    }
  }

  checkDifferences() {
    const { versionA, versionB } = this.props;
    if (versionA.data && versionB.data) {
      const differences = Object.keys(versionA.data).reduce((diff, key) => {
        if (versionA.data[key] !== versionB.data[key]) {
          diff.push(key);
        }
        return diff;
      }, []);
      this.setState({ differences });
    }
  }

  render() {
    const { versionA, versionB } = this.props;
    const { differences } = this.state;

    return (
      <div>
        <div
          style={{
            ...styles.main,
            width: '46%',
          }}
        >
          <Version data={versionA.data} />
        </div>
        <div
          style={{
            ...styles.main,
            width: '46%',
            marginLeft: '1%'
          }}
        >
          <Version data={versionB.data} differences={differences} />
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    border: '1px solid #000000',
    display: 'inline-block'
  }
}

Compare.propTypes = {
  versionA: PropTypes.object,
  versionB: PropTypes.object
};
