// @flow

import { connect } from "react-redux";

import Main from "../components/ui/Main/Main";

const mapStateToProps = state => ({
  options: state.fragments,
  navSelected: state.menu,
  timerRunning: state.timerRunning,
  timerVisible: state.timerVisible,
  result: state.result,
  activeTextID: state.activeID
});

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
