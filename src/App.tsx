import { useState } from "react";
import data from "./components/Data";
import SingleQuestion from "./components/Question";
import "./App.css";

function App() {
	interface questi {
		questio: { id: string; title: string; info: string }[];
	}
	const [questions, setQuestion] = useState<any[]>(data);
	return (
		<main>
			<div className='container'>
				<h3>Question and answers about login</h3>
				<section className='info'>
					{questions.map((question) => {
						return (
							<SingleQuestion
								id={question.id}
								title={question.title}
								info={question.info}
								key={question.id}
								{...questions}
							></SingleQuestion>
						);
					})}
				</section>
			</div>
		</main>
	);
}

export default App;
