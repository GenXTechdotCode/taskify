import React, { useRef } from 'react';
import "./styles.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
	const InputRef = useRef<HTMLInputElement>(null);
	return (
		<form className="input" onSubmit={(e) => {
			
			handleAdd(e)
			InputRef.current?.blur();
			}}>
			<input 
			ref={InputRef}
			type="input" 
			value={todo} 
			onChange={(e) => setTodo(e.target.value)}
			placeholder="Enter a task" 
			className="input__box" 
			/>
			<button className="input_submit" type="submit">
			GO
			</button>
		</form>
  );
};

export default InputField
