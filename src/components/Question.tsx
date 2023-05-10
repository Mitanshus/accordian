import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface ques {
	id: number | null | undefined | string;
	title: string;
	info: string;
}

const Question = (props: ques) => {
	const [showInfo, setShowInfo] = useState(false);
	return (
		<article className='question'>
			<header>
				<h4>{props.title}</h4>
				<button className='btn' onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{props.info}</p>}
		</article>
	);
};

export default Question;
