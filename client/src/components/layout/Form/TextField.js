//Component to display error messages in form
//importing error messeage method from formik
import { ErrorMessage, useField } from "formik";

//Form function containing JSX code
export const TextField = ({ label, ...props }) => {
  //Custom react hooks
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      {/* error message component */}
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
