import Style from './input.module.css'

export default function Input({ info, name, type, error, style}) {
    return (
      <div className={Style.group}>
        <input
          {...info}
          id={name}
          className={Style.input}
          placeholder=" "
          type={type}
          style={style}
        />
        <label htmlFor={name} className={Style.label}>
          {name}
        </label>
        <span> { error } </span>
      </div>
    )
}