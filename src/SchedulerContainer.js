import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/prospectActions';
import Scheduler from './components/Scheduler';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Scheduler);
