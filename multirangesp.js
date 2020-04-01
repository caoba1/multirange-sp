function initMultirangeSliders(){
const multiRangeElements = document.getElementsByClassName('multirange');
for (var i = 0; i < multiRangeElements.length; i++) {
    let _multiRangeElement = multiRangeElements[i];

    /* Initialize new multirange parent div properties */
    _multiRangeElement.highValue = 100;
    _multiRangeElement.lowValue = 0;

    /* Since we only have two thumbs, we only get one high
     * and one low child element per element */
    /*let lowValElement = _multiRangeElement.getElementsByClassName('multirange-low-val');
    let highValElement = _multiRangeElement.getElementsByClassName('multirange-high-val');*/


    /* Add event listeners */
    _multiRangeElement.addEventListener('input', e => {
      let _t = e.target;
      /*_t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);*/
      if (_t.id==='lowVal'){
        /** TODO: **/
        if (_multiRangeElement.highValue <= parseInt(_t.value)){
          _t.value = toString(parseInt(_multiRangeElement.highValue) - 1);
          _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
        } else {
          _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
        }
       _multiRangeElement.lowValue =_t.value;
    }
      else if (_t.id==='highVal'){
        /** TODO: **/
        if (_multiRangeElement.lowValue >= parseInt(_t.value)){
          _t.value = (parseInt(_multiRangeElement.lowValue) + 1);
          _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
        } else {
          _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value);
        }
       _multiRangeElement.highValue =_t.value;
    }
    showVals();
    }, false);

}
} // function initMultirangeSliders


function showVals(){
  document.getElementById('property_one').innerHTML="Slider 1 is now at >> low:"+document.getElementById('slider1').lowValue+"::high:"+document.getElementById('slider1').highValue;
}

initMultirangeSliders()
showVals()
