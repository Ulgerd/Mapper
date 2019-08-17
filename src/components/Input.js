import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setNewDot } from '../actions/rootActions.js'
import { strToCoordsReq } from '../utils/request.js'
import { formatDotData } from '../utils/formatDotData.js'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
`
export const onEnter = async (e, location, setInputVal, setNewDot) => {
  if (e.key === 'Enter' && location !== '') {
    setInputVal('')
    let locData = await strToCoordsReq(location);
    if (locData.length > 0) {
      let formData = formatDotData(locData[0].GeoObject);
      setNewDot(formData)
    } else {
      alert("По вашему запросу ничего не найдено")
    };
  }
}

export function Input(props) {
  const [inputVal, setInputVal] = useState('');
  return (
      <div>
        <StyledInput
          onChange = {(e) => setInputVal(e.target.value)}
          value={inputVal}
          onKeyPress={(e) => onEnter(e, inputVal, setInputVal, props.setNewDot)}
        />
      </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setNewDot: (formData) => {dispatch(setNewDot(formData))},
})

export default connect(null, mapDispatchToProps) (Input);
