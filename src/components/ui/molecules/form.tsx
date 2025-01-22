import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as ShadcnForm,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

interface FormProps<T extends z.ZodType> {
  schema: T;
  defaultValues?: Partial<z.infer<T>>;
  onSubmit: (values: z.infer<T>) => void;
  variant?: 'stacked' | 'inline' | 'compact';
  className?: string;
  children: (form: ReturnType<typeof useForm<z.infer<T>>>) => React.ReactNode;
}

const variantStyles = {
  stacked: 'space-y-6',
  inline: 'flex flex-wrap gap-4 items-end',
  compact: 'space-y-4',
};

function CustomForm<T extends z.ZodType>({
  schema,
  defaultValues,
  onSubmit,
  variant = 'stacked',
  className,
  children,
}: FormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as any,
  });

  return (
    <ShadcnForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(variantStyles[variant], className)}
      >
        {children(form)}
      </form>
    </ShadcnForm>
  );
}

// Re-export form components for convenience
export {
  CustomForm as Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  type FormProps,
};
