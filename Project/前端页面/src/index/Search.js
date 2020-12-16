import React from 'react';

import { SearchBar, Button, WhiteSpace } from 'antd-mobile';

class Search extends React.Component {
    state = {
        value: '',
    };
    onChange = (value) => {
        this.setState = ({
            value
        });
    }
    clear = () => {
        this.setState({
            value: ''
        });
    }
    handleClick = () => {
        this.manualFocusInst.focus();
    }
    render() {
        return (<div>
            <SearchBar placeholder="Search"
                ref={ref => this.autoFocusInst = ref}
                showCancelButton
                onCancel={() => this.props.history.goBack()} />
        </div>);
    }
}
export default Search;

