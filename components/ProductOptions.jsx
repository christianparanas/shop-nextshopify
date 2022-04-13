import React from "react";

export default function ProductOptions({ name, values, selectedOptions, setOptions }) {
  return (
    <div>
      <fieldset>
        <legend className="text-xl font-semibold">{name}</legend>
        <div className="inline-flex items-center flex-wrap">
          {values.map((value, key) => {
            const id = `option-${name}-${value}`;
            const checked = (selectedOptions[name] === value);

            return (
              <label htmlFor={id} key={id}>
                <input
                  type="radio"
                  className="sr-only"
                  id={id}
                  name={`option-${name}`}
                  value={value}
                  checked={checked}
                  onChange={() => {
                    setOptions
                  }}
                />
                <div
                  className={`p-2 my-3 text-md rounded-full block cursor-pointer mr-3 ${
                    checked
                      ? "text-white bg-gray-900"
                      : "text-gray-900 bg-gray-200"
                  }`}
                >
                  <span className="px-2">{value}</span>
                </div>
              </label>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
