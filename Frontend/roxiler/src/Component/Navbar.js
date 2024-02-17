import Styled from 'styled-components';
export default function Navbar(){
    
    return(
        <Nav>
            <div>
                <p className='logo'>Salse Dashboard</p>
            </div>
            <div>
                <ul  type="none">
                    <li>Salse Transacition</li>
                    <li>statistic Transacition</li>
                    <li>Pie Chart Transacition</li>
                </ul>
              
            </div>
          
           
        </Nav>
    )
}
const Nav = Styled.section`
display:flex;
background:gray;
border:1px solid white;
color:white;
height:8vh;
justify-content:space-between;
align-items:center;
border-radius:4px;

.logo{
    font-size:36px;
    font-weight:bolder;
    transition: color 0.3s ease-in-out;


    &:hover {
      color: rgb(254, 189, 105);
    }
  }
}
ul li{
    display: inline-block;
    padding:0;
    margin: 0 25px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: rgb(254, 189, 105);
    }
}




  
  
`