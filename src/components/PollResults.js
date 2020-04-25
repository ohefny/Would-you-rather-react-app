import { Component } from "react";
import { connect } from "react-redux";
import {getPollStatsUIModel} from "./ui_mappers"
class PollResults extends Component {}

function mapStateToProps({ authedUser, polls }, { id }) {
  return getPollStatsUIModel(polls[id],authedUser)
}
export default connect(mapStateToProps)(PollResults);