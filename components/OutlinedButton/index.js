import styled from 'styled-components/native'

export const TextOutlined = styled.Text.attrs(props => ({
    textSize: props.textSize || 18
}))`
    font-size: ${props => props.textSize}px;
`
// export const TextOutlined2 = styled(TextOutlined)`
//     font-size: ${props => props.textSize}px;
// `

export const Action = styled.Pressable`
    border-width: 2px;
    padding: 10px;
    border-radius: 10px;
    border-color: '#008080'
`
export const OutlinedButton = ({title, textSize, onPress}) => {
    return (
        <Action onPress={onPress}>
            <TextOutlined textSize={textSize}>{title}</TextOutlined>
        </Action>
    );
}