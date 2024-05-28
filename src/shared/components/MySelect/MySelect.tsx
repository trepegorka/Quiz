import { Dispatch, SetStateAction } from 'react'
import { RowWrapper } from '@/shared/components/RowWrapper/RowWrapper'
import styled from 'styled-components'

const Select = styled.select`
	outline: none;
	color: black;
`

const MyOption = styled.option`
	outline: none;
	color: black;
`

interface ISelect<T> {
	text: string
	optionState: T
	setOptionState: Dispatch<SetStateAction<T>>
	options: string[] | number[]
}
export const MySelect = <T extends string | number | undefined>({
	text,
	optionState,
	setOptionState,
	options,
}: ISelect<T>) => {
	const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value

		setOptionState(value as T)
	}

	return (
		<RowWrapper>
			<p>{text}:</p>
			<Select value={optionState} onChange={handleChangeOption} required>
				<MyOption value={''}>{text}...</MyOption>
				{options.map((option, key) => {
					return (
						<MyOption key={key} value={option}>
							{option}
						</MyOption>
					)
				})}
			</Select>
		</RowWrapper>
	)
}
