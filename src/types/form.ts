export interface FormSection {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'date' | 'time' | 'select' | 'textarea';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}