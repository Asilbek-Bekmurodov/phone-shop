import LoginInput from "./components/login-input";
import "./login.scss";

const Login = ({ onLogin, value }) => {
  console.log(value);
  let newValue = value ? value : ["", "", "", "", ""];
  const inputs = [
    {
      id: 1,
      type: "text",
      placeholder: "John Maker",
      label: "Shipping Name",
      required: true,
      value: value ? value[0] : "",
    },

    {
      id: 2,
      type: "text",
      placeholder: "123 Plae Grond Stret",
      label: "Street Name",
      required: true,
      value: value ? value[1] : "",
    },
    {
      id: 3,
      type: "text",
      placeholder: "Vermont",
      label: "City",
      required: true,
      value: value ? value[2] : "",
    },
    {
      id: 4,
      type: "text",
      placeholder: "California",
      label: "State / Province",
      required: true,
      value: value ? value[3] : "",
    },
    {
      id: 5,
      type: "text",
      placeholder: "United States of America",
      label: "Country",
      required: true,
      value: value ? value[4] : "",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    newValue[e.target.id - 1] = e.target.value;
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          {inputs.map(({ id, type, placeholder, label, value, required }) => (
            <LoginInput
              key={id}
              id={id}
              type={type}
              placeholder={placeholder}
              label={label}
              onChange={onChange}
              value={value}
              required={required}
            />
          ))}
          <button onClick={() => onLogin(newValue)} className="login-btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
