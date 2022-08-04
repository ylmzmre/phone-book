import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const onChangeFilter = (e) => {
    setFilterText(e.target.value);
  };

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  console.log(filtered);
  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={onChangeFilter}
      />
      <ul className="list">
        {filtered.map((item, index) => (
          <li key={index}>
            <span>{item.fullName}</span>
            <span>{item.phoneNumber}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
