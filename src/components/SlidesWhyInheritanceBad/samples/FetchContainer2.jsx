import React from 'react';
import { loadData } from './load';

class FetchContainer extends React.Component {
  state = {
    data: null,
    loading: false,
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    this.setState({ loading: true });
    const data = await loadData();
    this.setState({ data, loading: false });
  };
}

export { FetchContainer };
