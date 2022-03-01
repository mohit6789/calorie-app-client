import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../styles/components/Table";
import { Food } from "../types/food";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import ConfirmDialog from "./ConfirmDialog";

type Props = {
  foods: Food[];
  showEditDialog: (food: Food) => void;
  removeFood: (foodId: number) => void;
};

const FoodsTable: React.FC<Props> = ({ foods, showEditDialog, removeFood }) => {
  const [selectedFoodId, setSelectedFoodId] = React.useState<number | null>(
    null
  );

  const closeDialog = () => {
    setSelectedFoodId(null);
  };

  const deleteItem = () => {
    if (selectedFoodId) {
      removeFood(selectedFoodId);
    }
    closeDialog();
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Calories</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {foods.map((row, index) => (
              <StyledTableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {moment(row.date).format("MMM Do YYYY, hh:mm")}
                </StyledTableCell>
                <StyledTableCell>{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">${row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => showEditDialog(row)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => setSelectedFoodId(row.id)}>
                    <DeleteIcon sx={{ color: red[500] }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmDialog
        isOpen={!!selectedFoodId}
        message="Are you sure you want to delete this item?"
        cancel={closeDialog}
        confirm={deleteItem}
      />
    </>
  );
};

export default FoodsTable;
