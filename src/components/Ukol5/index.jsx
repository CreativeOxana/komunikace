import { useState } from 'react';
import { InputField } from './InputField';

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <>
      <p>
        Jméno: {firstName} Příjmení: {lastName}
      </p>
      <InputField
        label="Jméno"
        type="text"
        value={firstName}
        onValueChange={(value) => setFirstName(value) + ' '}
      />
      <InputField
        label="Příjmení"
        type="text"
        value={lastName}
        onValueChange={(value) => setLastName(value)}
      />
    </>
  );
};
