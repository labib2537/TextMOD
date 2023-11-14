import React from 'react'

export default function About(props) {
  return (
    <>
        <div className="container">
            <h3 style={{color: props.mode === 'dark'?'white':'black'}}>About us</h3>
        <div class="accordion " id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ '--bs-caret-color': props.mode === 'dark' ? 'white' : 'black' }}>
        1. Converted to Uppercase
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class={`accordion-body bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`}>
      It allows you to convert your text from any format into uppercase.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      2. Converted to Lowercase

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class={`accordion-body bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`}>
      It allows you to convert your text from any format into lowercase.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      3. Remove Extra Space

      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class={`accordion-body bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`}>

      It allows you to remove all the extra spaces from the text area.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      4. Count Words & Characters

      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class={`accordion-body bg-${props.mode} text-${props.mode === 'dark'?'white':'black'}`}>

      It allows you to track the number of words and characters.
      </div>
    </div>
  </div>
</div>
        </div>
    </>
  )
}
