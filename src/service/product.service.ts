import { ProductDocument } from "./../models/product.model";
import ProductModel from "./../models/product.model";
import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

export async function createProduct(
  input: DocumentDefinition<Omit<ProductDocument, "createAt" | "upateAt">>
) {
  return ProductModel.create(input);
}

export async function findProduct(
  query: FilterQuery<ProductDocument>,
  options: QueryOptions = { lean: true }
) {
    return ProductModel.findOne({ query, options });
}

export async function findAndUpdateProduct(
  query: FilterQuery<ProductDocument>,
  update: UpdateQuery<ProductDocument>,
  options: QueryOptions
) {
  return ProductModel.findOneAndUpdate(query, update, options);
}
export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.deleteOne(query);
}
