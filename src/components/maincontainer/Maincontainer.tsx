import './maincontainer.css'
import { Chart } from '../Chart/Chart'
import { InfoCards1, InfoCards2 } from '../InfoCards/InfoCards';
import { TableComponent } from '../tableComponent/TableComponent';
import { Header } from '../header/Header';
import { BottomHeader } from '../header/BottomHeader';
import {Link} from "react-router-dom"
import { Companytable } from '../companytable/Companytable';

export const Maincontainer = () => {
 
    return (
        <div className='main_container'>
            <Header name={"Opportunity Overview"} />
            <div className='top_container'>
                <div className="topleft_container">
                    <InfoCards1 />
                    <Chart />
                </div>
                <div className="topright_container">
                    <TableComponent />
                    <InfoCards2 />
                </div>
            </div>
            <div className="bottom_container">
                <BottomHeader />
                <Companytable />
                {/* <div className="bottom_data_container">
                    <Link to={"/Google"}>Google</Link>
                </div> */}
            </div>
        </div>
    )
}
