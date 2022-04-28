export class SaleModel {
    _id: string = '';
    private_web_address: string = '';
    user_id: string = '';
    store_name: string = '';
    outlet: string = '';
    register: string = '';
    sale_number: string = '';
    payment_status: string = '';
    sale_status: string = '';
    note: string = '';
    customer: string = '';
    total: number = 0;
    subtotal: number = 0;
    total_paid: number = 0;
    total_item: number = 0;
    tax: number = 0;
    discount_mode: string = '';
    discount_value: number = 0;
    change: number = 0;
    fulfillment_mode: string = '';
    fulfullment_customer: string = '';
    fulfillment_email: string = '';
    fulfillment_mobile: string = '';
    fulfillment_phone: string = '';
    fulfillment_fax: string = '';
    cart_mode: string = '';
    returned: number = 0;
    voided: number = 0;
    origin_customer: string = '';
    origin_sale_number: string = '';
    origin_status: string = '';
    created_at: number = 0;
    is_new: number = 0;
    is_update: number = 0;
    is_delete: number = 0;
}
