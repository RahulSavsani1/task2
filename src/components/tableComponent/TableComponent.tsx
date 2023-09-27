import './tableComponent.css'
export const TableComponent = () => {
    const qualifiedPercentage="78%"
    const disqualifiedPercentage="22%"
    return (
        <div className='right_top_container'>
            <h4> Total Candidate Flow</h4>
            <h2> 4,567</h2>
            <div className='progress'>
                <div className='qualified' style={{ width: `${qualifiedPercentage}` }}> </div>
                <div className='disqualified' style={{ width: `${disqualifiedPercentage}` }}> </div>
            </div>

            <table className='righttop_table' >
                <thead>
                    <tr>
                        <th style={{ width: "50%", textAlign: 'left' }}> Stage </th>
                        <th style={{ width: "25%", textAlign: "right" }}> Qualified </th>
                        <th style={{ width: "25%", textAlign: "right" }}> Disqualified</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "left" }}> Applied </td>
                        <td> 3,122 </td>
                        <td> 1,445 </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left" }}> Recommended </td>
                        <td> 2,164 </td>
                        <td> 958 </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left" }}> Interview </td>
                        <td> 443 </td>
                        <td> 1721 </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left" }}> offer </td>
                        <td> 183 </td>
                        <td> 260 </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "left" }}> Hired </td>
                        <td> 118 </td>
                        <td> 65 </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
