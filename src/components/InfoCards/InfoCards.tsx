
import { BsGraphUpArrow, BsGraphDownArrow } from 'react-icons/bs'
import './infoCards.css'


const topleft_data = [
    {
        status: "Applied",
        applications: "3122",
        previous: "Previous Period",
        pre_applications: "1590",
        graphValue: () => (
            <div className='prev_graph_content' style={{ height: '1.75rem', borderRadius: "1rem", background: "lightBlue", padding: "5px .5rem" }}>
                <BsGraphUpArrow />
                <div>
                    15%
                </div>
            </div>
        )
    },
    {
        status: "Offer",
        applications: "183",
        previous: "Previous Period",
        pre_applications: "71",
        graphValue: () => (
            <div className='prev_graph_content' style={{ height: '1.75rem', borderRadius: "1rem", background: "lightBlue", padding: "5px .5rem" }}>
                <BsGraphUpArrow />
                <div>
                    15%
                </div>
            </div>
        )
    },
    {
        status: "Hired",
        applications: "98",
        previous: "Previous Period",
        pre_applications: "167",
        graphValue: () => (
            <div className='prev_graph_content' style={{ height: '1.75rem', borderRadius: "1rem", background: "lightPink", padding: "5px .5rem" }}>
                <BsGraphDownArrow />
                <div>
                    15%
                </div>
            </div>
        )
    }
]

export const InfoCards1 = () => {
    return (
        <div className='topleft_data_container'>
            {
                topleft_data.map((data, index) => (
                    <div className="topleft_data_content" key={index}>
                        <h3> {data.status} </h3>
                        <h2> {data.applications} </h2>
                        <p> {data.previous} </p>
                        <div className="prev_graph_container">
                            <h5> {data.pre_applications} </h5>
                            {data.graphValue()}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}





const rightbottom_data = [
    {
        status: "Recommended",
        applications: "2164",
        previous: "Previous Period",
        pre_applications: "90",
        graphValue: () => (
            <div className='prev_graph_content' style={{ height: '1.75rem', borderRadius: "1rem", background: "lightBlue", padding: "5px .5rem" }}>
                <BsGraphUpArrow />
                <div>
                    15%
                </div>
            </div>
        )
    },
    {
        status: "Interview",
        applications: "443",
        previous: "Previous Period",
        pre_applications: "90",
        graphValue: () => (
            <div className='prev_graph_content' style={{ height: '1.75rem', borderRadius: "1rem", background: "lightBlue", padding: "5px .5rem" }}>
                <BsGraphUpArrow />
                <div>
                    15%
                </div>
            </div>
        )
    }
]

export const InfoCards2 = () => {
    return (
        <div className='right_bottom_container'>    
                            {
                                rightbottom_data.map((data, index) => (
                                    <div className="toprightbottom_data_content" key={index}>
                                        <div style={{display:"flex",alignItems:"center", justifyContent:"space-between",width:"100%"}}>
                                        <h3> {data.status} </h3>
                                        <h3> { data.applications} </h3>
                                            
                                        </div>
                                        {/* <h2> {data.applications} </h2> */}
                                        <p> {data.previous} </p>
                                        <div className="prev_graph_container">
                                            <h5> {data.pre_applications} </h5>
                                            {data.graphValue()}
                                        </div>
                                    </div>
                                ))
                            }     
                    </div>
    )
}
