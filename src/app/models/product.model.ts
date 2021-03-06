import { Category } from "./category.model";
import { Company } from "./company.model";

export interface Product{
    id : number;
    name : string;
    description: string;
    initialPrice : string;
    purchasedDate: Date;
    prodAge: number;
    depreciationValue: number;
    currentValue: number;
    categoryId: Category;
    companyId: Company;
}