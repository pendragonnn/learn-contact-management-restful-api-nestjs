export class AddressResponse {
  id: number;
  street?: string | null;
  city?: string | null;
  province?: string | null;
  country: string;
  postal_code: string;
}

export class CreateAddressRequest {
  contact_id: number;
  street?: string | null;
  city?: string | null;
  province?: string | null;
  country: string;
  postal_code: string;
}

export class GetAddressRequest {
  contact_id: number;
  address_id: number;
}

export class UpdateAddressRequest {
  id: number;
  contact_id: number;
  street?: string | null;
  city?: string | null;
  province?: string | null;
  country: string;
  postal_code: string;
}

export class RemoveAddressRequest {
  contact_id: number;
  address_id: number;
}
