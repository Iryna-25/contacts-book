import styled from 'styled-components';

export const Wrapper = styled.div`
  position: static;
  width: 800px;
  margin: 0rem 2rem;
  padding: 1.5rem;
  top: 50%;
  left: 50%;
  transform: translate(60%, 0%);
`;

export const Form = styled.form`
  padding: 2rem 0rem;
  margin-bottom: 1.5rem;
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

export const List = styled.ol`
  border: 0.5px solid #f7f1f1;
  border-radius: 0.75rem;
  padding: 1rem;
  text-align: center;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.05rem;
  padding-left: 1rem;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 50%;
`;

// Buttons
export const AddButton = styled.button`
  display: flex;
  border-radius: 0.75rem;
  background-color: #ba7ee4;
  color: #fff;
  &:hover, &:focus {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #6e2ead;
  }
`;

export const DeleteButton = styled.button`
  background-color: #f26b6b;
  border-radius: 0.75rem;
  margin: 0.25rem;
  &:hover, &:focus {
    background-color: #d32828;
  }
`;

// Carousel
export const CarouselItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: #fff;
`; 

export const CarouselImg = styled.img`
  width: 150px;
  border-radius: 50%;
  padding: 0 20px 0 20px;
`; 

export const CarouselItemText = styled.p`
  font-size: 1.15rem;
  margin: 10px 0 10px 0;
  padding: 0 10px 0 10px;
  white-space: normal;
  color: #617d98;
`; 

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  background-color: #f1c794;
`; 

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`; 

export const CarouselInner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`; 

export const CarouselButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`; 

export const ButtonArrow = styled.button`
background: none;
border: none;
cursor: pointer;
margin-top: 20px;
`;

export const Indicators = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`; 

export const IndicatorButtons = styled.button`
  border: none;
  cursor: pointer;
  margin: 5px;
  background: none;
`; 