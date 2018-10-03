import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/calendarActions';
import Calendar from './components/Calendar';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Calendar);
