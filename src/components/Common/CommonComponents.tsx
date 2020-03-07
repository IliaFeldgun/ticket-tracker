import React from 'react';

interface ISearchBoxProps {
    handleFilter: (filter: string) => void,
}
export class SearchBox extends React.PureComponent<ISearchBoxProps>{
    render() {
        return (
            <input className="search-box" type="text" 
            onChange={(event) => this.props.handleFilter(event.target.value)}></input>
        )
    }
}

interface ICreateButtonProps {
    handleCreation: (event : React.MouseEvent) => void,
}
export class CreateButton extends React.PureComponent<ICreateButtonProps>{
    render() {
        return (
            <button className="create-button" onClick={this.props.handleCreation}>Create Ticket</button>
        )
    }
}