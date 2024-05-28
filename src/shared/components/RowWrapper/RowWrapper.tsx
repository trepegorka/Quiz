import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 15px;
`
interface IWrapper {
	children: React.ReactNode
}
export function RowWrapper({ children }: IWrapper) {
	return <Wrapper>{children}</Wrapper>
}
