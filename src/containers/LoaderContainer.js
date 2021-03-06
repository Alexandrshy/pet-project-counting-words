// @flow

import { connect } from "react-redux";

import Loader from "../components/ui/Loader/Loader";

const mapStateToProps = state => ({
  loading: state.loadingSearchResult
});

const LoaderContainer = connect(mapStateToProps)(Loader);

export default LoaderContainer;
