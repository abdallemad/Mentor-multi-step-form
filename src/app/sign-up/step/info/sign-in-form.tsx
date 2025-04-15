"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formOptions } from "@/hooks/use-create-form/form-schema"
import { useCreateForm } from "@/hooks/use-create-form"

export function InputForm() {
  const { form, onSubmit, loading } = useCreateForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-auto grow flex flex-col">
        <div className="space-y-4">
          {
            formOptions.map(option => (
              <FormField
                key={option.name}
                control={form.control}
                name={option.name}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex justify-between items-center">
                      <FormLabel>{option.label}</FormLabel>
                      <FormMessage className="text-xs" />
                    </div>
                    <FormControl>
                      <Input placeholder={option.placeholder} className="w-full" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))
          }
        </div>
        <div className="flex justify-end md:mt-auto mt-8">
          <Button type="submit" disabled={loading}>Next Step {loading && '...'}</Button>
        </div>
      </form>
    </Form>
  )
}
