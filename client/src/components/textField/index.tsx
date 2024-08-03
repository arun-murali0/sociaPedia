interface TextFieldProps {
  id?: string;
  label?: string;
  inputProps?: unknown;
  placeholder?: string;
  type?: string | undefined;
  error?: string;
  htmlFor: string;
}

export const TextField = (props: TextFieldProps) => {
  return (
    <div className='my-2'>
      <label id={props.id} htmlFor={props.label}>
        <span>{props.label}</span>
      </label>
      <input
        id={props.id}
        type={props.type}
        className='w-full border my-1 p-1'
        placeholder={props.placeholder}
        {...(props.inputProps ?? '')}
      />
      {<span className='text-red-500 my-1'>{props?.error}</span>}
    </div>
  );
};
