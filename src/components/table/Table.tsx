import { useEffect, useState } from "react";

import { StyledTable } from "../styles/Table.styled";
import data from "../../data/mock-data.json";

type SortOrder = "asc" | "desc";

type CvsArray = typeof data;

type SortKeys = keyof CvsArray[0];

const Table = ({ csvArray }: { csvArray: CvsArray }) => {
  const [sortKey, setSortKey] = useState<SortKeys>("sur_name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [csvFile, setCsvFile] = useState();
  // const [csvArray, setCsvArray] = useState<CvsArray>([]);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (csvArray.length > 1 && initialLoad === true) {
      sorting(sortKey);
      setInitialLoad(false);
    }
  }, [csvArray]);

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "first_name", label: "First Name" },
    { key: "sur_name", label: "Sur Name" },
    { key: "issue_count", label: "Issue Count" },
    { key: "date_of_birth", label: "Date Of Birth" },
  ];

  const sorting = (key: SortKeys = sortKey) => {
    if (sortOrder === "asc") {
      const sorted = csvArray.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortKey(key);
      setSortOrder("desc");

      return sorted;
    }

    if (sortOrder === "desc") {
      const sorted = csvArray.sort((a, b) => (a[key] < b[key] ? 1 : -1));
      setSortKey(key);
      setSortOrder("asc");

      return sorted;
    }
  };

  // const processCsv = (str: string, semi: string = ";") => {
  //   // Split de output bij de semicolon en maak daar een array van.
  //   // Output = ['id', 'first_name', 'sur_name', 'issue_count', 'date_of_birth\r']
  //   const headers = str
  //     .slice(0, str.indexOf("\n"))
  //     .split(semi)
  //     .map((header) => {
  //       return header.replace(/\n|\r/g, "");
  //     });
  //   headers.unshift("id");

  //   //Output = ['Mauro;Drenthe;26;Nov 26, 68\r', 'Sila;Hoogsteen;31;Jun 29, 72\r', enzv..]
  //   const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  //   const newArray = rows.map((row: string, i: number) => {
  //     //values zijn ['Mauro', 'Drenthe', '26', 'Nov 26, 68']
  //     const values: (string | number)[] = row.split(semi);
  //     values[2] = +values[2];

  //     values.unshift(i + 1);
  //     const eachObject = headers.reduce((obj: any, header: any, i) => {
  //       obj[header] = values[i];
  //       return obj;
  //     }, {});

  //     return eachObject;
  //   });

  //   setCsvArray(newArray);
  // };

  // const submitHandler = (e: any) => {
  //   e.preventDefault();
  //   if (csvFile) {
  //     const file: any = csvFile;
  //     const reader = new FileReader();

  //     reader.onload = (e: any) => {
  //       const text = e.target.result;
  //       processCsv(text);
  //     };

  //     reader.readAsText(file);
  //   }
  // };

  return (
    <>
      {/* <form id="csv-form">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          // TODO CSV TYPE htmlelement
          onChange={(e: any) => {
            setCsvFile(e.target.files[0]);
          }}
        ></input>
        <br />
        <button
          onClick={(e) => {
            submitHandler(e);
          }}
        >
          Submit
        </button>
      </form> */}

      <StyledTable>
        <thead>
          <tr>
            {headers.map((row) => {
              return (
                <th key={row.key} onClick={() => sorting(row.key)}>
                  {row.label}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {csvArray.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.sur_name}</td>
                <td>{person.issue_count}</td>
                <td>{person.date_of_birth}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
