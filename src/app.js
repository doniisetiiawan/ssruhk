/* eslint-disable react/jsx-filename-extension */
import PropTypes from 'prop-types';
import React from 'react';

const App = ({ gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
);

export default App;

App.propTypes = {
  gists: PropTypes.array,
};

App.defaultProps = {
  gists: [],
};
