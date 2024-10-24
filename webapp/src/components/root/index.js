import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeRootModal, add, autocompleteUsers} from 'actions';
import {isRootModalVisible, getMessage, getPostID, getCurrentTeamRoute} from 'selectors';

import Root from './root';

const mapStateToProps = (state) => ({
    visible: isRootModalVisible(state),
    message: getMessage(state) + (getPostID(state) ? '\n[메시지 바로가기](' + getCurrentTeamRoute(state) + 'pl/' + getPostID(state) + ')' : ''),
    postID: getPostID(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    close: closeRootModal,
    submit: add,
    autocompleteUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Root);
