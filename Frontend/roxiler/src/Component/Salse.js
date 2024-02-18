import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import {getSales} from '../Api'
import BarChart from './BarChart';
import PieChart from './PieChart';
import Statistic from './Statistic';

const Table = styled.table`
    width: 80%;
    border-collapse: collapse;
    margin-left:10%;
    margin-top:2%;
`;

const Th = styled.th`
    padding: 10px;
    background-color: #f2f2f2;
    text-align: left;
`;

const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

const Img = styled.img`
    width: 100px;
`;
const Box = styled.div`
width:100%;
display:flex;
justify-content:space-around;
margin-top:2%;
margin-bottom:2%;
`
const Buttons = styled.div`
display:flex;
margin-top:5%;
align-items:center;
justify-content:center;
`

const StyledTd = styled.td`
  max-width: 200px; 
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
`;

export default function Sales() {
    const [selectedMonth, setSelectedMonth] = useState('March');
    const [productData, setProductData] = useState([]);
    const [statistic,setStatistic] = useState('');
    
    useEffect( () =>{

        const fetchData = async () =>{
        const response = await getSales(selectedMonth);
        if(response.success){
            setProductData(response.data.combinedData.transactions.product);
            
           setStatistic(response.data.combinedData.statistics);
          
            
        }
        else{
            console.log('no response found');
        }}
        fetchData()

    },[selectedMonth]) 

    

    // Function to handle changes in the selected month
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
       
        console.log('Selected month:', event.target.value);
    };

    // Array of month names
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];


    return (
        <>
            <Box>
            <div>
                <input type='text' placeholder='search transaction'/>
            </div>
            <div>
            <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Select Month</option>
            {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
            ))}
        </select>
            </div>
        </Box>
            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Title</Th>
                        <Th>Description</Th>
                        <Th>Price</Th>
                        <Th>Category</Th>
                        <Th>Sold</Th>
                        <Th>Image</Th>
                       
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, index) => (
                        <tr key={index}>
                            <Td>{index}</Td>
                            <Td>{product.title}</Td>
                            <StyledTd>{product.description}</StyledTd>
                            <Td>{product.price}</Td>
                            <Td>{product.category}</Td>
                            <Td>{product.sold ? 'Yes' : 'No'}</Td>
                            <StyledTd>
                                {product.image}
                            </StyledTd>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Buttons>
                <div>
                   <button>Previous</button>
                </div>
                <div>
                   <button>Next</button>
                </div>
            </Buttons>
            <Statistic currentMonth={selectedMonth} currentStatistic={statistic} />
          
        </>
    );
}
