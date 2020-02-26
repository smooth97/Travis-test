import React from 'react';

import './App.css';

import CKEditor from 'ckeditor4-react';

function CK4() {
  return (
    <div className="App">
        <h2>CKEditor 4</h2>
        <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                />
    </div>
  );
}

export default CK4;
