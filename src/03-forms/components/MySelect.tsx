import { ErrorMessage, useField } from "formik";

type Option = [string] | [string, string];

interface Props {
  label?: string;
  name: string;
  options?: Option[];
  [x: string]: any
}

export const MySelect = ({label, ...props}: Props) => {

  const [field] = useField(props);

  const formatValue = (option: Option) => 
        option.length > 1 ? option[1] : option[0].toLowerCase().replace(/\s/g, '-');

  return (
    <>
      { label && <label htmlFor={props.id || props.name}>{ label }</label> }
      {
        props.options ? (
          <select { ...field } {...props} >
          {
              props.options.map((option) => (
                <option key={formatValue(option)} value={formatValue(option)}>{option[0]}</option>
              ))
            }
          </select>
        ) : (
          <select { ...field } {...props} />
        )
      }
      <ErrorMessage name={props.name} component="span" />

    </>
  )
}
