import React from 'react';
import style from './SearchBlock.scss';
import DatePicker from './DatePicker'

import SearchBox from './SearchBox.jsx';

const Row = ({children, last})=>(
  <div className={"row"+(last? " last": "")}>
    {children}
  </div>
);

class SearchBlock extends React.Component{
  constructor(){
    super();
    this.state = {
      values:{}
    }
    this.changeVal.bind(this);
  }

  changeVal(key){return (e) => {
      this.setState({values:{...this.state.values, [key]:e.target.value}})
    }
  }

  onSearch(){
    let {onSearch} = this.props;
    var tmp = this.state.values
    tmp.datepicker = this.refs.datepicker.getInterval()
    onSearch(tmp);
  }

  render(){
    return(
      <div className="SearchBlock">
        <h2>
          Search
        </h2>
        <Row>
          <SearchBox onChange={this.changeVal('query').bind(this)} />
        </Row>
        <DatePicker ref = 'datepicker'/>
        <Row last>
          <button onClick={this.onSearch.bind(this)}>Zoek</button>
        </Row>
      </div>
    );
  }
}

export default SearchBlock;
