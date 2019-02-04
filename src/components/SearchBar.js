import React from 'react';

class SearchBar extends React.Component{

    state = {term : ''}; 

    //We use an air function to mitigate the 'this' reference problem 
    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image search</label>
                    <input 
                        type='text'
                        value={this.state.term} 
                        onChange={(e)=> this.setState({term : e.target.value})}
                    />
                </div>
            </form>
        </div>);
    }
}

export default SearchBar;