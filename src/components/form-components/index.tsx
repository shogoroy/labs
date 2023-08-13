import clsx from "clsx"
import React from "react"
import { useCallback } from "react"
import {
  FormProvider,
  useForm as useReactHookForm,
  UseFormProps,
} from "react-hook-form"

import Button from "@/components/ui-components/Button"
import Loading from "@/components/ui-components/Loading"

type OnSubmit<T extends object> = (data: T) => void | Promise<void>

type HookProps<T extends object> = {
  onSubmit?: OnSubmit<T>
} & UseFormProps<T>

export const useForm = <T extends object>({
  ...formOptions
}: HookProps<T> = {}) => {
  const formMethods = useReactHookForm<T>({
    reValidateMode: "onBlur",
    ...formOptions,
  })

  const Form = useCallback<
    React.FC<
      {
        onSubmit: (data: T) => void | Promise<void>
      } & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">
    >
  >(
    ({ onSubmit, children, ...props }) => {
      return (
        <FormProvider {...formMethods}>
          <form {...props} onSubmit={formMethods.handleSubmit(onSubmit)}>
            {children}
          </form>
        </FormProvider>
      )
    },
    [formMethods]
  )

  const SubmitButton = useCallback<
    React.FC<Omit<React.FormHTMLAttributes<HTMLButtonElement>, "type">>
  >(
    ({ children, ...props }) => (
      <Button
        {...props}
        className={clsx(
          "flex",
          "justify-center",
          "items-center",
          "gap-x-2",
          props.className
        )}
      >
        {formMethods.formState.isSubmitting && <Loading />}
        {children}
      </Button>
    ),
    [formMethods.formState.isSubmitting]
  )

  return { formMethods, Form, SubmitButton }
}
