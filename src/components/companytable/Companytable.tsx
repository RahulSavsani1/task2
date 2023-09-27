import './companytable.css'
import data from '../../companydata.json'
import { BsPieChart } from 'react-icons/bs'
import { GrDocumentDownload } from 'react-icons/gr'
import { Link } from 'react-router-dom'
export const Companytable = () => {

    return (
        <div className='companytable'>
            {data.map((Compdata, index) => {
                // console.log(Compdata.opportunity)
                return (
                    <div className='company_container' key={index}>
                        <div className='company_header'>
                            <h3 className='cmp_header'> {Compdata.company} </h3>
                            <div className='cmp_btn'>
                                <Link to={`/${Compdata.company}`} className='company_btn1'> <BsPieChart /> </Link>
                                <Link to='' className='company_btn2'> <GrDocumentDownload /></Link>
                            </div>
                        </div>
                        <div className='company_middle_data'>
                            <div className='company_middle_data_container'>
                                Applied
                                <p> {Compdata.Applied} </p>
                            </div>
                            <div className='company_middle_data_container'>
                                Recommended
                                <p> {Compdata.Recommended} </p>
                            </div>
                            <div className='company_middle_data_container'>
                                Interview
                                <p> {Compdata.Interview} </p>
                            </div>
                            <div className='company_middle_data_container'>
                                Offer
                                <p> {Compdata.Offer} </p>
                            </div>
                            <div className='company_middle_data_container'>
                                Hired
                                <p> {Compdata.Hired} </p>
                            </div>
                            <div className='company_middle_data_container'>
                                Total Rejected
                                <p> {Compdata.Total_Rejected} </p>
                            </div>
                        </div>
                        <div >
                            <table className='company_table'>
                                <thead>
                                    <tr>
                                        <th> Opportunity Name </th>
                                        <th> Status </th>
                                        <th> Applied </th>
                                        <th> Recommended </th>
                                        <th> Interview </th>
                                        <th> Offer </th>
                                        <th> Hired </th>
                                    </tr>
                                </thead>
                                {
                                    Compdata.opportunity.map((map, ind) => (
                                        <tbody key={ind}>
                                            <tr>
                                                <td rowSpan={3}>{map.name}</td>
                                                <td> Active </td>
                                                <td> {map.Applied.Active}</td>
                                                <td> {map.Recommended.Active}</td>
                                                <td> {map.Interview.Active}</td>
                                                <td> {map.Offer.Active}</td>
                                                <td> {map.Hired.Active}</td>
                                            </tr>
                                            <tr>
                                                <td> Disqualified </td>
                                                <td> {map.Applied.Disqualified}</td>
                                                <td> {map.Recommended.Disqualified}</td>
                                                <td> {map.Interview.Disqualified}</td>
                                                <td> {map.Offer.Disqualified}</td>
                                                <td> {map.Hired.Disqualified}</td>
                                            </tr>
                                            <tr className='sub_total'>
                                                <td> Sub - Total </td>
                                                <td> {map.Applied.Active + map.Applied.Disqualified} </td>
                                                <td> {map.Recommended.Active + map.Recommended.Disqualified} </td>
                                                <td> {map.Interview.Active + map.Interview.Disqualified} </td>
                                                <td> {map.Offer.Active + map.Offer.Disqualified} </td>
                                                <td> {map.Hired.Active + map.Hired.Disqualified} </td>
                                            </tr>
                                        </tbody>
                                    ))
                                }

                            </table>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
