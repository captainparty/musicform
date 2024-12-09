import React from 'react';
import { FormField as FormFieldType } from '../types/form';
import FormField from './FormField';

interface FormSectionProps {
  title: string;
  description?: string;
  fields: FormFieldType[];
  register: any;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  fields,
  register,
}) => {
  return (
    <div className="bg-gray-800 p-4 md:p-6 rounded-lg">
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h2>
      {description && (
        <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">{description}</p>
      )}
      <div className="space-y-4 md:space-y-6">
        {fields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
          />
        ))}
      </div>
    </div>
  );
};

export default FormSection;