import React, { ChangeEvent, FC, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box, DialogContent, DialogTitle, Stack } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Food } from "../types/food";

type Props = {
  isOpen: boolean;
  closeDialog: () => void;
  onSave: (food: Food) => void;
  selectedFoodItem: Food;
};

const FoodDialog: FC<Props> = ({
  isOpen,
  selectedFoodItem,
  closeDialog,
  onSave,
}) => {
  const isEditMode = !!selectedFoodItem.id;

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Food>({
    defaultValues: selectedFoodItem,
  });

  useEffect(() => {
    reset(selectedFoodItem);
  }, [selectedFoodItem]);

  const onSubmit: SubmitHandler<Food> = (data) => {
    data = {
      ...selectedFoodItem,
      ...data,
    };
    onSave(data);
  };

  const hasError = (fieldName: keyof Food) => {
    return !!errors[fieldName];
  };

  const getError = (fieldName: keyof Food) => {
    const error = errors[fieldName];
    return error?.message;
  };

  const greaterThanZero = (value: number) => {
    if (value <= 0) {
      return "Value must be greater than 0";
    }
  };

  return (
    <div>
      <Dialog open={isOpen} fullWidth={true}>
        <DialogTitle>{isEditMode ? "Edit" : "Add"} Food Item</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { my: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please fill this field",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    error={hasError("name")}
                    required
                    label="Enter Food Name"
                    helperText={getError("name")}
                    {...field}
                  />
                )}
              />
              <Controller
                name="calories"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please fill this field",
                  },
                  validate: greaterThanZero,
                }}
                render={({ field }) => (
                  <TextField
                    error={hasError("calories")}
                    required
                    type="number"
                    label="Enter Food Calories"
                    helperText={getError("calories")}
                    {...field}
                  />
                )}
              />
              <Controller
                name="price"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Please fill this field",
                  },
                  validate: greaterThanZero,
                }}
                render={({ field }) => (
                  <TextField
                    error={hasError("price")}
                    required
                    type="number"
                    label="Enter Food Price"
                    helperText={getError("price")}
                    {...field}
                  />
                )}
              />
            </div>
            <Stack direction="row" spacing={2} mt={2} justifyContent="end">
              <Button variant="outlined" onClick={closeDialog}>
                Cancle
              </Button>
              <Button type="submit" variant="contained">
                {isEditMode ? "Update" : "Save"}
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoodDialog;
