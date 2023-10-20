import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {

    const ratingStar = Array.from({ length: 5 }, (elm, index) => {
        let number = index + 0.5

        return (
            <span key={index}>
                {
                    rating >= index + 1
                        ?

                        (<AiFillStar></AiFillStar>)
                        :

                        rating > number
                            ?
                            (<BsStarHalf></BsStarHalf>)
                            :
                            (<AiOutlineStar></AiOutlineStar>)
                }
            </span>
        )

    })
    return (

        <div className='flex text-base text-[#df6c5df3] '>
            {ratingStar}
        </div>

    )


};

Rating.propTypes = {
    rating: PropTypes.node
};

export default Rating;