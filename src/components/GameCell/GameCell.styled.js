import styled from "styled-components";

export const CellStyle = styled.button`
background-color: ${(props) => props.theme.colors.secondary};
color: ${(props) => props.theme.colors.primary};
font-size: 3rem;
border: none;
border-radius: 10px;
box-shadow: 5px 10px #888888;
width: 10rem;
height: 10rem;
cursor: pointer;

`