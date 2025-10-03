import * as React from "react";

export const FormFieldContext = React.createContext<{ name: string } | undefined>(undefined);
export const FormItemContext = React.createContext<{ id: string } | undefined>(undefined);

export function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);

  if (!fieldContext || !itemContext) {
    throw new Error("useFormField must be used within a FormField and FormItem context");
  }

  const formItemId = itemContext.id;
  const formDescriptionId = `${formItemId}-description`;
  const formMessageId = `${formItemId}-message`;
  const error = undefined;

  return {
    name: fieldContext.name,
    formItemId,
    formDescriptionId,
    formMessageId,
    error,
  };
}
