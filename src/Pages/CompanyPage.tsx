import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { useParams } from "react-router-dom"
import Data from "../companydata.json";
import { Header } from '../components/header/Header';
import { InfoCards1, InfoCards2 } from '../components/InfoCards/InfoCards';
import { Chart } from "../components/Chart/Chart";
import { TableComponent } from '../components/tableComponent/TableComponent';

export const CompanyPage = () => {
    const { name } = useParams();
    const CompanyData = Data.filter((Data) => Data.company.toLowerCase() === name?.toLowerCase())
    console.log(CompanyData)
    return (
        <>
            <div className='main_container'>
                <Header name={"Program Overview - " + CompanyData[0].company} />
                <h3> UX Internship </h3>
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
                <h3> Art Internship </h3>
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
            </div>
        </>
    )
}
