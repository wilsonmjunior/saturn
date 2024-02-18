import { FormField } from "@/components/common";

export const formFields = [
  {
    name: "name",
    rules: { required: "Nome é obrigatório" },
    common: {
      label: "Nome",
      type: "text-input",
      placeholder: "Nome",
    },
  },
  {
    name: "age",
    common: {
      label: "Idade",
      type: "text-input",
      placeholder: "Idade",
    },
  },
  {
    name: "email",
    rules: { required: "E-mail é obrigatório" },
    common: {
      label: "E-mail",
      type: "text-input",
      placeholder: "E-mail",
    },
  },
  {
    name: "cellphone",
    common: {
      label: "Celular",
      type: "text-input",
      placeholder: "Celular",
    },
  },
] as FormField[];
