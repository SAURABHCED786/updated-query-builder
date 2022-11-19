import React from "react";
import { Grid, Button, Card, Select, TextField, Stack } from "@shopify/polaris";
import { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons";
function Rows({ main, setMain, group, err, setErr, setQuery }) {
  const [addRow, setAddRow] = useState([
    {
      rowId: Math.floor(Math.random() * 34646313),
      sel1: "",
      sel2: "",
      textVal: "",
    },
  ]);

  // Always Upadate All Data with New Query Data
  useEffect(() => {
    const updatedRow = main.map((grp) => {
      if (grp.groupId === group.groupId) return { ...grp, row: addRow };
      return grp;
    });
    setMain(updatedRow);
  });
  // Add Rows Function
  const addRowHandler = () => {
    setAddRow([
      ...addRow,
      {
        rowId: Math.floor(Math.random() * 54543673),
        sel1: "",
        sel2: "",
        textVal: "",
      },
    ]);
    setErr("");
  };
  // Delete Group Funtion
  const deleteGroup = (g) => {
    console.log(g, "gid");
    const updatedGrp = main.filter((rmove) => rmove.groupId !== g);
    setMain([...updatedGrp]);
  };
  // Delete Row Function
  const singleRowRemove = (index) => {
    const singleRow = [...addRow];
    singleRow.splice(index, 1);
    setAddRow(singleRow);
  };

  const options = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
  ];
  const options2 = [
    { label: "Contains", value: "contains" },
    { label: "Equeal", value: "equal" },
    { label: "Not Equals", value: "notEqual" },
  ];

  return (
    <div>
      {addRow.map((row, i) => {
        return (
          <Card key={i} sectioned>
            <Grid>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 4, xl: 4 }}>
                <Select
                  key={i}
                  label="Select Box1"
                  placeholder="-Select-"
                  options={options}
                  onChange={(sel1) => {
                    row["sel1"] = sel1;
                    //setSel1(row.sel1);
                    setQuery(row.sel1);
                  }}
                  value={row.sel1}
                  error={row.sel1 ? "" : err}
                />
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 2, lg: 4, xl: 4 }}>
                <Select
                  key={i}
                  label="Select Box2"
                  placeholder="-Select-"
                  options={options2}
                  onChange={(sel2) => {
                    row["sel2"] = sel2;
                    setQuery(row.sel2);
                  }}
                  value={row.sel2}
                  error={row.sel2 ? "" : err}
                />
              </Grid.Cell>
              {row.sel2 === "equal" ? (
                <Grid.Cell
                  columnSpan={{
                    xs: 6,
                    sm: 3,
                    md: 2,
                    lg: i > 0 ? 3 : 4,
                    xl: i > 0 ? 3 : 4,
                  }}
                >
                  <Select
                    key={i}
                    label="Select Box3"
                    placeholder="-Select-"
                    options={options}
                    onChange={(sel1) => {
                      row["textVal"] = sel1;
                      setQuery(row.textVal);
                    }}
                    value={row.textVal}
                    error={row.textVal ? "" : err}
                  />
                </Grid.Cell>
              ) : (
                <Grid.Cell
                  columnSpan={{
                    xs: 6,
                    sm: 3,
                    md: 2,
                    lg: i > 0 ? 3 : 4,
                    xl: i > 0 ? 3 : 4,
                  }}
                >
                  <TextField
                    key={i}
                    label="Text Field"
                    placeholder="Enter txt"
                    value={row.textVal}
                    onChange={(e) => {
                      row["textVal"] = e;
                      setQuery(row.textVal);
                    }}
                    autoComplete="off"
                    error={row.textVal ? "" : err}
                  />
                </Grid.Cell>
              )}

              {addRow.length > 1 && (
                <Stack>
                  <div style={{ marginTop: "22px" }}>
                    <Button
                      onClick={() => {
                        singleRowRemove(i);
                      }}
                    >
                      <DeleteOutlined />
                    </Button>
                  </div>
                </Stack>
              )}
            </Grid>
          </Card>
        );
      })}
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 6, lg: 12, xl: 12 }}>
          <div style={{ textAlign: "end", marginTop: "15px" }}>
            <Button textAlign="end" onClick={addRowHandler} plain>
              Add Rows
            </Button>
          </div>
        </Grid.Cell>
      </Grid>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
          <div>
            {main.length > 1 && (
              <span style={{ color: "#bf0711", textAlign: "left" }}>
                <Button
                  outline
                  monochrome
                  size="slim"
                  onClick={() => deleteGroup(group.groupId)}
                >
                  Remove Groups
                </Button>
              </span>
            )}
          </div>
        </Grid.Cell>
      </Grid>
    </div>
  );
}

export default Rows;
