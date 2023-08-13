import React from "react"
import { Path, RegisterOptions, useFormContext } from "react-hook-form"

import Input from "@/components/ui-components/Input"

type Props<T extends object = { _: never }> = T extends object
  ? {
      name: Path<T>
      formOptions?: RegisterOptions<T>
    } & Omit<React.ComponentProps<typeof Input>, "name" | "inputRef">
  : never

const FormInput = <T extends object>({
  name,
  formOptions,
  ...inputProps
}: Props<T>) => {
  const { register } = useFormContext<T>()

  return <Input {...register(name, formOptions)} {...inputProps} />
}

export default FormInput
