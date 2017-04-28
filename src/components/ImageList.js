import React, {
    Component
} from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import Row from './Row';

class ImageList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.props.images);
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={(data) => <Row {...data} />}
            />
        )
    }
}

const mapStateToProps = state => {
    return { images: state.images };
};

export default connect(mapStateToProps)(ImageList);