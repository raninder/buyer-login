import React from "react";
import "./style.css";
import Card from "../shared/Card";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import editIcon from "../../../assets/images/edit-outline.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import VerifiedFlag from "../shared/VerifiedFlag";
import { documentData } from "./tableData";
import PurpleButton from "../shared/PurpleButton";

const CardName = "Saved Searches Settings";

const documentItems = [
  {
    title: "Pre-Approval Letter",
    buttonName: "Upload Letter",
    description:
      "Demonstrates your ability to obtain a mortgage for the amount in the offer.",
  },
  {
    title: "Pre-Approval Letter",
    buttonName: "Verify ID",
    description:
      "To ensure the safety of our agents, we need you to verify your identity before we can take you on a home tour.",
  },
];

const DocumentItem = ({ title, buttonName, description }) => {
  return (
    <div className="user-settings-fifth-comp-document-item">
      <div>
        <div className="user-settings-fifth-comp-document-item-name">
          {title}
        </div>
        <VerifiedFlag status={"Not Verified"} />
      </div>
      <div className="user-settings-fifth-comp-document-item-desciption">
        {description}
      </div>
      <div className="user-settings-fifth-comp-document-item-button">
        <PurpleButton text={buttonName} width="9em" height="2.5em" />
      </div>
    </div>
  );
};

const cellCommonStyles = {
  padding: "0.3em 0.7em 0.3em 0.7em",
  fontSize: "1.3rem",
};

const headCellCommonStyles = {
  fontWeight: "700",
};

const headCellTitles = [
  "#",
  "Document Name",
  "Type",
  "Time",
  "Timestamp",
  "",
  "",
];

<TableRow
  sx={{
    borderBottom: "0.25em solid #7152A2",
    backgroundColor: "#E8DCFA",
  }}
>
  {headCellTitles.map((title, index) => (
    <TableCell key={index} sx={{ ...headCellCommonStyles }}>
      {title}
    </TableCell>
  ))}
</TableRow>;

const CustomTable = () => {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      variant="outlined"
      sx={{
        width: `calc(100% - 5.4em)`,
        margin: "0 2.7em 0 2.7em",
        mt: "2rem",
        border: "0",
      }}
    >
      <Table aria-label="custom document table">
        <TableHead>
          <TableRow
            sx={{
              borderBottom: "0.25em solid #7152A2",
              backgroundColor: "#E8DCFA",
            }}
          >
            {headCellTitles.map((title, index) => (
              <TableCell key={index} sx={{ ...headCellCommonStyles }}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {documentData.map((doc, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "5%",
                }}
              >
                {index + 1}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  width: "22%",
                }}
              >
                {doc.documentName}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "20%",
                }}
              >
                {doc.type}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "22%",
                }}
              >
                {doc.date}
              </TableCell>
              <TableCell
                sx={{
                  ...cellCommonStyles,
                  fontWeight: "700",
                  width: "22%",
                }}
              >
                {doc.timestamp}
              </TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit">
                  <img src={editIcon} />
                </IconButton>
              </TableCell>
              <TableCell align="right">
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

export default function UserSettingsFifthComp() {
  return (
    <>
      <div className="user-settings-fifth-comp-container">
        <Card name={CardName}>
          {documentItems.map((item) => (
            <DocumentItem
              title={item.title}
              buttonName={item.buttonName}
              description={item.description}
            />
          ))}
          <CustomTable />
        </Card>
      </div>
    </>
  );
}
