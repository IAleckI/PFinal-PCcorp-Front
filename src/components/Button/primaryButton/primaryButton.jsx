import Style from './primaryButton.module.css'

export default function PrimaryButton({ text, type, onClick, style}) {
    return (
    <button className={Style.button} onClick={onClick} style={style} type={type}>
      {text}
    </button>
  )
}