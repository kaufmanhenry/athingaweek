'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');
const Project = require('../shared/project.jsx');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout {...this.props}>
        Hello World
      </Layout>
    );
  }
}

module.exports = Index;
