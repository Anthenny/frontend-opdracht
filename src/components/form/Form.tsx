import React, { useState } from "react";

import { StyledForm } from "../styles/Form.styled";
import Table from "../table/Table";
import data from "../../data/mock-data.json";

type CvsArray = typeof data;

const Form = () => {
  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState<CvsArray>([]);

  const processCsv = (str: string, semi: string = ";") => {
    // We splitten de output van de eerste rij bij de semicolon en er een array van. Ook "unshiften" we een id zodat dit vooraan in de array komt.
    const headers = str
      .slice(0, str.indexOf("\n"))
      .split(semi)
      .map((header) => {
        return header.replace(/\n|\r/g, "");
      });
    headers.unshift("id");

    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    // We maken een nieuwe array waarin een object zit met de data van het csv bestand.
    const newArray = rows.map((row: string, i: number) => {
      const values: (string | number)[] = row.split(semi);
      values[2] = +values[2];
      values[3] = new Date(values[3]).getTime();
      values.unshift(i + 1);

      // output van values = [1, "Mauro", "Drenthe", 26, "Nov 26, 68"]
      const eachObject = headers.reduce((obj: any, header: any, i) => {
        obj[header] = values[i];
        return obj;
      }, {});

      return eachObject;
    });

    setCsvArray(newArray);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (csvFile) {
      const file: any = csvFile;
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const text = e.target.result;
        processCsv(text);
      };

      reader.readAsText(file);
    }
  };

  return (
    <>
      <StyledForm id="csv-form">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={(e: any) => {
            setCsvFile(e.target.files[0]);
          }}
        ></input>
        <button
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Submit
        </button>
      </StyledForm>
      {csvArray.length > 0 ? <Table csvArray={csvArray} /> : null}
    </>
  );
};

export default Form;
