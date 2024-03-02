import * as Yup from 'yup';
export const menuSchema = Yup.object({
  menuName: Yup.string()
    .min(2, 'Menu name can be greater than 2 alphabets')
    .max(30, 'Character limit reached')
    .required('Please enter menu name'),
  posDisplayName: Yup.string()
    .min(2, 'Pos name can be greater than 2 alphabets')
    .max(20, 'Character limit reached')
    .required('Please enter pos name'),
});

export const categorySchema = Yup.object({
  categoryName: Yup.string()
    .min(3, 'Category name must be greater than 2 letters')
    .max(30, 'Max characters limit reached')
    .required('Please enter category name'),
  posDisplayName: Yup.string()
    .min(3, 'POS name must be greater than 2 letters')
    .max(20, 'Character limit reached')
    .required('Please enter pos name'),
  kdsDisplayName: Yup.string()
    .min(3, 'KDS name must be greater than 2 letters')
    .max(20, 'Character limit reached')
    .required('Please enter kds name'),
});
