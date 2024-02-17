import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-left:5%;
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

export default function Sales() {
    let productData = [];
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
                <select>
                    <option>Select Month</option>
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
                            <Td>{product.title}</Td>
                            <Td>{product.price}</Td>
                            <Td>{product.description}</Td>
                            <Td>{product.category}</Td>
                            <Td>
                                <Img src={product.image} alt={product.title} />
                            </Td>
                            <Td>{product.sold ? 'Yes' : 'No'}</Td>
                            <Td>{product.dateOfSale}</Td>
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
        </>
    );
}
