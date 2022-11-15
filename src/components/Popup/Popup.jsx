

import 'reactjs-popup/dist/index.css';
import Connect from '../Connect/Connect';
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import './Popup.css'
import React from 'react';
import Popup from 'reactjs-popup';

export default () => (
    <Popup
        trigger={<button className="button"> <Connect /> </button>}
        modal
        nested
    >
        {close => (
            <div className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>
                <ConnectWallet />
            </div>
        )}
    </Popup>
);