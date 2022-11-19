import React, { useState, useEffect } from "react";
import { Page, Grid, Button, Card, Tag } from "@shopify/polaris";
import Rows from "./Rows";
function QueryBuilder({ main, setMain }) {
  const [query, setQuery] = useState("");
  const [err, setErr] = useState();
// Add Group Function
  const addGroup = () => {
    const addNewGroup = {
      groupId: Math.floor(Math.random() * 86135445),
      row: [
        {
          rowId: Math.floor(Math.random() * 76145325),
          sel1: "",
          sel2: "",
          textVal: "",
        },
      ],
    };
    setMain([...main, addNewGroup]);
    setErr("");
  };
// Always Genrate New Query
  useEffect(() => {
    let str = "";
    main.map((grpInfo) => {
      if (str) {
        str += " OR ";
      }
      grpInfo.row.map((rowInfo) => {
        if (rowInfo.sel1 && rowInfo.sel2 && rowInfo.textVal) {
          if (str && rowInfo.rowId === rowInfo.rowId) {
            if (rowInfo.sel1 && rowInfo.sel2 && rowInfo.textVal) {
              if (str.endsWith(" OR ")) {
                str += " AND ".slice(4);
              } else {
                str += " AND ";
              }
            }
          }
          str += rowInfo.sel1 + " " + rowInfo.sel2 + " " + rowInfo.textVal;
        }
      });
    });
    setQuery(str);
  });

  return (
    <>
      <Page title="Query Builder">
        {main.map((group) => {
          return (
            <React.Fragment key={group.groupId}>
              <Card
                title={
                  query && (
                    <Tag>
                      <b>{query}</b>
                    </Tag>
                  )
                }
                sectioned
              >
                <Rows
                  err={err}
                  setErr={setErr}
                  group={group}
                  main={main}
                  setMain={setMain}
                  query={query}
                  setQuery={setQuery}
                />
              </Card>
            </React.Fragment>
          );
        })}
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 7, xl: 6 }}>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Button textAlign="end" onClick={addGroup} plain>
                Add Group
              </Button>
            </div>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 6 }}>
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              <Button textAlign="end" onClick={() => setErr(true)} plain>
                Save Data
              </Button>
            </div>
          </Grid.Cell>
        </Grid>
      </Page>
    </>
  );
}
export default QueryBuilder;
