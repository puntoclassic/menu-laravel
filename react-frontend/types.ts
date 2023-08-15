export type CartItem = {
  id: number;
  name?: string;
  price?: number;
};

export type CartRow = {
  item: CartItem;
  quantity: number;
};

export type CategoryFields = {
  name: string;
  imageFile: FileList;
  image: string;
};

export type CreateCategoryFields = CategoryFields;
export type UpdateCategoryFields = CategoryFields & {
  id: number;
};

export type ChangePasswordFields = {
  email: string;
  current_password: string;
  password: string;
  password_confirmation: string;
};

export type LoginFields = {
  email: string;
  password: string;
  backUrl?: string;
};

export type PersonalInfoFields = {
  firstname: string;
  lastname: string;
};

export type ResetPasswordFields = {
  email: string;
};

export type ResetPasswordTokenFields = {
  token: string;
  password: string;
  confirmPassword: string;
  email: string;
};

export type SigninFields = {
  email: string;
  password: string;
  password_confirmation: string;
  firstname: string;
  lastname: string;
};

export type VerifyAccountFields = {
  email: string;
};

export type SearchFields = {
  search: string;
};

export interface OrderStateFields {
  id: number;
  name: string;
  css_badge_class?: string;
}

export type CreateFoodFields = {
  name: string;
  ingredients: string;
  price: number;
  category_id: number;
};

export type UpdateFoodFields = CreateFoodFields & {
  id: number;
};

export type Category = {
  id: number;
  name: string;
  image: string;
};

export type InformazioniConsegnaFields = {
  delivery_time: string;
  delivery_address: string;
};

export type RiepilogoOrdineFields = {
  note: string;
};

export enum TipologiaConsegna {
  ASPORTO = "ASPORTO",
  DOMICILIO = "DOMICILIO",
}

export type TipologiaConsegnaFields = {
  tipologia_consegna: TipologiaConsegna;
};

export type CartState = {
  items: { [name: string]: CartRow };
  total: number;
  tipologia_consegna: TipologiaConsegna;
  delivery_address: string;
  delivery_time: string;
  note: string;
};

export type MessagesState = {
  message?: Message | null;
};

export type Message = {
  type: string;
  text: string;
};

export type Settings = {
  site_title: string;
  site_subtitle: string;
  shipping_costs: number;
  order_created_state_id: number;
  order_paid_state_id: number;
};

export type CurrentUser = {
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  role: string;
};

export interface OrderState {
  id: number;
  name: string;
  css_badge_class: string | undefined;
}

export type CreateOrderStateFields = {
  name: string;
  css_badge_class: string | undefined;
};

export type UpdateOrderStateFields = CreateOrderStateFields & {
  id: number;
};

export interface OrderDetail {
  orderId: number;
  id: number;
  name: string | null;
  quantity: number;
  unit_price: number;
}

export interface OrderDetailRow {
  orderId: number;
  id: number;
  name: string | null;
  quantity: number;
  unit_price: number;
}

export interface GetOrderDetailResponse {
  id: number;
  order_status: OrderState | null;
  is_paid: boolean;
  is_shipping_required: boolean;
  delivery_address: string | null;
  delivery_time: string | null;
  notes: string | null;
  shipping_costs: number;
  order_details: OrderDetail[] | null;
  total: number;
}

export type OrderCardItem = {
  id: number;
  total: number;
  order_status: OrderState;
};
