import { useState, useEffect } from "react";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form({ contacts, addContact }) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullName === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            type="text"
            maxlength="10"
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={onChangeInput}
          />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
