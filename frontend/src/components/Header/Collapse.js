import styled from 'styled-components';

export const Collapse = styled.div`
    background-color: inherit;
    
    display: flex;
    padding: ${({ open }) => open ? '0px 30px' : '0px 0px'};
    overflow: hidden;
    max-height: ${({ open }) => open ? '100%' : '0'};
    @media (min-width : 769px){
        flex: 0.7;
        justify-content: space-between;
        padding: 0;
        max-height: inherit;
       
    }
    flex-wrap: wrap;
    transition: all 0.1s ease;
    
`;
