import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
    size: yup.string()
    .oneOf(['small', 'medium', 'large'], 'Size is required'),
    sauce: yup.string()
    .oneOf(['original red', 'white truffle', 'spinach alfredo'], 'sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    mushrooms: yup.boolean(),
    artichoke: yup.boolean(),
    olives: yup.boolean(),
    extraCheese: yup.boolean(),
    special: yup.string(),
    
})

export default formSchema;



