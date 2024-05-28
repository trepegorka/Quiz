import styled from 'styled-components'
import { useState } from 'react'
import { RowWrapper } from '@/shared/components/RowWrapper/RowWrapper'

const NumberInput = styled.input`
	outline: none;
	color: black;
`

const NumberQuestionsInput = () => {
	const [number, setNumber] = useState<number | undefined>(undefined)

	const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value, 10)
		if (!isNaN(value)) {
			setNumber(value)
		} else {
			setNumber(undefined)
		}
	}

	return (
		<RowWrapper>
			<p>Number of questions:</p>
			<NumberInput
				value={number ? number : ''}
				onChange={handleChangeNumber}
				placeholder={'number'}
				required
			/>
		</RowWrapper>
	)
}
export default NumberQuestionsInput
