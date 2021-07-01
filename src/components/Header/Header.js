import React from 'react'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import WifiIcon from '@material-ui/icons/Wifi';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import Battery90Icon from '@material-ui/icons/Battery90';
import { Head } from './styled';

const Header = () => {
    return (
        <Head>
            <div>
                <div>
                    <SignalCellularAltIcon />
                    <WifiIcon />
                </div>

                <p>09:41 AM</p>

                <div>
                    <BluetoothIcon />
                    <Battery90Icon />
                </div>
            </div>

            <h3>FutureEats</h3>

            <hr />


        </Head>
    )
}
export default Header