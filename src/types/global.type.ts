import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type Tcar ={
  _id:string;
  brand:string;
  model:string;
  year:number;
  price:number;
  category:string;
  image:string;
  description:string;
  quantity:number;
  inStock:boolean;

}


export type TError = {
    data: {
      message: string;
      stack: string;
      success: boolean;
    };
    status: number;
  };
  export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
  export type TResponse<T> = {
    data?: {
        result: T; 
        meta?: TMeta;
      };
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};
