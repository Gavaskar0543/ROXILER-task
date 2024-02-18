import React from 'react';
import styled from 'styled-components';


const StyledStatistic = styled.div`
width:100%;
display:flex;
justify-content:center;
margin-top:4%;

p{
    font-weight:800;
}
`
function Statistic({currentMonth,currentStatistic
    
}) {

   
    return (
        <StyledStatistic>
           
          
           
            <div>
                 <p>Statistic-{currentMonth}</p>
                <p>totalSalse:{currentStatistic.totalSaleAmout}</p>
                <p>total sold item:{currentStatistic.totalSoldItems}</p>
                <p>total not sold item:{currentStatistic.totalUnsoldItems}</p>
            </div>
        </StyledStatistic>
    );
}

export default Statistic;