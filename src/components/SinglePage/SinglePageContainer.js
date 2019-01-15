import React, {Component} from 'react';
import SinglePage from './SinglePage';

class SinglePageContainer extends Component {
    render() {
        return (
            <SinglePage page={this.props.match.params.slug}/>
        )
    }
}

export default SinglePageContainer;