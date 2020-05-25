import React from 'react'; 
import { buyPastas } from '../redux';
import { connect } from 'react-redux';

const PastaContainer = () => {

    return(
        <div>
            <h2>number of pastas kg :</h2>
            <button> Buy pasta</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
      pastas: state.pastas
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      buyPastas: () => (dispatch(buyPastas()))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(PastaContainer)