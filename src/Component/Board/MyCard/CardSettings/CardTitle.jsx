// Modules
import React from 'react';
import { connect } from 'react-redux';

// Components
import InputText from '../../../Input/InputText';

// Actions
import { setCardName } from '../../../../action/actionCard';

const CardTitle = ({card, dispatchSetCardName}) => (
  <span className="creator">
    <i class="fa fa-cog" aria-hidden="true"></i>
    <InputText
    className="changeNameInput"
      value={card.name}
      placeHolder="Card Name"
      resetable
      onChange={(value) => dispatchSetCardName(card.id,value)}
    />
  </span>
);

const mapStateToProps = (state, props) => ({
  card : state.cards.find(card => card.id === props.idCard),
})

const mapDispatchToProps = (dispatch, props) => ({
  dispatchSetCardName: (id,name) => dispatch(setCardName(id, name))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTitle); 