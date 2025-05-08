import { BaseModel } from "../../models/base-model.model";

export interface BaseUser extends BaseModel {
    roles?: string[];
}