import React, {useState} from 'react';
import { connect } from 'react-redux';
import { setNewDot } from '../actions/rootActions.js'
import { request } from './request.js'
import { formatDotData } from './formatDotData.js'

const onEnter = async (e, location, setInputVal, setNewDot) => {
  if (e.key === 'Enter' && location !== '') {
    setInputVal('')
    let locData = await request(location);
    if (locData.data
        .response
        .GeoObjectCollection
        .featureMember.length > 0) {
      let formData = formatDotData(locData
                                  .data
                                  .response
                                  .GeoObjectCollection
                                  .featureMember[0]
                                  .GeoObject);
      setNewDot(formData)
    } else {
      alert("По вашему запросу ничего не найдено")
    };
  }
}

function Input(props) {
  const [inputVal, setInputVal] = useState('');
  return (
      <div>
        <input
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
