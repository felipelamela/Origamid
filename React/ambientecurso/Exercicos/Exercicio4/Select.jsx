import React from "react";

const Select = ({ perguntas, value, setValue, slide }) => {
  return (
    <div>
      {perguntas
        .filter((pagina, index) => index === slide)
        .map(({ pergunta, options, id }) => (
          <fieldset key={id}>
            <legend>{pergunta}</legend>
            {options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  checked={value === option}
                  onChange={({ target }) => setValue(target.value)}
                />{" "}
                {option}
              </label>
            ))}
          </fieldset>
        ))}
    </div>
  );
};

export default Select;
