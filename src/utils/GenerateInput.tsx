type InputTypes ={
    label: string;
    id?: string;
    type?: string;
    rows?: number;
    cols?: number
}

export const GenerateInput: React.FC<InputTypes> = ({
  label,
  id,
  type,
  rows,
  cols,
}) => {
  const labelStyle: string = " uppercase font-semibold text-sm";
  const inputStyle: string = " border p-2 block w-full rounded-sm";
  const divStyle: string = "space-y-2";

  return (
    <div className={divStyle}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      {rows && cols ? (
        <textarea
          name=""
          id={id}
          cols={cols}
          rows={rows}
          className={inputStyle}
          autoCapitalize="on"
          autoComplete="on"
        ></textarea>
      ) : (
        <input type={type} id={id} className={inputStyle} autoComplete="on" autoCapitalize="on"/>
      )}
    </div>
  );
};
