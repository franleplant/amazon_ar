import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './App.css';
import List from './List';
import Tabs from './Tabs';
import SearchForm from './SearchForm';
import ListMeta from './ListMeta';

class App extends React.Component {

  state = {
    data: [],
    source: 0,
    searchText: '',
    loading: false,
  }

  search = async (e) => {
    e.preventDefault();
    this.setState({loading: true});
    const response = await fetch(`/data?search=${this.state.searchText}`);
    const data = await response.json();
    console.log('res', data)
    this.setState({data: data, loading: false});
  }

  handleSearchText = (e) => {
    this.setState({searchText: e.target.value});
  }

  handleSourceChange = (source) => {
    this.setState({source})
  }


  render() {
    const data = this.state.data[this.state.source];

    return (
      <div className="App">

        <h1>Productos de Amazon que llegan a la puerta de tu casa en Argentina</h1>
        <Panel>
          <SearchForm
            value={this.state.searchText}
            onChange={this.handleSearchText}
            onSubmit={this.search}
            loading={this.state.loading}
          />
        </Panel>

        {(() => {
          if (!this.state.data.length) {
            return;
          }

          return (
            <div>
              <Tabs sources={this.state.data.map(({source}) => source)} onChange={this.handleSourceChange}/>
              <Panel style={{border: 0}}>
                <ListMeta source={data.source}/>
                <List source={data.source} data={data.data} />
              </Panel>
            </div>
          );
        })()}

      </div>
    );
  }
}

export default App;
