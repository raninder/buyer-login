import React from "react";
import "./style.css";
import Card from "../shared/Card";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import editIcon from "../../../assets/images/edit-outline.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import mapPointIcon from "../../../assets/images/map-point.svg";

const data = [
  { label: "Miami", value: "2+ beds, 2+ baths | Email: Daily" },
  { label: "Miami", value: "2+ beds, 1 baths | Email: Instantly" },
  { label: "Miami", value: ">$475K | Email: Daily" },
];

const cellCommonStyles = {
  height: "2.5rem",
  padding: 0,
  fontSize: "1.1rem",
};

const CustomTable = () => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      variant="outlined"
      sx={{
        width: `calc(100% - 6em)`,
        mt: "1rem",
        ml: "3em",
        mr: "3em",
        border: "0",
      }}
    >
      <Table aria-label="customized table">
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.label}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "5%",
                }}
                component="th"
                scope="row"
              >
                <img src={mapPointIcon} />
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "10%",
                }}
              >
                {row.label}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "75%",
                  fontWeight: "700",
                }}
                align="left"
              >
                {row.value}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "5%",
                }}
                align="right"
              >
                <IconButton aria-label="edit">
                  <img src={editIcon} />
                </IconButton>
              </TableCell>
              <TableCell
                sx={{ ...cellCommonStyles, width: "5%"}}
                align="right"
              >
                <IconButton aria-label="delete">
                  <img src={deleteIcon} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const CardName = "Saved Searches Settings";

export default function UserSettingsThirdComp() {
  return (
    <>
      <div className="user-settings-third-comp-container">
        <Card name={CardName}>
          <CustomTable></CustomTable>
        </Card>
      </div>
    </>
  );
}
