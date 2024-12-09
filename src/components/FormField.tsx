import React from 'react';
import { FormField as FormFieldType } from '../types/form';

interface FormFieldProps {
  field: FormFieldType;
  register: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register }) => {
  const baseInputClasses = "w-full bg-gray-700 text-white rounded-md px-3 md:px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-500";

  switch (field.type) {
    case 'textarea':
      return (
        <div>
          <label className="block text-sm md:text-base text-gray-200 mb-1 md:mb-2">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <textarea
            {...register(field.id, { required: field.required })}
            className={`${baseInputClasses} min-h-[80px] md:min-h-[100px]`}
            placeholder={field.placeholder}
          />
        </div>
      );

    case 'select':
      return (
        <div>
          <label className="block text-sm md:text-base text-gray-200 mb-1 md:mb-2">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <select
            {...register(field.id, { required: field.required })}
            className={baseInputClasses}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      return (
        <div>
          <label className="block text-sm md:text-base text-gray-200 mb-1 md:mb-2">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <input
            type={field.type}
            {...register(field.id, { required: field.required })}
            className={baseInputClasses}
            placeholder={field.placeholder}
          />
        </div>
      );
  }
};

export default FormField;