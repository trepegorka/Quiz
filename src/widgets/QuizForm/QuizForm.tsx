'use client'
import NumberQuestionsInput from '@/shared/components/NumberQuestionsInput/NumberQuestionsInput'
import styled from 'styled-components'
import { MySelect } from '@/shared/components/MySelect/MySelect'
import { useState } from 'react'

const MyForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Submit = styled.input`
	width: 100px;
	color: black;
`

const categoryOptions = [1, 2, 3, 4, 5]
const difficultyOptions = ['easy', 'medium', 'hard']
const typeOptions = ['type1', 'type2']
const timeOptions = ['1m', '2m', '3m']

const QuizForm = () => {
	const [category, setCategory] = useState<string | number>()
	const [difficulty, setDifficulty] = useState<string>()
	const [type, setType] = useState<string>()
	const [time, setTime] = useState<string>()

	// TODO submit logic
	const handleSubmit = (e: React.FormEvent) => {}

	return (
		<MyForm onSubmit={handleSubmit}>
			<NumberQuestionsInput />

			{/*Category*/}
			<MySelect
				text={'Select category'}
				optionState={category}
				setOptionState={setCategory}
				options={categoryOptions}
			/>

			{/*Difficulty*/}
			<MySelect
				text={'Select difficulty'}
				optionState={difficulty}
				setOptionState={setDifficulty}
				options={difficultyOptions}
			/>

			{/*Difficulty*/}
			<MySelect
				text={'Select type'}
				optionState={type}
				setOptionState={setType}
				options={typeOptions}
			/>

			{/*Time*/}
			<MySelect
				text={'Select time'}
				optionState={time}
				setOptionState={setTime}
				options={timeOptions}
			/>

			<Submit type={'submit'} value={'Start quiz'}></Submit>
		</MyForm>
	)
}

export default QuizForm
