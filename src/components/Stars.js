import {FaStar,FaStarHalfAlt} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
import styled from "styled-components"

const Stars = ({stars,reviews}) => {
 const RatingStar =   Array.from({length:5},(elem,index)=>{ //genrating array index
    let number = index + 0.5 //to half star
    return(
        // i=0 , i=1, i=2,i=3, i=4
        //stars = 4.4
        <span key={index}>
        {
             //{4.4 > 4 + 1} 1 star,2star,3star out of loo[p]
            stars > index + 1 ? (<FaStar className="icon"/>) 
            : stars > number ? (<FaStarHalfAlt className="icon"/> ) //4.4 > 4.5 no 
            : (<AiOutlineStar className="icon"/>) //it execute
        }

    </span>
    )    

  })
  return (
   <Wrapper>
    <div className="icon-style">
        {RatingStar}
        <p>({reviews} customer review)</p>
    </div>


   </Wrapper>
  )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Stars
