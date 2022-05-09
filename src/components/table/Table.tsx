import { useEffect, useState } from "react";

import { StyledTable } from "../styles/Table.styled";
import data from "../../data/mock-data.json";

type SortOrder = "asc" | "desc";

type CvsArray = typeof data;

type SortKeys = keyof CvsArray[0];

const Table = ({ csvArray }: { csvArray: CvsArray }) => {
  const [sortKey, setSortKey] = useState<SortKeys>("sur_name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [initialLoad, setInitialLoad] = useState(true);

  // useEffect omdat we aan het begin willen filteren op sur_name.
  useEffect(() => {
    if (csvArray.length > 1 && initialLoad === true) {
      sorting(sortKey);
      setInitialLoad(false);
    }
  }, []);

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

  return (
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
  );
};

export default Table;
